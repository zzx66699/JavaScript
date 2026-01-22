# Event 
```js
document.addEventListener("click", function(e){
    console.log(e)
})
```
We will get PointerEvent object in the dev tool.  
As we scroll down, we will find the target key, which is an object itself.  
As we extend the target, we will find the following attributes.  


## e.preventDefault() 
To prevent getting a query string in the URL.
```html
<!-- give the whole form an id -->
<form id="form">
    <input type="text">Name
    <input type="email">Email
    <input type="number">Age
</form>
```
```js
const form = document.getElementById("form")

// e represents the event, which is submit 
// use form as the element, not the submit button
form.addEventListener("submit", function(e){
    e.preventDefault()
})
```

## e.target.id - check which id is triggering the event
```html
<div id="container">
    <button>A</button>
    <button>B</button>
    <button>C</button>
</div>
```

```js
let container = document.getElementById("container")

container.addEventListener("click", function(e){
    console.log(e.target.id)
})
```

## e.target.dataset - data attribute
```html
<img src="/images.adb.png" id="img"> 

<!--                        data-[the name i give] = [stored value] -->
<i class="fa-class fa-share" data-share="img"></i>
```

```js
document.addEventListener('click', function(e) {
    // only when you click on the share icon, the e.target.dataset.share will exist
    if (e.target.dataset.share){
        //                   dataset, not data 
        console.log(e.target.dataset.share)
    }
})
```
### JS will flattern out the camelCase in HTML
**Best practice: Use `dash` to seperate words in HTML, and use `camelCase` in the Javascript!**
```html
<i class="fa-class fa-share" data-share-btn="img"></i>
```

```js
document.addEventListener('click', function(e) {
    //                        B here is camel case
    if (e.target.dataset.shareBtn){
        console.log(e.target.dataset.shareBtn)
    }
})
```
`Don't use uppercase` when naming data attributes in HTML
```html
<!--                             shareBtn is camelCase, which will be flatterned out -->
<i class="fa-class fa-share" data-shareBtn="img"></i>
```

```js
// This will never work
document.addEventListener('click', function(e) {
    //                        B here is camelCase
    if (e.target.dataset.shareBtn){
        console.log(e.target.dataset.shareBtn)
    }
})
```

```js
// This will work
document.addEventListener('click', function(e) {
    //                   use b here
    if (e.target.dataset.sharebtn){
        console.log(e.target.dataset.sharebtn)
    }
})
```

