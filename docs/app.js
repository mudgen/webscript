import elementBuilders from '../webscript.js';
const { body, div, p, nav, h1, ol, li, pre, code } = elementBuilders;

function contentValue(values) {
  const [first] = values;
  if (Array.isArray(first) && Object.isFrozen(first)) {
    const [strings, ...templateArgs] = values;
    values = [];
    for (const [index, s] of strings.entries()) {
      values.push(s);
      values.push(templateArgs[index])
    }
  }
  return values.join("");
}

function header(...content) {
  content = contentValue(content);
  let id = content.trim().replace(/\s+/g, "-");
  return h1.id(id).class`text-3xl border-b-2 font-medium py-3 mb-4 border-gray-200`(content)
}

function smallHeader(...content) {
  content = contentValue(content);
  let id = content.trim().replace(/\s+/g, "-");
  return h1.id(id).class`text-2xl border-b-2 font-medium py-3 mb-4 border-gray-200`(content)
}

function htmlCode(...content) {
  content = contentValue(content);
  return pre(code.class`language-html`(content))
}

function javascriptCode(...content) {
  content = contentValue(content);
  return pre(code.class`language-javascript`(content))
}

function shellCode(...content) {
  content = contentValue(content);
  return pre(code(content))
}

const content =
  div.class`text-lg leading-relaxed`(
    header`What is Webscript?`,
    p`
      Webscript is an HTML-like Javascript syntax for creating, composing and manipulating DOM elements. 
      Use it to create web pages, web sites and web applications. It is like HTML but it is Javascript.
    `,
    ol.class`list-decimal list-inside ml-5 my-3`(
      li`Webscript is an ES6 Module and uses ES6 features.`,
      li`It has zero dependencies.`,
      li`It is small. It is 3.37KB.`
    ),
    smallHeader`Example`,
    p`HTML`,
    htmlCode
      `<div class="card-image">
  <img src="images/sample-1.jpg" alt="Sample Image" />
  <span class="card-title">Card Title</span>
</div>`,
    p.class`pt-2``Webscript:`,
    javascriptCode
      `div\`card-image\`(
  img.src\`images/sample-1.jpg\`.alt\`Sample Image\`,
  span\`card-title\`("Card Title"))`,
    header`Installation`,
    shellCode`npm install webscript`,
    p.class`p-4``Or use a CDN in an ES6 Module:`,
    javascriptCode`import elementBuilders from 'https://cdn.jsdelivr.net/npm/webscript@1.0.0/webscript.min.js'`,

    //pre(code`language-javascript`('h1.id`myid`.class`class1 class2`("Hello World!")')),

  )


const contentNav =
  div.class`fixed inset-0 bg-gray-100 z-0`(
    div.class`max-w-7xl mx-auto mt-16 border`(
      div`hello`
    )
  )

const app =
  body.class`bg-white`(
    contentNav,
    div.id`top`.class`border-b border-gray-300 relative bg-white z-20`(
      div.class`max-w-5xl mx-auto h-16 flex items-center divide-x divide-gray-400`(
        h1.class`font-bold text-2xl``Webscript`,
      )
    ),
    div.class`relative max-w-3xl mx-auto bg-white z-10 border-l px-10`(
      content

    )
  );

document.body = app;