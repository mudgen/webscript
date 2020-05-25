
const { elementBuilders } = window.Webscript;
let { body, div, p, nav, h1, ol, li, pre, code, a } = elementBuilders;

let app = div("cool man!")
document.body = app;