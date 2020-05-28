const addChild = require("./addChild");

const createElement = (tagName, props, ...children) => {
  tagName = tagName.toLowerCase();
  const element = document.createElement(tagName);

  for (const key in props) {
    const value = props[key];
    if (typeof value === "string") {
      element.setAttribute(key, value);
    } else {
      element[key] = value;
    }
  }

  for (const child of children) {
    addChild(element, child);
  }
  return element;
};

module.exports = createElement;
