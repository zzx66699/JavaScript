# DOM
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


## Get input value
The value is always in the format of `string`!
```js
const input = document.getElementById("input");
               // value property
console.log(input.value);
```

## Clear input value
```js
const input = document.getElementById("input");
    // value property
input.value = "";
```

## Listen to the event
```js
let boxBtn = document.getElementById("box-btn");
                     // event    function
boxBtn.addEventListener("click", function() {
    console.log("I want to open the box")
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


## Form
### preventDefault 
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

### FormData - return an object holding all the forms data
```js
const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()

    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)
    >>> FormData {}

    // use FormData.get(key) to get the value
    console.log(loginFormData.get("name"))
    >>> Jean
})
```

## Local storage
Persist the data cross page refresh. You can only store  `string`!
```js
          // store   key     value
localStorage.setItem("name", "Jean");
                         // get the item
const name = localStorage.getItem("name");
console.log(name)
>>> name

        // clear the storage
localStorage.clear()
console.log(name)
>>> null
```

## Convert between string and array
```JS
let myLeads = `["www.awesomelead.com"]`
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.baidu.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
```