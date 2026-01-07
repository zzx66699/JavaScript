# Function Expression
Function Expression is assigned to a variable and is not hoisted.  

It is a function without name (anonymous function).  

The function does not exist independently — it only exists after it is assigned to add.

## Benefit
The benefit of the function expression is that it avoids polluting the global scope with name. (Global scrope is where the variable and functions live if they are declared at the top level).  

We can write it and then forget about it. 

### Example of polluting the global scope
```js
function helper() {
  console.log("doing something");
}
```

This creates a global name:
```js
helper(); 
```
We need to think about unique function names, which can be tedious. 


### Function expression (no global name)
The function has no name. It runs once. After that, it’s gone. 


```js
// when the function is declared, it is not invoked. 
// in this example, the function returns nothing. 

const greeting = function(){
  console.log("Hello!");
};

console.log(typeof greeting);  
>>> function

console.log(greeting);
>>> [Function: result]

console.log(function(){
  console.log("Hello!");
})
>>> [Function (anonymous)]


console.log(greeting())   // add () to invoke the function 
>>> Hello!
>>> undefined   // nothing is returned, so it is undefined. 


console.log(function(){
  console.log("Hello!");
}())
>>> Hello!
>>> undefined
```

```js
const greeting2 = function(){
  console.log("Hello!");
  return "World!"
};


console.log(greeting())   
>>> Hello!
>>> World!


console.log(function(){
  console.log("Hello!");
}())
>>> Hello!
>>> World!
```


## Arrow function expression
- remove the function keyword
- add =>
- If the function body contains only a return statement, the {} and the return keyword can be omitted. 
- If there is only one parameter, the parenthesis () can be omitted as well.
```js
const addUpTwoNumbers = function(a1, a2){
  return a1 + a2;
}
// equals to 
const addUpTwoNumbers = (a1, a2) => a1 + a2
```