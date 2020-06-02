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

export const enhanceBuilder = (builder, func) => {
  builder.__webscript_enhancer = func;
  return builder;
}

function createInitialBuilder(constructor, type) {
  function createBuilder(props, prop) {
    let builder = new Proxy(() => { }, {
      apply(target, thisArg, children) {
        if (typeof target.__webscript_enhancer === "function") {
          let __webscript_enhancer = target.__webscript_enhancer;
          delete target.__webscript_enhancer;
          let result = __webscript_enhancer(builder, children);
          target.__webscript_enhancer = __webscript_enhancer;
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
          if (typeof arg === "function" && arg.__is_webscript_element === true) {
            children[i] = arg();
          }
        }
        return constructor(type, props, ...children);
      },
      get(target, elementName) {
        if (typeof elementName === "string") {
          if (elementName === "__is_webscript_element") {
            return true;
          }
          else if (elementName === "__webscript_enhancer") {
            return target[elementName]
          }
          else if (elementName.indexOf("·") !== -1) {
            elementName = elementName.replace(interpunct, "-");
          }

          function setPropertyValue(...args) {
            let [value] = args;
            if (typeof value === "undefined") {
              if (prop === "props" && Object.prototype.toString.call(value) === '[object Object]') {
                return createBuilder({}, null);
              }
              let newProps = { ...props };
              delete newProps[prop];
              return createBuilder(newProps, null);
            }
            else if (Array.isArray(value) && Object.isFrozen(value)) {
              value = templateValues(args).join("");
            }
            else if (args.length > 1) {
              value = args;
            }
            else if (prop === "props" && Object.prototype.toString.call(value) === '[object Object]') {
              return createBuilder({ ...props, ...value }, null);
            }
            const newProps = { ...props, [prop]: value };
            return createBuilder(newProps, null);
          }
          if (elementName === "props") {
            setPropertyValue.value = props;
          }
          else {
            setPropertyValue.value = props[elementName];
          }
          prop = elementName;
          return setPropertyValue;
        }
      }
    })
    return builder;
  }
  return createBuilder({}, null);
}


function builders(constructor, types = []) {
  if (typeof constructor !== "function") {
    throw Error("elementConstructor argument must be present and it must be a function.");
  }
  if (types.length > 0) {
    let builders = [];
    for (const type of types) {
      builders.push(createInitialBuilder(constructor, type));
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

