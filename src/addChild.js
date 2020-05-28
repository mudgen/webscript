const addChild = (element, child) => {
  if (
    typeof child === "string" ||
    typeof child === "number" ||
    typeof child === "bigint" ||
    child instanceof Date ||
    child instanceof RegExp
  ) {
    element.append(String(child));
  } else if (Array.isArray(child)) {
    for (const childChild of child) {
      addChild(element, childChild);
    }
  } else if (
    typeof child !== "undefined" &&
    child !== null &&
    typeof child !== "boolean"
  ) {
    element.append(child);
  }
};

module.exports = addChild;
