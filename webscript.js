// @ts-check

function addChild(element, child) {
  if (typeof child === "number"
    || typeof child === "bigint"
    || typeof child === "boolean"
    || child instanceof Date
    || child instanceof RegExp) {
    element.append(String(child))
  }
  else if (Array.isArray(child)) {
    for (const childChild of child) {
      addChild(element, childChild);
    }
  }
  else if (typeof child !== "undefined" && child !== null) {
    element.append(child);
  }
}

function createElement(tagName, props, ...children) {
  tagName = tagName.toLowerCase();
  const element = ["svg", "path", "title"].includes(tagName) ?
    document.createElementNS("http://www.w3.org/2000/svg", tagName) :
    document.createElement(tagName);
  for (let key in props) {
    let value = props[key];
    if (typeof value === "string") {
      if (key === "className") {
        key = "class"
      }
      element.setAttribute(key, value)
    }
    else {
      element[key] = value;
    }
  }
  for (const child of children) {
    addChild(element, child);
  }
  return element;
}


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
  function getPropertyValue(...args) {
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
  function getPropsValues(props) {
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
          return getPropsValues;
        }
        else if (typeof prop === "string") {
          if (prop.startsWith("data")) {
            prop = prop.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
          }
          // @ts-ignore
          target.__element_info__.prop = prop;
          return getPropertyValue;
        }
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      }
    })
    builder.__element_info__ = propsInfo;
    return builder;
  }
  return elementBuilder({ props: {}, prop: null });
}


function elementBuildersBuilder(elementConstructor = createElement, elements = []) {
  if (Object.prototype.toString.call(elementConstructor) === '[object Object]') {
    elementConstructor = elementConstructor["elementConstructor"] || createElement;
    elements = elementConstructor["elements"] || [];
  }
  elementConstructor = elementConstructor || createElement;
  if (elements.length > 0) {
    let builders = [];
    for (const element of elements) {
      builders.push(elementBuilderBuilder(elementConstructor, element));
    }
    return builders;
  }
  else {
    return new Proxy(() => { }, {
      apply(target, thisArg, args) {
        return elementBuildersBuilder(...args);
      },
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
const elementBuilders = elementBuildersBuilder();
if (document.currentScript === null
  || typeof document.currentScript === "undefined") {
  // @ts-ignore
  window.Webscript = { elementBuilders: elementBuilders }
}
export default elementBuilders;

