// @ts-check
/* eslint-disable no-unexpected-multiline */

import { constructElement } from './libs/viv.js';
import elementBuilders from '../webscript.js'
import examples from './examples.js';
//import minify = require('html-minifier-terser');

//const { h1: { text: h1t }, div, h1, h2, span, button, textarea, pre, code } = elementConstructors;
//console.log(require());
// @ts-ignore
// eslint-disable-next-line no-undef
const htmlMinify = window.require('html-minifier').minify;
// @ts-ignore
const Terser = window.Terser;

// eslint-disable-next-line no-unused-vars
const { svg, path, title, body, div, p, label, h1, h2, h3, span, button, input } = elementBuilders(constructElement);


// @ts-ignore
const CodeMirror = window.CodeMirror;
let maxLineLength = 125;
let classAndId = true;
let showParens = false;
let endParensNewline = false;
let minifyCode = false;
let htmlChars = 0;
let javascriptChars = 0;

let exampleProperties = Object.keys(examples);
function getExampleHash() {
  return exampleProperties[Math.floor(exampleProperties.length * Math.random())]
}
// eslint-disable-next-line no-unused-vars
function showExample(e) {
  let oldHash = window.location.hash;
  let newHash = getExampleHash();
  if (oldHash !== "#" + newHash) {
    window.location.hash = newHash;
  }
  else {
    showExample();
  }
  //codeMirror.setValue(getExampleHash());

}
window.addEventListener("hashchange", () => {
  let hash = window.location.hash;
  let example;
  if (hash) {
    example = examples[hash.slice(1)];
  }
  if (example) {
    codeMirror.setValue(example);
  }
  else {
    codeMirror.setValue("")
  }
})

// eslint-disable-next-line no-unused-vars
window.addEventListener("DOMContentLoaded", function (ev) {
  let hash = window.location.hash;
  let example;
  if (hash) {
    example = examples[hash.slice(1)];
  }
  if (example) {
    codeMirror.setValue(example);
  }
  else {
    codeMirror.setValue("")
  }
});


function copyScript(e) {
  const text = displayCodeMirror.getValue();
  navigator.clipboard.writeText(text);
  e.currentTarget.blur();
}

function clearText() {
  window.location.hash = "";
  return false;
}


function showSettings() {
  const settings = document.getElementById("settings");
  const background = settings.firstElementChild;
  const content = background.nextElementSibling;
  content.classList.remove("duration-200")
  content.classList.add("ease-out", "duration-300", "opacity-100", "scale-100")
  //settings.classList.add("sm:flex", "block")
  settings.classList.remove("invisible")
  background.classList.add("ease-out", "duration-300", "opacity-100")
  background.classList.remove("duration-200");
  //background.classList.add("ease-out", "duration-300", "sm:flex", "block", "opacity-0")
}


function hideSettings() {
  const settings = document.getElementById("settings");
  const background = settings.firstElementChild;
  const content = background.nextElementSibling;
  content.classList.remove("ease-out", "duration-300", "opacity-100", "scale-100")
  content.classList.add("ease-in", "duration-200", "opacity-0", "scale-50")
  //settings.classList.add("sm:flex", "block")
  //settings.classList.remove("invisible")
  background.classList.remove("ease-out", "duration-300", "opacity-100")
  background.classList.add("ease-in", "duration-200")
  setTimeout(() => {
    settings.classList.add("invisible");
  }, 200);
  //settings.classList.add("invisible")
  //background.classList.add("ease-out", "duration-300", "sm:flex", "block", "opacity-0")
}

function saveSettings() {
  const maxLineLengthInput = document.getElementById("max-line-length");
  //const classAndIdInput = document.getElementById("class-and-id");
  const contentParensInput = document.getElementById("content-parens");
  const endParensNewlineInput = document.getElementById("end-parens")
  // @ts-ignore
  showParens = contentParensInput.checked;
  // @ts-ignore
  endParensNewline = endParensNewlineInput.checked;
  // @ts-ignore
  //classAndId = classAndIdInput.checked;
  // @ts-ignore
  maxLineLength = maxLineLengthInput.value;
  hideSettings();
  // @ts-ignore
  let minify = document.getElementById("minify").checked;
  if (minify === false && minifyCode == true) {
    minifyCode = false;
    codeMirror.setValue(oldHtml)
  }
  else {
    minifyCode = minify;
    updateCodeMirror();
  }

}



const settings =
  div.id`settings`.class`fixed flex inset-0 items-center justify-center invisible z-10`.onclick(hideSettings)(
    /* 
      Background overlay, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    */
    div.class`fixed inset-0 transition-opacity opacity-0`(
      div.class`absolute inset-0 bg-gray-500 opacity-75`),
    /* 
      Modal panel, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    */
    div.class`bg-white rounded-lg px-4 pt-3 pb-4 overflow-hidden shadow-xl transform transition-all max-w-sm w-full p-6 opacity-0 scale-50`
      .role`dialog`.aria`true`.aria`modal-headline`.onclick((e) => e.stopPropagation())(
        div(
          h3.id`modal-headline`.class`text-lg leading-6 font-medium text-gray-900 mb-2``Settings`,
          div.class`grid grid-cols-2 items-center border-t pt-3`(
            label.class`block``Indent Line Length:`,
            input.id`max-line-length`.class`form-input`.type`number`.value(maxLineLength)
          ),
          div.class`grid grid-cols-2 items-center pt-3`(
            label.class`block`("Show Content Parens:"),
            input.id`content-parens`.class`form-checkbox h-5 w-5 text-indigo-600`.type`checkbox`.checked(showParens)
          ),
          // div.class`grid grid-cols-2 items-center pt-3`(
          //   label.class`block`("Show class and id:"),
          //   input.id`class-and-id`.class`form-checkbox h-5 w-5 text-indigo-600`.type`checkbox`.checked(classAndId)
          // ),
          div.class`grid grid-cols-2 items-center pt-3`(
            label.class`block`("End Parens on Newline:"),
            input.id`end-parens`.class`form-checkbox h-5 w-5 text-indigo-600`.type`checkbox`.checked(endParensNewline)
          ),
          div.class`grid grid-cols-2 items-center pt-3`(
            label.class`block`("Minify:"),
            input.id`minify`.class`form-checkbox h-5 w-5 text-indigo-600`.type`checkbox`.checked(minifyCode)
          )

        ),
        div.class`mt-5 sm:mt-6`(
          span.class`flex w-full rounded-md shadow-sm`(
            button.class`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-base sm:leading-5`
              .type`button`.onclick(saveSettings)("Save Settings")))));

const app =
  body.class`bg-indigo-100`(
    div.class`flex flex-col h-screen`(
      h1.id`header`.class`p-5 text-2xl text-indigo-900 font-medium cursor-pointer`.onclick(clearText)
        ("Convert HTML to Webscript"),
      div.class`flex-1 bg-indigo-200 text-center px-2 pb-2 m-2 grid gap-2 grid-cols-2 text-white rounded-md`(
        div.class`flex flex-col`(
          div.class`flex items-center`(
            div.class`flex flex-1`(
              button.class`px-1 border border-transparent text-sm font-medium rounded text-gray-200 bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:border-indigo-400 focus:shadow-outline-indigo active:bg-indigo-500`(
                { "type": 'button', onclick: showExample },
                'Insert Random Example')),
            div.class`flex items-center mb-1 text-indigo-900`(
              h2.class`text-xl font-medium`("Type or paste HTML"),
              span.id`htmlChars`.class`block ml-2 font-medium`(function htmlCharsText() { return `(${htmlChars.toLocaleString()} chars)` })),
            div.class`flex-1`),
          div.id`htmlEditor`.class`h-full rounded-md shadow-inner text-left`()),
        div.class`flex flex-col`(
          div.class`flex`(
            div.class`flex-1`,
            div.class`flex`(
              div.class`flex items-center mb-1 text-indigo-900`(
                h2.class`text-xl font-medium`("Copy Webscript"),
                span.id`javascriptChars`.class`block ml-2 font-medium`(function javascriptCharsText() { return `(${javascriptChars.toLocaleString()} chars)` })),
            ),
            div.class`flex flex-1 justify-end items-center`(
              button.class`flex mr-3 text-indigo-500 hover:text-indigo-800`.onclick(copyScript)(
                span.class`font-medium mr-1`("Copy"),
                svg.class`w-6 h-6 fill-current`.viewBox`0 0 20 20`(
                  title("Copy"),
                  path.d`M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z`)),
              button.class`flex text-indigo-500 hover:text-indigo-800`.onclick(showSettings)(
                span.class`font-medium mr-1`("Settings"),
                svg.class`w-6 h-6 fill-current`.viewBox`0 0 20 20`(
                  path.d`M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z`)
              ))),
          div.id`jsEditor`.class`h-full rounded-md shadow-inner text-left`()),
      )),
    settings
  )


//document.getElementById("root").replaceWith(app);
document.body = app;

const codeMirror = CodeMirror(document.getElementById("htmlEditor"), { mode: "xml", htmlMode: true, placeholder: "Type or paste HTML..." });
const displayCodeMirror = CodeMirror(document.getElementById("jsEditor"), { mode: "javascript", addModeClass: true, flattenSpans: false });

let output = []

function out(o, indent) {
  indent += 2;
  let lineSize = indent;
  let needsComma = false;

  output.push(o.tagName);
  lineSize += o.tagName.length;

  for (const [index, attr] of o.attrs.entries()) {
    if (index > 0 && lineSize + attr.length > maxLineLength) {
      output.push(`\n${" ".repeat(indent)}`);
      lineSize = indent;
    }
    output.push(attr);
    lineSize += attr.length
  }
  // if (o.children.length > 0) {
  //   if (showParens || o.children.length > 1) {
  //     output.push("(");
  //   }
  //   lineSize += 1;
  // }

  if (o.hasMultipleChildren) {
    output.push("(");
    lineSize += 1;
    for (const child of o.children) {
      if (needsComma) {
        output.push(",");
        needsComma = false;
      }
      output.push(`\n${" ".repeat(indent)}`);
      if (typeof child === "string") {
        output.push(`"${child}"`);
        needsComma = true;
      }
      else if (child.nodeType) {
        output.push("/* ");
        output.push(child.nodeValue)
        output.push("*/")
      }
      else {
        out(child, indent);
        needsComma = true;
      }
    }
    if (endParensNewline) {
      output.push(`\n${" ".repeat(indent - 2)}`);
    }
    output.push(")");
  }
  else if (o.children.length === 1) {
    let child = o.children[0];
    if (typeof child === "string") {
      let punctuationSize = 2;
      if (showParens) {
        punctuationSize = 4;
        output.push("(");
        lineSize += 1;
      }
      if (o.attrs.length > 0 && lineSize + child.length + punctuationSize > maxLineLength) {
        output.push(`\n${" ".repeat(indent)}`);
      }
      if (showParens) {
        output.push(`"${child}"`);
        output.push(")");
      }
      else {
        output.push(`\`${child}\``)
      }
    }
    else if (child.nodeType) {
      output.push(`\n${" ".repeat(indent)}`);
      output.push("/* ");
      output.push(child.nodeValue)
      output.push("*/")
    }
    else {
      output.push("(");
      lineSize += 1;
      if (lineSize + child.size + 2 > maxLineLength) {
        output.push(`\n${" ".repeat(indent)}`);
        out(child, indent)
        if (endParensNewline) {
          output.push(`\n${" ".repeat(indent - 2)}`);
        }
        output.push(")");
      }
      else {
        out(child, indent)
        output.push(")");
      }
    }
  }
}

function camelCase(hyphenText) {
  return hyphenText.split("-")
    .map((text, index) => {
      if (index == 0) {
        return text;
      }
      else {
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
    })
    .join("")
}

function traverse(element) {
  const o = Object.create(null);
  const tagName = (element.tagName || "div").toLowerCase();
  o.tagName = tagName;
  let classes = "";
  o.attrs = [];
  for (const a of element.attributes) {
    if (a.name === "id" && !classAndId) {
      classes = `#${a.value} ${classes}`;
    }
    else if (a.name === "class" && !classAndId) {
      classes += a.value;
    }
    else {
      let name = a.name;
      if (name.indexOf('-') > -1) {
        name = camelCase(name);
      }
      o.attrs.push(`.${name}\`${a.value}\``);
    }
  }
  if (classes.length > 0) {
    o.attrs.unshift(`\`${classes.replace(/\s+/g, ' ')}\``)
  }

  o.children = [];
  o.numRealChildren = 0;
  for (const childNode of element.childNodes) {
    if (childNode.nodeType == Node.COMMENT_NODE) {
      o.children.push(childNode);
    }
    else if (childNode.nodeType == Node.TEXT_NODE) {
      let value = childNode.nodeValue;
      if (/\S/.test(value)) {
        value = value.replace(/\s+/g, ' ');
        o.children.push(value);
        o.numRealChildren++;
      }
    }
    else if (childNode.nodeType == Node.ELEMENT_NODE) {
      o.children.push(traverse(childNode));
      o.numRealChildren++;
    }
  }
  o.hasMultipleChildren = false;

  o.size = o.attrs.join("").length + tagName.length;
  if (o.numRealChildren > 0) {
    // () around the tag name:
    o.size += 2
  }

  if (o.children.length > 1) {
    o.hasMultipleChildren = true;
  }
  else if (o.children.length === 1) {
    let child = o.children[0];
    if (typeof child === "string") {
      o.size += child.length;
      // plus quotes on string
      o.size += 2;
    }
    else if (!child.nodeType) {
      o.hasMultipleChildren = child.hasMultipleChildren;
      o.size += child.size;
    }
  }
  return o;
}

let parser = new DOMParser();

const htmlMinifyOptions = {
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  continueOnParseError: true,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
}

let oldHtml = "";
const updateCodeMirror = function () {
  output = [];
  let needsNewLine = false;
  let html = codeMirror.getValue();
  if (minifyCode) {
    let htmlMinified = htmlMinify(html, htmlMinifyOptions);
    if (htmlMinified !== html) {
      oldHtml = html;
      codeMirror.setValue(htmlMinified);
      return;
    }
    codeMirror.setOption("lineWrapping", true)
  }
  else {
    codeMirror.setOption("lineWrapping", false)
  }
  htmlChars = html.length;
  document.getElementById("htmlChars").viv.childFunctions.htmlCharsText()
  let doc = parser.parseFromString(html, "text/html");
  for (const child of doc.childNodes) {
    if (needsNewLine) {
      output.push("\n");
      needsNewLine = false;
    }
    if (child.nodeType == Node.COMMENT_NODE) {
      output.push("/* ");
      output.push(child.nodeValue)
      output.push("*/")
      needsNewLine = true;
    }
  }
  for (const child of doc.body.childNodes) {
    if (needsNewLine) {
      output.push("\n");
      needsNewLine = false;
    }
    if (child.nodeType == Node.COMMENT_NODE) {
      output.push("/* ");
      output.push(child.nodeValue)
      output.push("*/")
      needsNewLine = true;
    }
    else if (child.nodeType == Node.ELEMENT_NODE) {
      //parse(child, null, 0);
      //output.push("\n")      
      out(traverse(child), 0);
      needsNewLine = true;
    }

  }
  let stringOutput = output.join("");
  if (minifyCode) {
    displayCodeMirror.setOption("lineWrapping", true)
    stringOutput = Terser.minify(stringOutput, {
      output: {
        comments: true
      }
    }).code;
  }
  else {
    displayCodeMirror.setOption("lineWrapping", false)
  }
  javascriptChars = stringOutput.length;
  displayCodeMirror.setValue(stringOutput);
  document.getElementById("javascriptChars").viv.childFunctions.javascriptCharsText();
}

codeMirror.on("changes", updateCodeMirror);

