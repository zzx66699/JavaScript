# Link to HTML

## Change the HTML content
```js
// grab a hold of the box-btn and store it in a variable called boxBtn
let boxBtn = document.getElementById("box-btn");
boxBtn.textContent = "Open the box";
```

## Get the input value
```js
const input = document.getElementById("input");
               // value property
console.log(input.value);
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
for (let i = 0; i < array.length; i++) {
                             // not a string
    ulEl.innerHTML += "<li>" + array[i] + "</li>"
}
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

