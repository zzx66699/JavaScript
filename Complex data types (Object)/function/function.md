# Function
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
Function Declarations can be hoisted - JavaScript moves declarations to the top of the scope before running the code.
```js
add(1, 2); // ✅ works

function add(a, b) {
  return a + b;
}
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

## Rest parameters
When ... appears in a function definition next to its last argument, that parameter is called a rest parameter. It allows the function to accept an `indefinite number` of arguments as `an array`.
```js
function concat(...strings) {
  return strings.join(' ');
}
concat('one');
// => 'one'
concat('one', 'two', 'three');
// => 'one two three'
```
### Example
```js
function pizzaPrice(pizza, ...extras){
  ...
}
```

#### ① Call phase (outside the function)  
```js
pizzaPrice("Margherita", "ExtraSauce","ExtraToppings");
```
At this moment:
- "ExtraSauce" is the second argument
- "ExtraToppings" is the third argument  

There is no variable called extras yet. These are just separate arguments passed to the function.
 
#### ② Parameter binding phase (inside the function definition)
```
export function pizzaPrice(pizza, ...extras) {
```

The meaning of ...extras is: Collect all remaining arguments into an array and assign it to extras.

So when the function starts executing, JavaScript automatically does this:
```js
extras = ["ExtraSauce", "ExtraToppings"];
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
Callback functions are functions passed as arguments  
### ???
Example: https://exercism.org/tracks/javascript/exercises/fruit-picker/edit

