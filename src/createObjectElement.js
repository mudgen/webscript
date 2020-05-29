const addChild = (element, child) => {
  if (
    child === null ||
    typeof child === "undefined" ||
    element === null ||
    typeof element.append !== "function"
  ) {
    return;
  }

  if (Array.isArray(child)) {
    for (const childChild of child) {
      addChild(element, childChild);
    }
    return;
  }

  let value = child;
  if (
    !(
      typeof child === "string" ||
      typeof child === "boolean" ||
      typeof child === "object" ||
      typeof child === "number" ||
      typeof child === "bigint"
    )
  ) {
    value = JSON.stringify(child);
  }

  element.append(value);
};

const createElement = (tagName, props, ...children) => {
  tagName = tagName.toLowerCase();

  const element = { tagName };
  element.children = [];
  element.value = "";
  element.__isElement = true;
  element.append = (child) => {
    if (
      typeof child === "string" ||
      typeof child === "boolean" ||
      (typeof child === "object" && !child.__isElement)
    ) {
      element.value = child;
      return;
    }

    element.children.push(child);
  };

  for (const key in props) {
    const value = props[key];
    element[key] = value;
  }

  for (const child of children) {
    addChild(element, child);
  }

  return element;
};

export default createElement;
