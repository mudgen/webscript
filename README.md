# What is it?
Webscript is an HTML-like Javascript syntax for defining, creating, composing and manipulating DOM elements. It is for creating web pages, web sites, web applications. It is like HTML but it is Javascript.

## Example

HTML:
```html
<div class="card-image">
  <img src="images/sample-1.jpg" />
  <span class="card-title">Card Title</span>
</div>
```

Webscript:
```javascript
div`card-image`(
  img.src`images/sample-1.jpg`,
  span`card-title`("Card Title"))
```

[See more examples.](https://mudgen.github.io/webscript/html2webscript/#bulma-card)

# Installation
webscript.js is an ES6 module. It has zero dependencies.

```
npm install webscript
```

Or use a CDN in an ES6 module:

```
import elementBuilders from 'https://cdn.jsdelivr.net/npm/webscript@1.0.0/webscript.min.js';
```
# Why?

You might not believe it or think it at first but HTML and Javascript don't go together well. They started out together and have been together so long that it might seem normal they are used together. Take a step back and think about the solutions that exist to make them work together.

[JSX](https://reactjs.org/docs/jsx-in-depth.html) is a compiler on top of Javascript that puts HTML in Javascript. The many templating languages such as used by [Vue](https://vuejs.org/v2/guide/syntax.html) and other frameworks try to put Javascript or custom programming languages into HTML.

If Javascript and HTML went together, they would just be used together. But they are not just used together. They are forced together this way and that way. They are oil and water. They don't go together.

If you think about it, it makes sense that they don't go together. They have difference purposes. HTML is a markup language with a very specific purpose: create static documents that link to each other. Javascript is a general purpose programming language for creating custom software. If Javascript and HTML met at a bar, they wouldn't talk to each other because they have too little in common. Except they happen to be married to the same woman, the browser, so they deal with each other. It is time to stop messing around and decide on *one* of them and the choice is obvious.

It is a common mistake to think that web pages are HTML. They are not. Web pages are the browser DOM, not HTML. It is possible to create web applications without any HTML by building the DOM up with Javascript. The reason this hasn't happened much is because the native way to do this in Javascript, using the function `document.createElement`, is terribly inelegant compared to HTML. It is true that HTML is a nice, succinct language for telling the browser what DOM elements to make. As a markup language, that's what it has to offer.

But Javascript is a dynamic and expressive language. Is it possible to leverage Javascript's features to compete with HTML to create a declarative, succinct, clear syntax for telling the browser what DOM elements to create? The answer is, **yes**. And that is Webscript. 

Of course, with Javascript we can go far beyond just telling the browser what DOM elements to initially create. With Javascript we can change DOM elements over time, we can make new DOM elements when the time is right, we can hide them, we can get rid of them and we can compose them in many ways. If our basic tool for creating DOM elements is Webscript, not HTML, we can just work with it, because it is Javascript.

*Why Webscript? Because Javascript works best with Javascript and Webscript is Javascript.*

# Server Side

Webscript can be used on the server to generate HTML to feed search engines or for other reasons.

# Usage 

```
import elementBuilders from '


