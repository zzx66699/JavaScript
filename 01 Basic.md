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
const is a variable that can't be changed.
```js
const PI = 3.1415926;
```


## Function Declarations

```js
// In this example, the function name is add. It has two parameters, num1 and num2. 

// Then the function add is called using two arguments: 1 and 3. 
function add(num1, num2) {
  return num1 + num2;
}

add(1, 3);
// => 4
```

## export & import - Exposing to Other Files
To make a function, a constant, or a variable available in other files, they need to be `exported` using the export keyword. Another file may then import these using the `import` keyword. This is also known as the module system.

```js
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```