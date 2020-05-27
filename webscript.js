
function templateValues(args) {
  const [strings, ...templateArgs] = args;
  const result = [];
  for (const [index, s] of strings.entries()) {
    if (s !== "") {
      result.push(s);
    }
    let arg = templateArgs[index];
    if (typeof arg !== "undefined") {
      result.push(arg)
    }
  }
  return result
}


function elementBuilderBuilder(elementConstructor, element) {
  function setPropertyValue(...args) {
    let [first] = args;
    if (typeof first === "undefined") {
      first = '';
    }
    else if (Array.isArray(first) && Object.isFrozen(first)) {
      first = templateValues(args).join("");
    }
    let { props, prop } = this.__element_info__;
    props = { ...props, [prop]: first }
    return elementBuilder({ props, prop: null });
  }
  function setPropsValues(props) {
    let { props: existingProps } = this.__element_info__;
    props = { ...existingProps, ...props }
    return elementBuilder({ props, prop: null });
  }
  function elementBuilder(propsInfo) {
    let builder = new Proxy(() => { }, {
      apply(target, thisArg, children) {
        let { props } = builder.__element_info__;
        if (typeof props.exec === "function") {
          let exec = props.exec;
          delete props.exec;
          let result = exec(builder, children);
          props.exec = exec;
          return result;
        }
        let [first] = children;
        if (Array.isArray(first) && Object.isFrozen(first)) {
          children = templateValues(children);
        }
        for (let i = 0; i < children.length; i++) {
          let arg = children[i];
          if (typeof arg === "function" && arg.__element_info__) {
            children[i] = arg();
          }
        }
        return elementConstructor(element, props, ...children);
      },
      get(target, prop) {
        const result = target[prop];
        if (typeof result !== "undefined") {
          return result;
        }
        if (prop === "props") {
          return setPropsValues;
        }
        else if (typeof prop === "string") {
          if (prop.endsWith("Value") && prop.length > 5) {
            return target.__element_info__.props[prop.slice(0, -5)]
          }
          target.__element_info__.prop = prop;
          return setPropertyValue;
        }
      }
    })
    builder.__element_info__ = propsInfo;
    return builder;
  }
  return elementBuilder({ props: {}, prop: null });
}


function elementBuilders(elementConstructor, elements = []) {
  if (typeof elementConstructor !== "function") {
    throw Error("elementConstructor argument must be present and it must be a function.")
  }
  if (elements.length > 0) {
    let builders = [];
    for (const element of elements) {
      builders.push(elementBuilderBuilder(elementConstructor, element));
    }
    return builders;
  }
  else {
    return new Proxy(() => { }, {
      get(target, prop) {
        const result = target[prop];
        if (typeof result !== "undefined") {
          return result;
        }
        target[prop] = elementBuilderBuilder(elementConstructor, prop);
        return target[prop];
      }
    });
  }
}

if (document.currentScript !== null
  && typeof document.currentScript !== "undefined") {
  window.Webscript = { elementBuilders }
}
export default elementBuilders;

