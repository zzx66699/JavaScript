# null and undefined
## null
The primitive value null is used as an intentional `"empty value"` for variables of any type.
```js
let name = null;
// name is intentionally set to "empty" because it is not available
```

You can check whether a variable is null by using the strict equality operator `===`.
```js
let name = null;

name === null;
// => true
```

## undefined
A variable that has not been  `assigned a value` is of type undefined.
That means while null represents an empty value (but still a value), undefined represents the total `absence` of a value. 

undefined appears in different contexts.

- If a variable is declared without a value (initialization), it is undefined.
- If you try to access a value for a non-existing key in an object, you get undefined.
- If a function does not return a value, the result is undefined.
- If an argument is not passed to a function, it is undefined, unless that argument has a default value.
```js
let name;
console.log(name);
// => undefined
```

The result of a function that returns no value or does not have a return statement is undefined. 
```js
function noReturn(a) {
  a * 2;
}

noReturn(1);
// => undefined
```
You can check whether a variable is undefined using the strict equality operator `===`.
```js
let name;

name === undefined;
// => true
```

Example:
Determines the status a ticket has in the ticket tracking object.
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
```js
export function ticketStatus(tickets, ticketId) {
  switch(tickets[ticketId]){
    case null:
      return 'not sold';
    case undefined:
      return 'unknown ticket id';
    default:
      return 'sold to ' + tickets[ticketId]
  }
}
```

## null vs. undefined vs. ""
``` js
null == undefined // true 
null == ""        // false
null == 0         // false

null === undefined // false

if (null){
  // will not run
}

if (""){
  // will not run
}

In this example, if user doesn't type anything and click "ok", the userName is "";   
if he clicks "cancel", the userName is null.
```js
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
```


```


## Optional Chaining
If you try to retrieve a nested value in an object but the parent key does not exist, JavaScript will throw an error. To easily avoid this, optional chaining was added to the language specification in 2020. With the optional chaining operator ?. you can ensure that JavaScript only tries to access the nested key if the parent was not null or undefined. Otherwise, undefined is returned.
```js
const obj = {
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
};

obj.address.zipCode;
// => undefined

obj.residence.street;
// => TypeError: Cannot read property 'street' of undefined

obj.residence?.street;
// => undefined
```

## Nullish Coalescing
There are situations where you want to apply a default value in case a variable is null or undefined (but only then). To address this, the nullish coalescing operator ?? was introduced in 2020. It returns the right-hand side operand only when the left-hand side operand is null or undefined. Otherwise, the left-hand side operand is returned.
```js
let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0
```

