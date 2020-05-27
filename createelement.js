function addChild(element, child) {
  if (typeof child === "number"
    || typeof child === "bigint"
    || child instanceof Date
    || child instanceof RegExp) {
    element.append(String(child))
  }
  else if (Array.isArray(child)) {
    for (const childChild of child) {
      addChild(element, childChild);
    }
  }
  else if (typeof child !== "undefined"
    && child !== null
    && typeof child !== "boolean") {
    element.append(child)
  }
}


export function createElement(tagName, props, ...children) {
  tagName = tagName.toLowerCase();
  const element = document.createElement(tagName);
  for (let key in props) {
    let value = props[key];
    if (typeof value === "string") {
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

export function createSVGElement(tagName, props, ...children) {
  tagName = tagName.toLowerCase();
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  for (let key in props) {
    let value = props[key];
    if (typeof value === "string") {
      if (key.startsWith("xlink:")) {
        element.createAttributeNS("http://www.w3.org/1999/xlink", key, value)
      }
      else {
        element.setAttribute(key, value)
      }
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
