# DOM
`DOM manipulation comes with a cost!`

## Change the HTML content
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
Another complex way: 
```js
    // create element and store it in a const
    const li = document.createElement("li");
    // set text content
    li.textContent += myLeads[i]
    // append to ul
    ulEl.append(li)
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