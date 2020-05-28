const addChild = require("./addChild");

const createElement = (tagName, props, ...children) => {
  tagName = tagName.toLowerCase();

  const element = { tagName };
  element.children = [];
  element.value = "";
  element.append = (child) => {
    if (typeof child === "string") {
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

module.exports = createElement;
