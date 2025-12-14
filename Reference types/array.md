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

## Combine arrays
`+` does NOT merge arrays. What actually happens:
- Each array is converted to a string
- Then the strings are concatenated
```js
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

const totalList = friendsList + myList
totalList
>>> "noodles,meat,sauce,mozzarellanoodles,sauce,mozzarella,kampot pepper" // This is a string, not an array.
```
Correct way: Using spread operator

### Spread operator
When ... appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into `a list of elements`. 
```js
const combined = [...myList, ...friendsList];

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

## Array destructuring
It is a concise way to extract values from an array and assign them to distinct `variables`.

```js
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune;
// => 14
```
Leaving a position unnamed (by not writing any variable name) silently ignores that position.
```js
const deck = [5, 9, 7, 1, 8];

const [firstCard] = deck
return firstCard;
```
Example: Elyse takes three cards and quickly moves the top card to the back, making the middle card the first card and the old bottom card the middle card. She doesn't need to call a single function.
```js
export function shiftThreeCardsAround(deck) {
  const [firstCard, secondCard, thirdCard] = deck;
  return [secondCard, thirdCard, firstCard];
}
```

### Rest operator
When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. The three dots together with a variable name is called a `rest element`. It collects zero or more values, and stores them into a single array.  

```js
// ...everythingElse is called a rest element
const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];
a;
// => 0
b;
// => 1
everythingElse;
// => [1, 2, 3, 5, 8]
```
A rest element cannot have a trailing comma. It must be the last element in a destructuring assignment.
```js
const [...items, last] = [0, 1, 1, 2, 3, 5, 8];

>>> SyntaxError
```

