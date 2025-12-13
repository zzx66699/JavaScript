# Number
JavaScript only has two kinds of numbers:
- number: a numeric data type in the double-precision 64-bit floating-point format (IEEE 754). Examples are -6, -2.4, 0, 0.1, 1, 3.14, 16.984025, 25, 976, 1024.0 and 500000.
- bigint: a numeric data type that can represent integers in the arbitrary precision format. Examples are -12n, 0n, 4n, and 9007199254740991n.

## Math
```js
let x = 4.1;
let y = 5;
let z = 9;

let maximum = Math.max(x, y, z);

let minimum = Math.min(x, y, z);

x = Math.round(x);
console.log(x);
>>> 4

// down round
x = Math.floor(x);
console.log(x);
>>> 4

// up round
x = Math.ceil(x);
console.log(x);
>>> 5

// Exponentiation
x = Math.power(x, 2);

// Square root
x = Math.sqrt(x);

// Distance from 0 (absolute value)
x = Math.abs(x);

// Built-in constants
x = Math.PI;

// Generate a random number between 0 and 1
x = Math.random();
```

## Arithmetic operators
```js
// exponentiation
4 ** 3; // => 64

// remainder
4 % 3; // => 1
```

## Comparison
```js
//Strict Equals	
a === b

1 === 1.0;// => true
// All numbers are floating-points, so this is different syntax for the exact same value.


// Loose equals - This is not recommended because it will automatically change the data type
a == b 

5 == "5"       // true ❌
true == 1      // true ❌
"" == 0        // true ❌
null == undefined // true ❌

// Not (strict) equals	
a !== b
```