import addChild from './helpers/addChild.js';

function createElement(tagName, props, ...children) {
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

export default createElement;