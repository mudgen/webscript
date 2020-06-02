const CodeMirror = window.CodeMirror;
import builders, { enhanceBuilder } from '../dist/webscript.esm.js';
//import builders, { enhanceBuilder } from '../src/webscript.js';
import createElement from '../dist/createDOMElement.esm.js';
import createSVGElement from '../dist/createSVGElement.esm.js';
let { body, div, p, img, nav, h1, h2, h3, ol, li, pre, code, a, span, button, i } = builders(createElement);
let { svg, path, title } = builders(createSVGElement);

let v = i.id`testhere`;
let b = i.alt`what?`;
//console.log(v.id === b.id)

h2 = enhanceBuilder(h2, (builder, children) => {
  let content = contentValue(children);
  let hash = content.trim().replace(/\s+/g, "-").toLowerCase();
  navItems.push([hash, content])
  return builder.class`h-hover relative text-2xl lg:text-3xl border-b-2 font-medium py-2 lg:py-3 my-3 lg:my-4 border-cool-gray-200 leading-snug`(
    a.class`absolute left-0 top-0 -mt-12 lg:mt-0`.name(hash),
    a.class`text-cool-gray-400 -ml-4 lg:-ml-5`.href("#" + hash)`#`,
    content
  )
})

h3 = enhanceBuilder(h3, (builder, children) => {
  let content = contentValue(children);
  let hash = content.trim().replace(/\s+/g, "-").toLowerCase();
  return builder.class`h-hover relative text-xl lg:text-2xl border-b-2 font-medium py-2 lg:py-3 my-3 lg:my-4 border-cool-gray-200`(
    a.class`absolute left-0 top-0 -mt-12 lg:mt-0`.name(hash),
    a.class`text-cool-gray-400 -ml-4 lg:-ml-4 `.href("#" + hash)`#`,
    content
  )
})

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

let navItems = [];

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
  return ol.class`list-decimal list-outside ml-7 sm:ml-12 my-4`(
    items.map(item => li.class`py-1`(item))
  );
}

a = a.class`text-indigo-700 hover:text-indigo-500`;
p = p.class`my-5`;
code = code.class`lg:text-lg bg-cool-gray-200 px-1 rounded`;

const content =
  div.class`-mt-3 pt-1 lg:pt-0`(
    h2`What is Webscript?`,
    p`
      Webscript is an HTML-like Javascript syntax for creating, composing and manipulating DOM elements. 
      Use it to create web applications. It is like HTML but it is Javascript.
    `,
    p`
    Webscript is a small Javascript library with zero dependencies.
    `,
    p.class`mt-6``Webscript:`,
    orderedList(
      "Replaces JSX in React and other libraries.",
      "Replaces HTML templating languages.",
      "Replaces HTML in Javascript applications.",
      "Replaces HTML in your Javascript library."
    ),
    p`Why Webscript?`,
    orderedList(
      `Webscript is much more capable than HTML.`,
      `Webscript is a nicer syntax than Hyperscript.`,
      `Webscript is more flexible and capable than HTML templating languages.`,
      `Webscript works really well with Javasacript because Webscript is Javascript.`,
      `No need for a compiler, babel or special tooling.`,
      `No build step.`,
      `Works with existing Javascript user-interface libraries.`
    ),
    p`Webscript gives a great developer experience for quickly developing Javascript-based web applications.`,
    p`See the article: ${a.href`https://dev.to/mudgen/why-webscript-4g8k`.target`_blank``Why Webscript?`} `,
    h2`Introduction`,
    p`Let's compare HTML to Webscript. Here is some HTML:`,
    htmlCode
      `<div class="card-image">
  <img src="images/sample-1.jpg" alt="Sample Image">
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
    h3`Tagged Template Literals`,
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
    h3`Builder Pattern`,
    p`The builder pattern is a way to build an object step by step. Webscript uses the builder pattern to build the properties of an element or component and then create it.`,
    p`
      A Webscript object, such as ${code`img`} or ${code`div`}, is called a builder.
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

    h2`Installation`,
    shellCode`npm install webscript`,
    p.class`py-4``Or use a CDN:`,
    javascriptCode`import builders from 'https://cdn.jsdelivr.net/npm/webscript@0.0.11/dist/webscript.esm.js'`,
    p`Webscript is available in the following Javascript formats: ES6, ES5, CommonJS and UMD.`,
    // p`Webscript uses 
    //   ${a.href`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy`.target`_blank``Javascript proxies`},
    //   so Internet Explorer 11 is not supported.`,
    //h2`Why Webscript?`,    
    h2`Webscript Builders`,
    p`
      Webscript builders like ${code`div`}, ${code`img`} and ${code`span`} are Javascript objects with methods
      that are called to build up the properties of an element. The actual DOM element is created by calling the builder as
      a function. In the example ${code`img.src\`file.png\`()`} the ${code`src`} method call sets the 'src' property.
      And ${code`()`} causes the img builder to be executed as a function which creates and returns the img DOM element.
      `,
    p`
      Note that it is
      actually not necessary to execute builders, using ${code`()`}, that have no children because the containing ${code`div`}
      or builder will execute it for you. So in the case of ${code`img`} it could just be written like this: ${code`img.src\`file.png\``}
    `,
    p`Builders are created like this:`,
    javascriptCode
      `import builders from 'webscript'
import createElement from 'webscript/dist/createDOMElement.js'  

const { body, div, p, span, img } = builders(createElement);`,
    p`${code`createElement`} is the actual function that creates the elements. A builder executes  ${code`createElement`} internally when the builder is called as a function.`,
    p`The ${code`createElement`} function is written by you or it is supplied by a library or framework.`,
    p`
     So a builder builds up the properties of an element or component and then converts it into an element by calling the ${code`createElement`} function that
     was passed into Webscript's ${code`builders`} function.`,
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

    h2`Usage Example`,
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
      `import builders from 'webscript'
import { createElement } from 'webscript/dist/createDOMElement.js'

const { body, div, p, span, img } = builders(createElement);

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
    ${code`tag`} is an object, or builder, that has been created with the 'class' property preset with some classes. This 
    creates one place where the display of tags can be modified. This is a good example of code reuse with Webscript.
    `,

    p`This is a simple example. Any kind of Javascript composition or manipulation can be done because we have the full Javascript language at our disposal. 
    The above is Javascript objects, strings, variables and functions.`,
    p`Here is the result of the above code:`,
    img.src`example.png`.alt`Result of example code`,
    h2`Convert HTML to Webscript`,
    p`HTML can be converted to Webscript using the 
      ${a.href`https://mudgen.github.io/webscript/html2webscript/`.target`_blank``html2webscript`}  web application.`,
    p`It is also useful to see how Webscript compares to HTML. In the application click on the "Insert Random Example" button to see examples of Webscript.`,

    h2`Use it in React, Vue and other Libraries!`,
    p`Webscript was designed to be used in existing libraries and frameworks.`,
    p`
      Webscript interoperates with libraries and frameworks by taking a function from them usually called ${code`createElement`} that is used to create the elements. 
      Webscript's ${code`builders`} function is called with the ${code`createElement`} function from the library/framework.
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
    h3`React Example`,
    javascriptCode
      `import React from 'react';
import logo from './logo.svg';
import './App.css';
import builders from 'webscript'

const { div, header, p, a, img, code } = builders(React.createElement);

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
    React function components are functions so they can be used directly within Webscript.
  `,
    p`
    However class-based React components are not functions. They can still be used in Webscript by passing them in an array to 
    ${code`builders`} in order to convert them into functions. In the example below the ${code`StrictMode`} component is converted to a function and used. 
    The ${code`App`} function component we created in our last example is used directly without any conversion.
  `,
    javascriptCode
      `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import builders from 'webscript';

const [StrictMode] = builders(React.createElement, [React.StrictMode]);

ReactDOM.render(
  StrictMode(
    App()
  ),
  document.getElementById('root')
);`,
    h2`Without a Library`,
    p`
    The Webscript project provides three simple ${code`createElement`} functions:`,
    orderedList(
      span`${code`createDOMElement`} creates vanilla DOM elements.`,
      span`${code`createSVGElement`} creates vanilla SVG elements.`,
      span`${code`createObjectElement`} creates vanilla Javascript objects.`,
    ),
    javascriptCode
      `import builders from 'webscript'
import { createDOMElement } from 'webscript/dist/createDOMElement.js'
import { createSVGElement } from 'webscript/dist/createSVGElement.js'
import { createObjectElement } from 'webscript/dist/createObjectElement.js'

const { body, div, p } = builders(createDOMElement);
const { svg } = builders(createSVGElement);
const { objects } = builders(createObjectElement);

const myApp = div(p("hello world"))
document.body = body(myApp);`,
    p`The above example creates a simple webpage that says, "hello world".`,
    //h2`Special Properties`,



  )

function turnOffMenu() {
  content.classList.remove("hidden")
  let menuButton = document.getElementById("menu-button");
  menuButton.firstElementChild.classList.remove("hidden")
  menuButton.firstElementChild.nextSibling.classList.add("hidden")
  let value = [...document.getElementById("nav").classList];
  console.log(value)
  document.getElementById("nav").classList.add("hidden");
  value = [...document.getElementById("nav").classList];
  console.log(value)
}

function turnOnMenu() {
  content.classList.add("hidden")
  let menuButton = document.getElementById("menu-button");
  menuButton.firstElementChild.classList.add("hidden")
  menuButton.firstElementChild.nextSibling.classList.remove("hidden")
  document.getElementById("nav").classList.remove("hidden");


}

function toggleMenu() {
  let menuButton = document.getElementById("menu-button");
  if (menuButton.firstElementChild.nextSibling.classList.contains("hidden")) {
    turnOnMenu();
  }
  else {
    turnOffMenu();
  }
}

const contentNav =
  div.class``(
    div.class`lg:hidden fixed top-0 z-20 bg-cool-gray-200 w-full max-w-2xl flex items-center justify-between`(
      h1.class`pl-3 sm:pl-10 text-3xl font-medium pb-1`(
        a.class`text-cool-gray-800`.href`#`.onclick(turnOffMenu)`Webscript`
      ),
      button.id`menu-button`.class`inline-flex items-center justify-center p-2 mr-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`
        .onclick(toggleMenu)(
          /*  Menu open: "hidden", Menu closed: "block" */
          svg.class`block h-6 w-6`.stroke`currentColor`.fill`none`.viewBox`0 0 24 24`(
            path.stroke·linecap`round`.stroke·linejoin`round`.stroke·width`2`.d`M4 6h16M4 12h16M4 18h16`),
          /*  Menu open: "block", Menu closed: "hidden" */
          svg.class`hidden h-6 w-6`.stroke`currentColor`.fill`none`.viewBox`0 0 24 24`(
            path.stroke·linecap`round`.stroke·linejoin`round`.stroke·width`2`.d`M6 18L18 6M6 6l12 12`)
        )

    ),
    div.id`nav`.class`hidden lg:block fixed z-10 inset-y-0 mt-12 lg:mt-8 overflow-y-auto bg-cool-gray-100 lg:bg-transparent w-full lg:w-auto`(

      h1.class`hidden lg:block mr-4 pl-3 mb-3 text-3xl border-b-2 font-medium pb-1 border-cool-gray-300`(
        a.class`text-cool-gray-800`.href`#``Webscript`
      ),
      nav.class`w-64 pr-3`(

        navItems.map((item) => {
          return a.class`mt-1 group flex items-center px-3 py-3 leading-6 font-medium text-cool-gray-600 rounded-md hover:text-cool-gray-800 hover:bg-cool-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150`
            .href("#" + item[0])
            .onclick(turnOffMenu)
            (item[1])
        })
      ),
      h1.class`pl-3 mt-3 lg:mt-6 text-2xl font-medium text-cool-gray-800``Project`,
      div.class`mt-4 flex items-center pl-3`(
        a.class`text-cool-gray-500 hover:text-cool-gray-800`.alt`Github`.href`https://github.com/mudgen/webscript`.target`_blank`(
          svg.class`w-10 h-10 fill-current`.role`img`.viewBox`0 0 24 24`(
            title`GitHub`,
            path.d`M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`
          )
        ),
        a.class`ml-4 text-cool-gray-500 hover:text-cool-gray-800`.alt`Github`.href`https://twitter.com/mudgen`.target`_blank`(
          svg.class`w-10 h-10 fill-current`.role`img`.viewBox`0 0 24 24`(
            title`Twitter`,
            path.d`M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z`
          )
        )
      ),
      div.class`mt-6 pl-3`(
        /*  Place this tag where you want the button to render. */
        a.class`github-button`
          .href`https://github.com/mudgen/webscript`
          .data·size`large`
          .data·show·count`true`
          .aria·label`Star Webscript on GitHub``Star`,
        div.class`mt-2`(
          a.class`github-button`.href`https://github.com/sponsors/mudgen`
            .data·size`large`
            .data·icon`octicon-heart`
            .aria·label`Sponsor @mudgen on GitHub``Sponsor`
        ),
        div.class`mt-2`(
          a.class`twitter-follow-button`.href`https://twitter.com/mudgen?ref_src=twsrc%5Etfw`
            .data·size`large`
            .data·show·count`false`
            .data·show·screen·name`false`
            `Follow @mudgen`
        )
      ),
      div.class`pl-3 mt-6 lg:mt-8 pb-4 text-base font-medium text-cool-gray-800``Powered by Webscript`,
    )
  )

let app =
  body.class`bg-cool-gray-100 max-w-2xl lg:max-w-5xl mx-auto lg:flex`(
    div.class`lg:flex-1`(
      contentNav,
    ),
    div.class`bg-white lg:shadow px-4 sm:px-10 lg:rounded lg:max-w-3xl max-w-2xl lg:text-lg leading-relaxed mt-12 lg:mt-3 pb-2`(
      content
    )
  );


document.body = app;