# Webscript

Webscript is an HTML-like Javascript syntax for defining, creating, composing and manipulating DOM elements. It is for creating web pages, web sites, web applications. It is like HTML but it is Javascript.

1. It has zero dependencies.
2. It is small. It's size is about 2KB.

Webscript:

1. Replaces JSX in React.  
2. Replaces HTML templating languages.
3. Replaces HTML in Javascript applications.

## Quick Example

HTML:
```html
<div class="card-image">
  <img src="images/sample-1.jpg" alt="Sample Image" />
  <span class="card-title">Card Title</span>
</div>
```

Webscript:
```javascript
div.class`card-image`(
  img.src`images/sample-1.jpg`.alt`Sample Image`,
  span.class`card-title`("Card Title"))
```

Please see the documentation here: https://mudgen.github.io/webscript/docs/

Follow me on twitter: https://twitter.com/mudgen