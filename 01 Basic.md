# Basic

## Create html, js, and css
Enter ! and press tab, it will give you a html skeleton.  
Link to the css and js.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- link to css -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- link to js -->
    <script src="index.js"></script>
</body>
</html>
```
Example: change the style using css
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <label id="countLabel">0</label><br>
    <button type="button" id="decreaseButton">Decrease</button>
    <button type="button" id="reset">Reset</button>
    <button type="button" id="increaseButton">Increase</button>
    <script src="index.js"></script>
</body>
</html>
```
```css
/* using the id to represent the part we want to change */
#countLabel{
    display: block;
    text-align: center;
    font-size: 50px;
}
```
## consolo.log()
```js
let firstName = "Jean";
let age = 26;

// console.log add a space between each element
console.log("Hello", firstName); 
>>> Hello Jean

console.log("You are", age, "years old.");
>>> You are 26 years old.
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