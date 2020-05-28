const test = require("ava");
const webscript = require("../src/webscript");

test("that elements render", (t) => {
  const { render, object } = webscript;

  const { div, p } = render(object);

  const out = div(p("hello world"));

  const child = out.children[0];

  t.is(child.value, "hello world");
});
