const CodeMirror = window.CodeMirror;
import elementBuilders from '../webscript.js';
import { createElement } from '../createelement.js'
let { body, div, p, img, nav, h1, h2, h3, ol, li, pre, code, a, span } = elementBuilders(createElement);

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


h1 = h1.exec((builder, children) => {
  let content = contentValue(children);
  let id = content.trim().replace(/\s+/g, "-");
  return builder.id(id).class`text-3xl border-b-2 font-medium py-3 my-4 border-cool-gray-200 leading-snug`(content)
})

h2 = h2.exec((builder, children) => {
  let content = contentValue(children);
  let id = content.trim().replace(/\s+/g, "-");
  return builder.id(id).class`text-2xl border-b-2 font-medium py-3 my-4 border-cool-gray-200`(content)
})

h3 = h3.class`text-xl font-medium mt-10`;

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
p = p.class`my-5`;
code = code.class`text-lg bg-cool-gray-200 px-1 rounded`;

const content =
  div.class`text-lg leading-relaxed pb-2 mb-6`(
    h1`What is Webscript?`,
    p`
      Webscript is an HTML-like Javascript syntax for creating, composing and manipulating DOM elements. 
      Use it to create web applications. It is like HTML but it is Javascript.
    `,
    orderedList(
      "Webscript is an ES6 Module and uses ES6 features.",
      "It has zero dependencies.",
      "It is small. It is about 2KB."
    ),
    h1`Introduction`,
    p`Let's compare HTML to Webscript. Here is some HTML:`,
    htmlCode
      `<div class="card-image">
  <img src="images/sample-1.jpg" alt="Sample Image" />
  <span class="card-title">Card Title</span>
</div>`,
    p.addClass`mt-6``Here is the Webscript version:`,
    javascriptCode
      `div.class\`card-image\`(
  img.src\`images/sample-1.jpg\`.alt\`Sample Image\`,
  span.class\`card-title\`("Card Title"))`,
    p`
      Webscript is not an HTML templating language. Webscript uses Javascript, not a templating language.
      Therefore Webscript gives you the full power of Javascript and not the limitations of a template language.
    `,
    p`    
      In the above example ${code`div`}, ${code`img`} and ${code`span`} are Javascript objects. And ${code`class`},
      ${code`src`} and ${code`alt`} are Javascript methods.
    `,
    h2`Tagged Template Literals`,
    p`
      Webscript uses tagged template literals which is the syntax above with the backticks. For example ${code`src\`images/sample-1.jpg\``} is      
      a tagged template literal.
    `,
    p`
     Tagged template literals are a nice way to call a Javascript function or method with string arguments. Tagged template literals are a standard feature of Javascript.
     `,
    p`Webscript uses tagged template literals for its consise, clear syntax for calling functions with strings. However Webscript functions can also be called without 
    tagged template literals.`,
    p`This works:`,
    javascriptCode`img.src\`images/sample-1.jpg\`.alt\`Sample Image\``,
    p`And this works too:`,
    javascriptCode`img.src("images/sample-1.jpg").alt("Sample Image")`,
    h2`Builder Pattern`,
    p`The builder pattern is a way to build up an object step by step. Webscript uses the builder pattern to build the properties of an element and then create it.`,
    p`
      A Webscript object, such as ${code`img`} or ${code`div`}, is called an element builder or builder for short.
      Here is an example that shows how an element is built and created using an ${code`a`} builder.
    `,
    javascriptCode`a.href\`https://github.com/mudgen/webscript\`.target\`_blank\`("Webscript")`,
    orderedList(
      span`The ${code`href`} method is called which creates and returns a new ${code`a`} builder with the "href" property set to the value of the URL.`,
      span`
        The ${code`target`} method is called which creates and returns a new ${code`a`} builder with the "target" property set to '_blank'.
        Properties 'href' and 'target' now have values within the ${code`a`} builder.
        `,
      span`The parentheses at the end of the builder cause it to execute as a function. The argument to the builder, ${code`"Webscript"`}, becomes the child of the element.`,
      span`The builder function execution returns the created, finished 'a' element.`,
    ),
    p("Here is the resulting link created by the ", code`a`, " builder: ", a.href`https://github.com/mudgen/webscript`.target`_blank`("Webscript")),

    h1`Installation`,
    shellCode`npm install webscript`,
    p.class`py-4``Or use a CDN in an ES6 Module:`,
    javascriptCode`import elementBuilders from 'https://cdn.jsdelivr.net/npm/webscript@1.0.0/webscript.min.js'`,
    h1`Why Webscript?`,
    orderedList(
      `Webscript is much more capable than HTML.`,
      `Webscript is a nicer syntax than Hyperscript.`,
      `Webscript is more flexible and capable than HTML templating languages.`,
      `Webscript works really well with Javasacript because Webscript is Javascript.`,
      `No need for a compiler or special tooling.`,
      `No extra build step.`,
      `Works with existing Javascript user-interface libraries.`
    ),
    p`Webscript gives a great developer experience for quickly developing Javascript-based web applications.`,
    p`See the article: ${a.href`https://dev.to/mudgen/why-webscript-4g8k`.target`_blank``Why Webscript?`} `,
    h1`Webscript Element Builders`,
    p`
      Webscript element builders like ${code`div`}, ${code`img`} and ${code`span`} are Javascript objects with methods
      that are called to build up the properties of an element. The actual element is created by calling the builder as
      a function. In the example ${code`img.src\`file.png\`()`} the ${code`src`} method call sets the 'src' property.
      And ${code`()`} causes the img builder to be executed as a function which creates the img element.
      `,
    p`
      Note that it is
      actually not necessary to execute builders, using ${code`()`}, that have no children because the containing ${code`div`}
      or builder will execute it for you. So in the case of ${code`img`} it could just be written just like this: ${code`img.src\`file.png\``}
    `,
    p`Element builders are created like this:`,
    javascriptCode
      `import elementBuilders from './webscript.js'  

const { body, div, p, span, img } = elementBuilders(createElement);`,
    p`${code`createElement`} is the actual function that creates the elements. A builder executes  ${code`createElement`} internally when the builder is called as a function.`,
    p`The ${code`createElement`} function is written by you or it is supplied by a library or framework.`,
    p`
     So a builder builds up the properties of an element or component and then converts it into an element by calling the ${code`createElement`} function that
     was passed into Webscript's ${code`elementBuilders`} function.`,
    p`Generally the ${code`createElement`} function has this function signature: ${code`createElement(type, props, ...children)`}.`,
    p`
     The types of these parameters depend on the implementation of ${code`createElement`} that is used. Webscript builders will pass an object of properties and values as the
     'props' argument. Often the 'type' argument is a string specifiying the element like 'div' or 'p' etc. But the 'type' argument could have a particular type unique to 
     a particular library.
    `,
    p`
      The Webscript project provides an implementation of ${code`createElement`} that creates vanilla browser DOM elements. And it provides a ${code`createSVGElement`} function for creating
      SVG elements in the browser. These can be found in the ${code`createelement.js`} Javascript module. 
    `,

    h1`Usage Example`,
    p`In your ${code`index.html`} file: `,
    htmlCode
      `<body>
  <script type="module" src="app.js"></script>
</body>`,
    p`
Below is your ${code`app.js`} file. It uses ${a.href`https://tailwindcss.com/`.target`_blank``Tailwind CSS`} to make a card.
Note that other CSS libraries can be used with Webscript.
    `,
    javascriptCode
      `import elementBuilders from './webscript.js'
import { createElement } from './createelement.js'

const { body, div, p, span, img } = elementBuilders(createElement);

const tag = span.class\`inline-block bg-gray-200 rounded-full px-3 py-1 mr-2\`;

const app =
  body.class\`flex items-center justify-center h-screen\`(
    div.class\`max-w-sm rounded overflow-hidden shadow-lg\`(
      img.class\`w-full\`.src\`img/card-top.jpg\`.alt\`Sunset in the mountains\`,
      div.class\`px-6 py-4\`(
        div.class\`font-bold text-xl mb-2\`("The Coldest Sunset"),
        p.class\`text-gray-700 text-base\`(
          " Lorem ipsum dolor sit amet, consectetur adipisicing ...")),
      div.class\`px-6 py-4 text-sm font-semibold text-gray-700\`(
        tag\`#photography\`,
        tag\`#travel\`,
        tag\`#winter\`)));
  
document.body = app;`,
    p`Something to note: There is no HTML templating here. ${code`body`}, ${code`div`}, ${code`img`}, ${code`p`}, ${code`span`}
    are Javascript objects with methods that are called with Javascript's tagged template literal syntax.`,
    p`
    ${code`tag`} is an object, or element builder, that has been created with the 'class' property preset with some classes. This 
    creates one place where the display of tags can be modified. This is a good example of code reuse with Webscript.
    `,

    p`This is a simple example. Any kind of Javascript composition or manipulation can be done because we have the full Javascript language at our disposal. 
    The above is Javascript objects, strings, variables and functions.`,
    p`Here is the result of the above code:`,
    img.src`example.png`.alt`Result of example code`,
    h1`Convert HTML to Webscript`,
    p`HTML can be converted to Webscript using the 
      ${a.href`https://mudgen.github.io/webscript/html2webscript/`.target`_blank``html2webscript`}  web application.`,
    p`It is also useful to see how Webscript compares to HTML. In the application click on the "Insert Random Example" button to see examples of Webscript.`,

    h1`Use it in React, Vue and other libraries and frameworks!`,
    p`Webscript was designed to be used in existing libraries and frameworks.`,
    p`
      Webscript interoperates with libraries and frameworks by taking a function from them usually called ${code`createElement`} that is used to create the elements. 
      Webscript's ${code`elementBuilders`} function is called with the ${code`createElement`} function from the library/framework.
    `,
    p`
      The ${code`createElement`} function generally has the following parameters: ${code`components, properties, ...children`}. 
      These are exactly the parameters used by React's ${code`React.createElement`} function. 
      Vue also provides a ${code`createElement`} function.
    `,
    p`
      Webscript should work with any library or framework that provides a ${code`createElement`} function that has the above parameters.
      Webscript can also be adapted to fit similar ${code`createElement`} functions that don't fit the API exactly.
    `,
    p`
      Here is an example of using Webscript in React.
    `,
    h1`React Example`,
    javascriptCode
      `import React from 'react';
import logo from './logo.svg';
import './App.css';
import elementBuilders from 'webscript'

const { div, header, p, a, img, code } = elementBuilders(React.createElement);

function App() {
  return (
    div.className\`App\`(
      header.className\`App-header\`(
        img.className\`App-logo\`.src(logo).alt\`logo\`,
        p("Edit ", code("src/App.js"), " and save to reload."),
        a.className\`App-link\`
         .href\`https://reactjs.org\`
         .target\`_blank\`
         .rel\`noopener noreferrer\`(
           "Learn React"
         ))))
}`,
    p`
    A nice thing about React Hooks is that they are functions and so can be used directly within Webscript.
  `,
    p`
    However class-based React elements are not functions. They can still be used in Webscript by passing them in an array to 
    ${code`elementBuilders`} in order to convert them into functions. In the example below the ${code`StrictMode`} component is converted to a function and used. 
    The ${code`App`} React Hook we created in our last example is used directly without any conversion.
  `,
    javascriptCode
      `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import elementBuilders from 'webscript';

const [StrictMode] = elementBuilders(React.createElement, [React.StrictMode]);

ReactDOM.render(
  StrictMode(
    App()
  ),
  document.getElementById('root')
);`,
    h1`Without a Library`,
    p`
    The Webscript project provides a simple ${code`createElement`} function that creates vanilla DOM elements. It also provides 
    a ${code`createSVGElement`} function that create SVG elements.
    `,
    javascriptCode
      `import elementBuilders from './webscript.js'
import { createElement, createSVGElement } from './createelement.js'
const { body, div, p } = elementBuilders(createElement);
const { svg } = elementBuilders(createSVGElement);

const myApp = div(p("hello world"))
document.body = body(myApp);`,
    p`The above example creates a simple webpage that says, "hello world".`,
  )

const contentNav =
  div.class`fixed inset-0 bg-cool-gray-100 z-0`(
    div.class`max-w-7xl mx-auto mt-16`(
      div``
    )
  )

let app =
  body(
    contentNav,
    div.id`top`.class`borcder-b bordcer-gray-300 relative bg-white z-20`(
      div.class`max-w-5xl mx-auto h-16 flex items-center divicde-x divide-grcay-400`(
        h1.class`font-bold text-2xl``Webscript`,
      )
    ),
    div.class`relative max-w-3xl mx-auto bg-white z-10 shadow mt-3 px-10 rounded`(
      content

    )
  );


document.body = app;