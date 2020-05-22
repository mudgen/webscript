# Table of Contents
 * [What is it?](#what-is-it)
 * [Installation](#installation)
 * [Why? - Short Version](#why---short-version)
 * [Why? - Long Version](#why---long-version)
 * [Server Side](#server-side)
 * [Usage Example](#usage-example)
 * [Use it in React, Vue and other libraries and frameworks!](#use-it-in-react-vue-and-other-libraries-and-frameworks)
    * [React Example](#react-example)
    * [By Itself](#by-itself)


# What is it?
Webscript is an HTML-like Javascript syntax for defining, creating, composing and manipulating DOM elements. It is for creating web pages, web sites, web applications. It is like HTML but it is Javascript.

1. Webscript is an ES6 Module and uses ES6 features.
2. It has zero dependencies.
3. It is small. It's size is 3.22KB

## Example

HTML:
```html
<div class="card-image">
  <img src="images/sample-1.jpg" alt="Sample Image" />
  <span class="card-title">Card Title</span>
</div>
```

Webscript:
```javascript
div`card-image`(
  img.src`images/sample-1.jpg`.alt`Sample Image`,
  span`card-title`("Card Title"))
```

[See more examples.](https://mudgen.github.io/webscript/html2webscript/#bulma-card)

# Installation

```bash
npm install webscript
```

Or use a CDN in an ES6 module:

```javascript
import elementBuilders from 'https://cdn.jsdelivr.net/npm/webscript@1.0.0/webscript.min.js';
```
# Priority for Class and Id Properties

Not all element properties are equal and Webscript recognizes that. Class and Id properties are used more often than other properties in web applications. Template literal values directly after element names are assigned to class and id properties. The following two code snippets are equivelent:

```javascript
h1`#myid class1 class2`("Hello World!")
```
```javascript
h1.id`myid`.class`class1 class2`("Hello World!")
```
If the first value in the template literal starts with a hash then it is assigned to the `id` property. Any other values are assigned to the `class` property.

It is also possible to use periods between values if you prefer that:
```javascript
h1`#myid.class1.class2`("Hello World!")
````


# Why? - Short Version
1. Webscript is much more capable than HTML.
2. Webscript is a nicer syntax than Hyperscript.  
3. Webscript is simpler, more flexible and more capable than HTML templating languages like HTM and lit-html.
4. Webscript works really well with Javasacript because Webscript is Javascript.
5. No need for a compiler or special tooling.

# Why? - Longer Version

You might not believe it or think it at first but HTML and Javascript don't go together well. They started out together and have been together so long that it might seem normal they are used together. Take a step back and think about the solutions that exist to make them work together.

[JSX](https://reactjs.org/docs/jsx-in-depth.html) is a compiler on top of Javascript that puts HTML in Javascript. The many templating languages such as used by [Vue](https://vuejs.org/v2/guide/syntax.html) and other frameworks try to put Javascript or custom programming languages into HTML.

If Javascript and HTML went together, they would just be used together. But they are not just used together. They are forced together this way and that way. They are oil and water. They don't go together.

If you think about it, it makes sense that they don't go together. They are completely different languages with different purposes. HTML is a markup language with a very specific purpose: create static documents that link to each other. Javascript is a general purpose programming language for creating software. If Javascript and HTML met at a bar, they wouldn't talk to each other because they have too little in common. Except they happen to be married to the same woman, the browser, so they deal with each other. It is time to stop messing around and decide on *one* of them and the choice is obvious.

It is a common mistake to think that web pages are HTML. They are not. Web pages are the browser DOM, not HTML. It is possible to create web applications without any HTML by building the DOM up with Javascript. The reason this hasn't happened much is because the native way to do this in Javascript, using the function `document.createElement`, is terribly inelegant compared to HTML. It is true that HTML is a nice, succinct language for telling the browser what DOM elements to make. As a markup language, that's what it has to offer.

But Javascript is a dynamic and expressive language. This question should be asked: Is it possible to find within Javascript's features a declarative, succinct, clear syntax for telling the browser what DOM elements to create? The answer is, **yes**. And that is Webscript. 

Of course, with Javascript we can go far beyond just telling the browser what DOM elements to initially create. With Javascript we can change DOM elements over time, we can make new DOM elements when the time is right, we can hide them, we can get rid of them and we can compose them in many ways. If our basic tool for creating DOM elements is Webscript, not HTML, we can just work with it, because it is Javascript.

*Why Webscript? Because Javascript works best with Javascript and Webscript is Javascript.*

# Server Side

Webscript can be used on the server to generate HTML to feed search engines or for other reasons.

# Usage Example

In your `index.html` file:
```html
<body>
  <script type="module" src="app.js"></script>
</body>
```

Below is your `app.js` file. It uses [Tailwind CSS](https://tailwindcss.com/) to make a card. Note that any CSS library can be used with Webscript.

```javascript
import elementBuilders from 'webscript'

const { body, div, p, span, img } = elementBuilders;

let classes;

const app =
  body`flex items-center justify-center h-screen`(
    div`max-w-sm rounded overflow-hidden shadow-lg`(
      img`w-full`.src`img/card-top.jpg`.alt`Sunset in the mountains`,
      div`px-6 py-4`(
        div`font-bold text-xl mb-2`("The Coldest Sunset"),
        p`text-gray-700 text-base`(
          " Lorem ipsum dolor sit amet, consectetur adipisicing ...")),
      div`px-6 py-4 text-sm font-semibold text-gray-700`(
        span`${classes = "inline-block bg-gray-200 rounded-full px-3 py-1"} mr-2`("#photography"),
        span`${classes} mr-2`("#travel"),
        span`${classes}`("#winter"))));

document.body = app;
```

A couple things to notice. There is no HTML templating here. `body`, `div`, `img`, `p`, `span` are Javascript functions. The `classes` variable is a regular Javascript variable. It reduces some duplication by being assigned a string of class names that are reused by spans. Regular Javascript assignment and string interpolation is used with the spans in the above code.

This is a simple example. Any kind of Javascript composition or manipulation can be done because we have the full Javascript language at our disposal. The above is Javascript strings, variables and functions.

Here is the result of the above code:

![Example Webscript Result](./example.png)

# Use it in React, Vue and other libraries and frameworks!

Webscript was designed to be used in existing libraries and frameworks. It can also be used by itself without any library.

Webscript's `elementBuilders` function can be called with a function that is used to create elements.

The createElements function must take the following arguments: `components, properties, ...children`. These are exactly the arguments that React's [React.createElement](https://reactjs.org/docs/react-without-jsx.html) function take. Vue also provides a [createElement function](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments).

## React Example

Here is an example of Webscript used in React:

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';
import elementBuilders from 'webscript'

const { div, header, p, a, img, code } = elementBuilders(React.createElement);

function App() {
  return (
    div`App`(
      header`App-header`(
        img`App-logo`.src(logo).alt`logo`,
        p("Edit ", code("src/App.js"), " and save to reload."),
        a`App-link`
          .href`https://reactjs.org`
          .target`_blank`
          .rel`noopener noreferrer`(
            "Learn React"
          ))))
}
```

A nice thing about React Hooks is that they are functions and so can be used directly within Webscript.

However class-based React elements are not functions. They can still be used in Webscript by passing them in an array to `elementBuilders` in order to convert them into functions. In the example below the `StrictMode` component is converted to a function and used. The `App` React Hook we created in our last example is used directly without any conversion.

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import elementBuilders from 'webscript';

const [StrictMode] = elementBuilders(React.createElement, [React.StrictMode]);

ReactDOM.render(
  StrictMode(
    App()
  ),
  document.getElementById('root')
);
```
## By Itself

When `elementBuilders` is used without calling it with a `createElement` function a default `createElement` function is used internally that simply creates regular browser DOM elements.

```javascript
import elementBuilders from 'webscript'

const { div, p } = elementBuilders;

const myDiv = div(p("hello world"))
```

In the above example `myDiv` is assigned a regular DOM `div` element with a regular DOM `p` element inside it.






