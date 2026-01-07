# Basic

## consolo.log()
```js
let firstName = "Jean";
let age = 26;

// console.log add a space between each element
console.log("Hello", firstName); 
>>> Hello Jean

console.log("Hello" + " " + firstName)
>>> Hello Jean
```

## window.prompt()
```js
let username = window.prompt("what's your name?"); // a pop up
console.log(username);
```

## Varible
A variable is a container to store data

Two steps:
- Declaration (let, var, const)
- Assignment (= assignment operator)

```js
let userName = "Jean"
```

### Constant
const is a variable that can't be reassigned once it has been declared.
```js
const PI = 3.1415926;

PI = 20; // ❌ TypeError
```
const does NOT mean “value never changes”  
It means: The variable binding is constant, not the value itself    

Example
```js
const user = { name: "Alice" };
```

This binding is fixed:   
user ───▶ object A


You cannot do:
```js
user = { name: "Bob" }; // ❌ breaks the binding
```
Because that would mean:   
user ───▶ object B   (changed binding)

```js
const user = { name: "Alice" };

user.name = "Bob";     // ✅ allowed
user.age = 30;         // ✅ allowed

user = {};             // ❌ NOT allowed

```
```js
const arr = [1, 2, 3];

arr.push(4);   // ✅ allowed
arr[0] = 99;   // ✅ allowed

arr = [];      // ❌ NOT allowed

```

## When to write semicolon?
If {} are part of a statement’s grammar, don’t write ;.  
Blocks (if, for, while, function declaration)→ structural, no value → no semicolon
```js
if (x > 0) {
  doSomething();
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

while (x > 0) {
  x--;
}

switch (x) {
  case 1:
    break;
}

function foo() {
  return 1;
}

```
If {} produce a value used in an expression, write ;.
```js
const obj = {
  a: 1,
  b: 2
}; 
```

## ??（Nullish Coalescing Operator）
if value is null or undefined, result = 'default'.
```js
const result = value ?? 'default';
```

## strictly equal ===
Primitive values → compare by value   
Objects → compare by reference (identity): it checks whether both variables reference the same object in memory, not whether their contents are identical.
```js
const A = { color: 'lime green' };
const B = { color: 'lime green' };

A.color === B.color // true

A === B  // false, A and B are different objects


const C = A

A === C  // true


5 === 5         // true
'hi' === 'hi'   // true
true === true   // true

```

## Template string
```JS
// Backtick + ${value}

`text ${expression} text`
```
```JS
return `Oops, it seems like I can't reach out to ${number}`
```

## Check the type of a value or object
### typeof()
The output is a string matching the name of one of the `primitive` data types, except for "null". It can also be "function" or "object".
```js
typeof undefined;
// => "undefined"

typeof NaN;
// => "number"

typeof 42n;
// => "bigint"

typeof function () {
  return 'Hello, World';
};
// => "function"

typeof [1, 2, 3, 4];
// => "object"

typeof { city: 'Stockholm', country: 'Sweden' };
// => "object"

typeof null;
// => "object"
```

## Recursion
Recursion occurs when a function calls itself, either directly or indirectly. It's similar to a loop, but it involves breaking a problem down into smaller, more manageable sub-problems.






