import addChild from './helpers/addChild.js';

function createElement(tagName, props, ...children) {
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

export default createElement;