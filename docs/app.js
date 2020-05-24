import elementBuilders from '../webscript.js';
const { body, div, p, nav, h1, ol, li, pre, code } = elementBuilders;

function h(content) {
  let hash = content.trim().trim().replace(/\s+/g, "-");
  return h1`#${hash} text-3xl border-b-2 font-medium py-3 mb-4 border-gray-200`(content)
}

function hSmall(content) {
  let hash = content.trim().trim().replace(/\s+/g, "-");
  return h1`#${hash} text-2xl border-b-2 font-medium py-3 mb-4 border-gray-200`(content)
}

const content =
  div`text-lg leading-relaxed`(
    h("What is Webscript?"),
    p(`
      Webscript is an HTML-like Javascript syntax for creating, composing and manipulating DOM elements. 
      Use it to create web pages, web sites and web applications. It is like HTML but it is Javascript.
    `),
    ol`list-decimal list-inside ml-5 my-3`(
      li("Webscript is an ES6 Module and uses ES6 features."),
      li("It has zero dependencies."),
      li("It is small. It is 3.37KB.")
    ),
    hSmall("Example"),
    p("HTML:"),
    pre(code`language-html`(
      `<div class="card-image">
  <img src="images/sample-1.jpg" alt="Sample Image" />
  <span class="card-title">Card Title</span>
</div>`)
    ),
    p`pt-2`("Webscript:"),
    pre(code`language-javascript`(
      `div\`card-image\`(
  img.src\`images/sample-1.jpg\`.alt\`Sample Image\`,
  span\`card-title\`("Card Title"))`
    )),
    h("Installation"),
    pre(code`language-shell`("npm install webscript")),
    p`p-4`("Or use a CDN in an ES6 Module:"),
    pre(code`language-javascript`("import elementBuilders from 'https://cdn.jsdelivr.net/npm/webscript@1.0.0/webscript.min.js'")),
    h("Priority for Class and Id Properties"),
    p(`
      Not all element properties are equal and Webscript recognizes that. 
      Class and Id properties are used more often than other properties in web applications. 
      Template literal values directly after element names are assigned to class and id properties. 
      The following two code snippets are equivelent:
    `),
    pre(code`language-javascript`('h1`#myid class1 class2`("Hello World!")')),
    pre(code`language-javascript`('h1.id`myid`.class`class1 class2`("Hello World!")')),

  )


const contentNav =
  div`fixed inset-0 bg-gray-100 z-0`(
    div`max-w-7xl mx-auto mt-16 border`(
      div("hello")
    )
  )

const app =
  body`bg-white`(
    contentNav,
    div`#top border-b border-gray-300 relative bg-white z-20`(
      div`max-w-5xl mx-auto h-16 flex items-center divide-x divide-gray-400`(
        h1`font-bold text-2xl`("Webscript"),
      )
    ),
    div`relative max-w-3xl mx-auto bg-white z-10 border-l px-10`(
      content

    )
  );

document.body = app;