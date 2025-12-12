# Type Conversion
## String, number and boolean 
```js
let age = window.prompt("How old are you?"); // window.prompt will return a string

consolo.log(tyepof age) // get the type 
>>> string

age = Number(age); 
consolo.log(tyepof age) 
>>> number
```
```js
let x;
let y;
let z;

x = Number("3.14");
console.log(x, typeof x)
>>> 3.14, number

y = String(3.14);
console.log(y, typeof y);
>>> 3.14 string

z = Boolean(""); // empty string
console.log(z, typeof z);
>>> false 'boolean'

z = Boolean("12434"); // anything else
console.log(z, typeof z);
>>> true 'boolean' // give you true
```