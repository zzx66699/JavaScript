# Basic

`DOM manipulation comes with a cost!`


## Write the HTML text
```js
// grab a hold of the box-btn and store it in a variable called boxBtn
let boxBtn = document.getElementById("box-btn");
boxBtn.textContent = "Open the box";
```
another way
```js
let boxBtn = document.getElementById("box-btn");
// innerText will automatically remove the space between output elements
boxBtn.innerText = "Open the box";
```

## Write the HTML element
```js
const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"
```
```js
let array = ["aa", "bb", "cc"]
const ulEl = document.getElementById("ul-el");
let lineItems = "";
for (let i = 0; i < array.length; i++) {
                       // not a string
    lineItems += "<li>" + array[i] + "</li>"
}
// Run the DOM out of the loop to reduce the cost
ulEl.innerHTML = lineItems;
```

## Listen to the event
```js
let boxBtn = document.getElementById("box-btn");
                     // event    function
boxBtn.addEventListener("click", function() {
    console.log("I want to open the box")
})
```

## e.target - check which id is triggering the event
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

## .querySelector()
```js
submitBtn.addEventListener('click', function(){
    //                          it allows us to select by the psuodo selector
    const checkedRadio = document.querySelector('input[type="radio"]:checked')
    console.log(checkedRadio.value)
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
