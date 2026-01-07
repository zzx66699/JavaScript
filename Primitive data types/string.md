# String
Strings are immutable in JavaScript.
```js
let s = "hello";
s[0] = "H";
console.log(s); 

>>> "hello"  // still hello
```

## 1. Property functions 属性
These function just describes what something is / has. Reading it does not perform work. No parameters.  
Strings are primitive values, but when you access a property, JavaScript temporarily wraps the string in a String object:
```js
new String("hello").length
```
That wrapper object has properties like:
- length
- toUpperCase
- slice  
After the access, the wrapper is immediately discarded. This is why a primitive string can still have properties.  

### .length 
```js
let userName = "Jean";
console.log(userName.length); // no parentheses
>>> 4
```

## .charAt() or [] - Indexing
```js
let userName = "Jean Zhu";
console.log(userName.charAt(0));
>>> J

console.log(userName[0])
>>> J

// .charAt() doesn't accpet -1 as the arguement
console.log(userName.charAt(-1)); // this is wrong. 
```

## & .slice() - slicing
```js
let firstName;
let lastName;

firstName = userName.slice(0, 4) 
lastName = userName.slice(5)  // without comma, it will take everything until the end


let index;
index = userName.indexOf(" ")
firstName = userName.slice(0, index) 
lastName = userName.slice(index+1)

console.log(firstName)
console.log(lastName)
```

## .split
```js
const str = '2022-02-09';

const result = str.split('-').at(-1);
console.log(result); // '09'
```

## .indexOf() & .lastIndexOf() - Find the index
```js
let userName = "Jeane";
console.log(userName.indexOf("e")); // index of the first occurance of "e"
>>> 1

console.log(userName.lastIndexOf("e")); // index of the last occurance of "e"
>>> 4
```

## .trim() - Remove the spacing
```js
let userName = "   Jean   ";
console.log(userName.trim());
```

## .toUpperCase() & .toLowerCase()
```js
let userName = "   Jean   ";
console.log(userName.toUpperCase());
```

## .replaceAll()
```js
let userName = "Jean";
console.log(userName.replaceAll("J", "Z"));
>>> Zean
```

## Comparison
A dictionary (lexicographical) order is applied.
```js
'Apple' > 'Pear';
// => false

'a' < 'above';
// => true

'a' === 'A';
// => false
```

## Template strings 
It allows for embedding expressions in strings.   
Backticks - (``) - are used to represent a template string.   
The${...} is the placeholder that is used for substitution. 
```js
const num1 = 1;
const num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// => Adding 1 and 2 gives 3.
```
  
Any non-string types are implicitly converted to strings.  All types of expressions can be used with template strings.
```js
const track = 'JavaScript';

`This track on exercism.org is ${track.toUpperCase()}.`;
// => This track on exercism.org is JAVASCRIPT.
```
When you are needing to have strings formatted on multiple lines

```js
export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`; 
// need to start at the beginning of the line. JavaScript does not automatically remove indentation inside template strings.
// The string value is exactly: "Congratulations Alice!\nClass of 2024"
}
```
if you indent Class
```js
return `Congratulations ${name}!
    Class of ${year}`;
```
Now the string literally contains four spaces before Class:  
`"Congratulations Alice!\n    Class of 2024"`  
Those spaces are printed as part of the output, causing indentation.  

### Logic in the output
An example of this is embedding a ternary operator. This operator is a short form for writing an if/else statement. The syntax is `condition ? consequent-expression : alternative-expression`. If the condition is truthy, the operand on the left-hand side of the colon will be returned. Otherwise, the result of the ternary expression is the operand on the right-hand side of the colon.
```js
const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.
```
