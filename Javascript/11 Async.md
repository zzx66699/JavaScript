# Async

## Callback functions
A callback function is a function that is passed into another function as a parameter and executed later.

* If we add a parenthesis to the handleClick() here, this function will run immediately. 
* We pass the content of the function by its name, so `at sometime in the future` when it is appropriate (when it is clicked), addEventListener is able to call the function handleClick
```js
function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)
```

We have used lots of callback functions already, including:
* .filter()
* setTimeout()
* addEventListener()

## Promise
* A Promise represents a value that will be available later. It is an `object` that stands for a future result of an async operation.
* Pending => Resolved or Rejected
* We can't directly log out the promise
```js
const data = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")

console.log(data)
>>> Promise
```
* It has a method called `.then()`

## .then() and Asynchronous Javascript
* It lets the `other codes run first` before the response from the fetch request come back from the server
* .then() is the part that will run if the promise is fulfilled
```js
console.log("The first console log")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data))

console.log("The second console log")

>>> 
The first console log
The second console log
{message: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_12003.jpg', status: 'success'}
```

## promise chaining
* .then() works on a promise and it also returns a promise
* promise is passed as a `parameter` (res) to the `callback function` of the .then()

```js
const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")

const promise2 = promise.then(res => res.json())

console.log(promise2)
>>> Promise
```
* In a promise chaining, we can simplify it into 
```js
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/").then(res => res.json())
```
* Whatever the first callback function `returns`, is what the next .then() will `receives` to its callback function  as the parameter. 
* Console.log() will not pass anything; Only the thing that is `returned` will be passed down. 
```js
fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return "Hello"
    })
    .then(function(whatever) {
        console.log(whatever)
        return "World"
    })
    .then(function(another) {
        console.log(another)
    })

>>> "World"
```
## `async` & `await`  
await does not change how Promises work — it only makes the code look synchronous.  
```js
async function loadData() {
  try {
    const data = await fetch("/data");
    // fulfilled
  } catch (error) {
    // rejected
  } finally {
    // always runs
  }
}
```



### A simple flow
#### producing codes
- the first parameter corresponds to the internalResolve
- the second parameter corresponds to the internalReject
```js
let promise = new Promise((resolve, reject) => {

  let fileloaded = true; 

  if(filedloaded){
    // Whatever you pass to resolve becomes the value received by .then.
    resolve("File loaded"); 
  }
  else{
    reject("File not loaded")
  }
})
```
We can imagine this is happening in the internal.
```js
const internalResolve = function (value) {
  // 1. mark the promise as fulfilled
  // 2. store the value
  // 3. schedule .then callbacks
};

const internalReject = function (error) {
  // 1. mark the promise as rejected
  // 2. store the error
  // 3. schedule .catch callbacks
};

executor(internalResolve, internalReject);
```
#### consuming code
if the promise is resolved, what we want to do
```js
// When fulfilled → call resolve with the stored value
// when failed -> call reject function with the stored error
promise.then(value => consolo.log(value))  
       .catch(error => console.log(error))
```

### No value is stored
```js
const promise = new Promise(resolve => {
  setTimeout(resolve, 5000); 
});

// Whatever the fulfilled value, It only cares about the promise is fulfilled. 
// No argument is passed. 
promise.then(() => console.log("Thanks for waiting!"))
>>> Thanks for waiting!

promise.then(value => {
  console.log(value);
});
>>> undefined

```


### pending — the starting state
```js
const promise = fetch("/data");
```
At this moment:
- The asynchronous operation has started
- The result is not available yet
- The Promise is pending

The Promise represents a `future result`, not the result itself.

### Resolution — only one possible outcome

A Promise can leave pending in exactly one way, and this is irreversible.


#### Case A: Success → fulfilled
```js
fetch("/data").then(data => {
  // runs only if the Promise is fulfilled
});
```
- The async operation completes successfully
- The Promise becomes fulfilled
- It now has a resulting value

#### Case B: Failure → rejected
```js
fetch("/data").catch(error => {
  // runs only if the Promise is rejected
});
```
- The async operation fails
- The Promise becomes rejected
- It now has a failure reason (error)

### Final state rule 
Once a Promise leaves pending, it is settled forever.  
- It cannot change from fulfilled to rejected
- It cannot change from rejected to fulfilled
- It can never go back to pending

.then, .catch, and .finally on the timeline
```js
fetch("/data")
  .then(result => {
    // fulfilled
  })
  .catch(error => {
    // rejected
  })
  .finally(() => {
    // always runs
  });
```
