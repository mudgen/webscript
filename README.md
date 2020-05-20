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
{: .fs-6 }
```javascript
div`card-image`(
  img.src`images/sample-1.jpg`,
  span`card-title`("Card Title"))
```

# Why?
Small test.
