# Array
In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even `mixed` types.

To create an array, add elements between square brackets []. 

## [] - Indexing
```js
const numbers = [1, 'two', 3, 'four'];
numbers[2];
// => 3
```

## .length - Number of elements
```js
const numbers = [1, 'two', 3, 'four'];
numbers.length;
// => 4
```

## array.slice(start, end)
```js
let arr = [1, 2, 3, 4, 5];

let part = arr.slice(1, 4);

console.log(part); // [2, 3, 4]
console.log(arr);  // [1, 2, 3, 4, 5]

```

## Methods
They are used to add or remove from the array. **Change the array itself!**
### [] = "" - Change
To change an element in the array, you assign a value at the index:
```js
const numbers = [1, 'two', 3, 'four'];
numbers[0] = 'one';
numbers;
// => ['one', 'two', 3, 'four']
```

### .push() & .unshift()  - Add element and return the length
The push() method adds one or more elements to the `end` of an array and returns the new `length` of the array.
```js
const numbers = [1, 'two', 3, 'four'];
numbers.push(5); // => 5
numbers;
// => [1, 'two', 3, 'four', 5]
```
The unshift() method adds one or more elements to the `beginning` of an array and returns the new length of the array.4
```js
const numbers = [1, 'two', 3, 'four'];
numbers.unshift('one'); // => 5
numbers;
// => ['one', 1, 'two', 3, 'four']
```

### .pop() & .shift() - Remove and return the removed element
The pop() method removes the `last` element from an array and returns that element. 
```js
const numbers = [1, 'two', 3, 'four'];
numbers.pop(); // => four
numbers;
// => [1, 'two', 3]
```
The shift() method removes the `first` element from an array.
```
const numbers = [1, 'two', 3, 'four'];
numbers.shift(); // => 1
numbers;
// => ['two', 3, 'four']
```

### array.splice(start, deleteCount, item1, item2, ...)
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method returns an `array` containing the deleted elements.
``` js
// replace
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']

// add
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 0, 'one'); // => []
numbers;
// => [1, 'two', 'one', 3, 'four']

// delete
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 2); // => [3, 'four']
numbers;
// => [1, 'two']
```