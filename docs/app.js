const CodeMirror = window.CodeMirror;
import elementBuilders from '../webscript.js';
let { body, div, p, nav, h1, ol, li, pre, code, a } = elementBuilders;

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


const header = h1.exec((builder, children) => {
  let content = contentValue(children);
  let id = content.trim().replace(/\s+/g, "-");
  return builder.id(id).class`text-3xl border-b-2 font-medium py-3 my-4 border-cool-gray-200`(content)
})

const smallHeader = h1.exec((builder, children) => {
  let content = contentValue(children);
  let id = content.trim().replace(/\s+/g, "-");
  return builder.id(id).class`text-2xl border-b-2 font-medium py-3 my-4 border-cool-gray-200`(content)
})


function editorContainer() {
  return div.class`rounded-md bg-cool-gray-100`();
}

function htmlCode(...content) {
  content = contentValue(content);
  let editor = editorContainer()
  let codeEditor = CodeMirror(editor, { mode: { name: "xml", htmlMode: true }, value: content });
  setTimeout(() => codeEditor.refresh())
  return editor
}

function javascriptCode(...content) {
  content = contentValue(content);
  let editor = editorContainer()
  let codeEditor = CodeMirror(editor, { mode: "javascript", addModeClass: true, flattenSpans: false, value: content });
  setTimeout(() => codeEditor.refresh())
  return editor
}

function shellCode(...content) {
  content = contentValue(content);
  let classes = `${editorContainer().className} p-1`;
  return div.class(classes)(pre(code.class`CodeMirror`(content)))
}

function orderedList(...items) {
  return ol.class`list-decimal list-outside ml-12 my-4`(
    items.map(item => li.class`py-1`(item))
  );
}

a = a.class`text-indigo-700 hover:text-indigo-500`;
p = p.class`my-2`;

const content =
  div.class`text-lg leading-relaxed`(
    header`What is Webscript?`,
    p`
      Webscript is an HTML-like Javascript syntax for creating, composing and manipulating DOM elements. 
      Use it to create web pages, web sites and web applications. It is like HTML but it is Javascript.
    `,
    orderedList(
      "Webscript is an ES6 Module and uses ES6 features.",
      "It has zero dependencies.",
      "It is small. It is about 2KB."
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
      `div.class\`card-image\`(
  img.src\`images/sample-1.jpg\`.alt\`Sample Image\`,
  span.class\`card-title\`("Card Title"))`,
    header`Installation`,
    shellCode`npm install webscript`,
    p.class`py-4``Or use a CDN in an ES6 Module:`,
    javascriptCode`import elementBuilders from 'https://cdn.jsdelivr.net/npm/webscript@1.0.0/webscript.min.js'`,
    header`Why? - Short Version`,
    orderedList(
      `Webscript is much more capable than HTML.`,
      `Webscript is a nicer syntax than Hyperscript.`,
      `Webscript is more flexible and capable than HTML templating languages like HTM and lit-html.`,
      `Webscript works really well with Javasacript because Webscript is Javascript.`,
      `No need for a compiler or special tooling.`,
    ),
    p`See the article: ${a.href`https://dev.to/mudgen/why-webscript-4g8k``Why Webscript?`} `,
    header`Server Side`,
    p`Webscript can be used on the server to generate HTML to feed search engines or for other reasons.`,
    header`Usage Example`,
    p`In your index.html file:`,
    htmlCode
      `<body>
<script type="module" src="app.js"></script>
</body>`,
    p`
      Below is your app.js file. It uses ${a.href`https://tailwindcss.com/``Tailwind CSS`} to make a card.
      Note that any CSS library can be used with Webscript.
    `


  )


const contentNav =
  div.class`fixed inset-0 bg-cool-gray-100 z-0`(
    div.class`max-w-7xl mx-auto mt-16 border`(
      div`hello`
    )
  )

const app =
  body(
    contentNav,
    div.id`top`.class`border-b border-gray-300 relative bg-white z-20`(
      div.class`max-w-5xl mx-auto h-16 flex items-center divide-x divide-gray-400`(
        h1.class`font-bold text-2xl``Webscript`,
      )
    ),
    div.class`relative max-w-3xl mx-auto bg-white z-10 border-l border-t mt-3 px-10`(
      content

    )
  );

document.body = app;