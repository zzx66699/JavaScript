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