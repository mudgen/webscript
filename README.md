# What is it?
Webscript is an HTML-like Javascript syntax for defining, creating, composing and manipulating DOM elements.

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
# Why?

You might not believe it or think it at first but HTML and Javascript don't go together well. They started out together and have been together so long that it might seem normal they are used together. Take a step back and think about the solutions that exist to make them work together.

[JSX](https://reactjs.org/docs/jsx-in-depth.html) is a compiler on top of Javascript that puts HTML in Javascript. The many templating languages such as used by [Vue](https://vuejs.org/v2/guide/syntax.html) and other frameworks try to put Javascript or custom programming languages into HTML.

If Javascript and HTML went together, they would just be used together. But they don't go together. They are forced together this way and that way. They are oil and water.

If you think about it, it makes sense that they don't go together. They have difference purposes. HTML is a markup language with a very specific purpose: create static documents that link to each other. Javascript is a general purpose programming language for creating custom software. If Javascript and HTML met at a bar, they wouldn't talk to each other. They happen to be married to the same woman, the browser, so they deal with each other. It is time to stop messing around and decide on *one* of them and the choice is obvious.

It is a common mistake to think that webpages are HTML. They are not. Web pages are the browser DOM, not HTML. It is possible to create web applications without any HTML by building the DOM up with Javascript. The reason this hasn't happened much is because the native way to do this in Javascript, using the function `document.createElement`, is terribly inelegant compared to HTML. It is true that HTML is a nice, succinct language for telling the browser how to build DOM elements. As a markup language, that's *all* it has.

But Javascript is a dynamic and expressive language. Is it possible to leverage Javascript's language features to compete with HTML to create a declarative, sussict, clear syntax for telling the browser how to build up the DOM? The answer is, **yes**. And that is webscript. Why do this?  Because Javascript works best with Javascript and webscript is Javasript. 

More to come.


