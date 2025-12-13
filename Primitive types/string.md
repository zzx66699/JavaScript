# String
Strings are immutable in JavaScript. So a "modification" will always create a new string instead.


## .length 
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