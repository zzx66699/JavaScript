# Basic

`DOM manipulation comes with a cost!`

## Built-in shortcut properties
```js
document.body
document.head
document.title
```

## Write the HTML text
* textContent
```js
// grab a hold of the box-btn and store it in a variable called boxBtn
let boxBtn = document.getElementById("box-btn");
boxBtn.textContent = "Open the box";
```
* innerText
```js
let boxBtn = document.getElementById("box-btn");
// innerText will automatically remove the space between output elements
boxBtn.innerText = "Open the box";
```

## Write the HTML element

```js
let array = ["aa", "bb", "cc"]
const ulEl = document.getElementById("ul-el");
let lineItems = "";

for (let i = 0; i < array.length; i++) {
    lineItems += "<li>" + array[i] + "</li>"
}

// Run the DOM out of the loop to reduce the cost
ulEl.innerHTML = lineItems;
```
* When writing HTML with Javascript, **attribute values** must be `quoted`
```js
src = "xxx"
container.innerHTML = `<img src="${src}">`
```

* Without the innerHTML, we will need to use createElement and appendChild to do the same thing

```js
const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header"

document.getElementById("root").appendChild(h1)
```

## Listen to the event
Anonymous function
```js
let boxBtn = document.getElementById("box-btn");
                     // event    function
boxBtn.addEventListener("click", function() {
    console.log("I want to open the box")
})
```
call the funtion in the addEventListener
```js
//                                  no parenthesis 
document.addEventListener('submit', logChosenSuperpower)

function logChosenSuperpower(e){
    e.preventDefault()
    console.log(document.getElementById('superpowers').value)
}
```

## .querySelector()
### Psuodo selector
```js
submitBtn.addEventListener('click', function(){
    //                          it allows us to select by the psuodo selector
    const checkedRadio = document.querySelector('input[type="radio"]:checked')
    console.log(checkedRadio.value)
})
```
### Class selector
```js
const box = document.querySelector(".box");
```
### id selector
```js
const header = document.querySelector("#header");
```
### Label selector
```js
// it will select the first p element
const firstParagraph = document.querySelector("p");
```



## .parentElement
```js
const container = document.getElementById('container')

container.innerHTML =   
    `<div class="product">
        <h3>A</h3>
        <button id="A">Buy Now</button>
    </div>
    <div class="product">
        <h3>B</h3>
        <button id="B">Buy Now</button>
    </div>
    <div class="product">
        <h3>C</h3>
        <button id="C">Buy Now</button>
    </div>`
                    
container.addEventListener('click', function(e){
    //                                  it lets us directly take control of the parent element in js
    document.getElementById(e.target.id).parentElement.style.backgroundColor = 'lightblue'
})
```

## .getElementsByClassName()
```js
clearBtn.addEventListener('click', function(){
    // .getElementsByClassName returns a array like object, we can take it as an array for now
    const productsArray = document.getElementsByClassName('product')
    for (let product of productsArray){
        product.classList.remove('purchased')
        product.classList.add('on-offer')
        
    }
})
```



## setTimeout - set the delay
```js
setTimeout(function(){
    console.log("Hello. world!")
// the delayed milliseconds 
}, 3000)
```

## .disabled
```html
<!-- set the decrement button as disabled by default -->
<button id="decrement" class="decrement" disabled>-</button>
```
```css
.decrement:disabled{
    color: whitesmoke;
    opacity: 0.2;
    cursor: not-allowed;
}
```

```js
const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
const quantityDisplay = document.getElementById('quantity-display')

let quantity = 0

decrement.addEventListener('click', function(){
    quantity--
    if (quantity === 0){
        decrement.disabled = true
    }     
    quantityDisplay.innerText = quantity
})

increment.addEventListener('click', function(){
    quantity ++
    decrement.disabled = false
    quantityDisplay.innerText = quantity
})
```

## data- attribute
