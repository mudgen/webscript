function templateValues(args) {
  const [strings, ...templateArgs] = args;
  const result = [];
  for (const [index, s] of strings.entries()) {
    if (s !== "") {
      result.push(s);
    }
    let arg = templateArgs[index];
    if (typeof arg !== "undefined") {
      result.push(arg);
    }
  }
  return result;
}

let interpunct = new RegExp("·", "g");

function createInitialBuilder(constructor, type) {
  function setPropertyValue(...args) {
    let [value] = args;
    let { props, prop } = this.__element_info__;
    if (typeof value === "undefined") {
      props = { ...props };
      delete props[prop];
      return createBuilder({ props, prop: null });
    }
    else if (Array.isArray(value) && Object.isFrozen(value)) {
      value = templateValues(args).join("");
    }
    else if (args.length > 1) {
      value = args;
    }
    props = { ...props, [prop]: value };
    return createBuilder({ props, prop: null });
  }
  function setPropsValues(props) {
    let { props: existingProps } = this.__element_info__;
    props = { ...existingProps, ...props };
    return createBuilder({ props, prop: null });
  }
  function createBuilder(propsInfo) {
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
        if (Array.isArray(props.children)) {
          props.children.push(...children)
          children = props.children;
          delete props.children;
        }
        for (let i = 0; i < children.length; i++) {
          let arg = children[i];
          if (typeof arg === "function" && arg.__element_info__) {
            children[i] = arg();
          }
        }
        return constructor(type, props, ...children);
      },
      get(target, prop) {
        if (prop === "props") {
          return setPropsValues;
        }
        else if (prop === "__element_info__") {          
          return target[prop]
        }
        else if (typeof prop === "string") {
          if (prop.indexOf("·") !== -1) {
            prop = prop.replace(interpunct, "-");
          }
          if (prop.endsWith("Value") && prop.length > 5) {
            return target.__element_info__.props[prop.slice(0, -5)];
          }
          target.__element_info__.prop = prop;
          return setPropertyValue;
        }
      }
    })
    builder.__element_info__ = propsInfo;
    return builder;
  }
  return createBuilder({ props: {}, prop: null });
}


function builders(constructor, types = []) {
  if (typeof constructor !== "function") {
    throw Error("elementConstructor argument must be present and it must be a function.");
  }
  if (types.length > 0) {
    let builders = [];
    for (const element of types) {
      builders.push(createInitialBuilder(constructor, element));
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
        target[prop] = createInitialBuilder(constructor, prop);
        return target[prop];
      }
    });
  }
}

export default builders;
