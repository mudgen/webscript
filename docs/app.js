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
      A Webscript function, such as ${code`img`} or ${code`div`}, is called an element builder or builder for short.
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
      `Works with existing Javascript user-interface libraries.`
    ),
    p`Webscript gives a great developer experience for quickly developing Javascript-based web applications.`,
    p`See the article: ${a.href`https://dev.to/mudgen/why-webscript-4g8k`.target`_blank``Why Webscript?`} `,
    h1`Webscript Element Builders`,
    h1`Usage Example`,
    p`In your index.html file:`,
    htmlCode
      `<body>
  <script type="module" src="app.js"></script>
</body>`,
    p`
      Below is your app.js file. It uses ${a.href`https://tailwindcss.com/`.target`_blank``Tailwind CSS`} to make a card.
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
    p`A couple things to notice. There is no HTML templating here. body, div, img, p, span are Javascript functions. 
    The classes variable is a regular Javascript variable. It reduces some duplication by being assigned a string of 
    class names that are reused by spans. Regular Javascript assignment and string interpolation is used with the 
    spans in the above code.`,
    p`This is a simple example. Any kind of Javascript composition or manipulation can be done because we have the full Javascript language at our disposal. 
    The above is Javascript strings, variables and functions.`,
    p`Here is the result of the above code:`,
    img.src`example.png`.alt`Result of example code`,
    h1`Use it in React, Vue and other libraries and frameworks!`,
    p`Webscript was designed to be used in existing libraries and frameworks. It can also be used by itself without a library.`,
    p`
      Webscript interoperates with libraries and frameworks by taking a function from them that is used to create the elements. 
      Webscript's ${code`elementBuilders`} function is called with the function from the library/framework. Let's call this function from 
      the library or framework createElement because it is often called that.
    `,
    p`
      The createElement function must have the following parameters: components, properties, ...children. 
      These are exactly the parameters used by React's React.createElement function. 
      Vue also provides a createElement function with these parameters.
    `,
    p`
      Webscript should work with any library or framework that provides a createElement function that has the above parameters.
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
    div.class\`App\`(
      header.class\`App-header\`(
        img.class\`App-logo\`.src(logo).alt\`logo\`,
        p("Edit ", code("src/App.js"), " and save to reload."),
        a.class\`App-link\`
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
    elementBuilders in order to convert them into functions. In the example below the StrictMode component is converted to a function and used. 
    The App React Hook we created in our last example is used directly without any conversion.
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
    p`Webscript comes with a simple createElement function that creates DOM elements.`,
    javascriptCode
      `import elementBuilders from 'webscript'

const { div, p } = elementBuilders;

const myDiv = div(p("hello world"))`,
    p`In the above example myDiv is assigned a regular DOM div element with a regular DOM p element inside it.`,

  )

const contentNav =
  div.class`fixed inset-0 bg-cool-gray-100 z-0`(
    div.class`max-w-7xl mx-auto mt-16 border`(
      div`hello`
    )
  )

let app =
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