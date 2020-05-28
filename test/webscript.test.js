const test = require("ava");
const webscript = require("../src/webscript");

test("that elements render", (t) => {
  const { renderObject } = webscript;

  const { div, p } = renderObject;

  const out = div(p("hello world"));

  const child = out.children[0];

  t.is(child.value, "hello world");
});
