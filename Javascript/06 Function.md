# Function
## Function Declarations
JavaScript moves declarations to the top of the scope before running the code.
```js
//           parameters
function add(num1, num2) {
  return num1 + num2;
}
// arguments
add(1, 3);
>>> 4
```

## Function Expression
Function Expression is assigned to a variable and is not hoisted.  

We need to declare a const and assign it with an anonymous function. 
```js
// in this example, the function returns nothing.  
const greeting = function(){
  console.log("Hello!");
};

console.log(greeting);
>>> [Function: result]

console.log(function(){
  console.log("Hello!");
})
>>> [Function (anonymous)]

// add () to invoke the function 
console.log(greeting())   
>>> Hello!  // this is from the console.log inside of the function
>>> undefined  // nothing is returned, so it is undefined. 


console.log(function(){
  console.log("Hello!");
}())
>>> Hello!
>>> undefined
```
If we add the `return`
```js
const greeting2 = function(){
  return "Hello World!"
};


console.log(greeting())   
>>> Hello World!
```


## Arrow function expression
- If the function body contains only a return statement, the {} and the return keyword can be omitted.   
- More complex logic requires the {} and the return keyword
```js
const addUpTwoNumbers = function(a1, a2){
  return a1 + a2
}

// equals to 
const addUpTwoNumbers = (a1, a2) => {
  return a1 + a2
}

// equals to 
const addUpTwoNumbers = (a1, a2) => a1 + a2
```

- If there is only `one` parameter, the parenthesis () can be omitted.   
 
```js
const multiply = a1 => a1 * 5
```
- 0 or 2 or more needs the parenthesis.   
```js
const zero = () => 0
```


## ...name - Rest parameters 
We got a function that takes in parameters but we don't know how many arguments that is going to be passed to it.   

It captures all the arguments which don't explicitly  match an exsiting parameter. 

All the rest arguments will be wrapped in an `array`. 

```js
function setPermissionLevel(permissionLevel, ...names) {
    names.forEach((name)=> 
      console.log(`${name} now has ${permissionLevel} level access.`))   
}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike', 'Clare')
```

```js
function concat(...strings) {
  return strings.join(' ');
}

concat('one');
// => 'one'

concat('one', 'two', 'three');
// => 'one two three'
```






## Closures
```js
function makeCounter(){
    let count = 0;

    return function(){
        count ++;
        return count;
    };

}

const counter = makeCounter() // the counter here is atucally the whole function(){....} after return 

counter()
>>> 1

counter()
>>> 2

// when we run counter(), the let count = 0 will not run. 
// the count is stored. so the number is increasing. 
```
Example: Return a function that memoizes the last result.  If the arguments are the same as the last call, then memoized result returned.  
@param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'  
@returns {function} a function which takes x and y arguments, and will either return the saved result  
if the arguments are the same on subsequent calls, or compute a new result if they are different.  
```js
export function memoizeTransform(f) {
  let lastx;
  let lasty;
  let lastresult;
  return function(x, y){
    if(lastx===x && lasty ===y){
      return lastresult
    };
    
    lastx = x;
    lasty = y;
    lastresult = f(x, y);
    return lastresult;
  
  }
}
```

## Callback functions
A callback function is a function that is passed into another function as a parameter and executed later.
```js
function greet(name) {
    console.log("Hello " + name)
}

function processUserInput(callback) {
    const name = "Tom"
    callback(name)
}

// the function greet is passed to the funtion processUserInput as a parameter
processUserInput(greet)
```
