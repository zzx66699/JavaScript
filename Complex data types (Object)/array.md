# Array
An array is an ordered list of items. To create an array, add elements between square brackets [].     

It can hold any type of primitives or object(composite), even `mixed` types.  
```js
let myself = ["Jean", 27, true]
```
 
It is mutable.

## Property functions
## .length - Number of elements
1 larger than the final index
```js
const numbers = [1, 'two', 3, 'four'];
numbers.length;
// => 4
```
---------------------------------------------------------------
## Pure methods - Don't modify the original array. 
They return a new one instead.

## [] - Indexing
It returns an element, no an sub-array.
```js
const numbers = [1, 'two', 3, 'four'];
numbers[2];
// => 3
```
We can't use **[-index]** !!!
```js
numbers[-1];
>>> undefined
```

## array.slice(start, end)
creates a `sub-array`
```js
let arr = [1, 2, 3, 4, 5];

let part = arr.slice(1, 4);

console.log(part); // [2, 3, 4]
console.log(arr);  // [1, 2, 3, 4, 5]
```
it's ok to use -index in slice
```js
arr.slice(-1)
>>> [5]

arr.slice(-2)
>>>[4, 5]
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
Example: Create a composition function that returns a function that combines two functions to perform a repeatable transformation
@param {function} f the first function to apply  
@param {function} g the second function to apply  
@returns {function} a function which takes an x, y parameter, returns the transformed coordinate pair in the form [x, y]
```js
export function composeTransform(f, g) {
  return function(x, y){
    return g(...f(x,y)) // f(x,y) returns an object[]; g()needs 2 param; separate the object into 2 params
  }
}
```

## .map()
```js
let arr = [1, 2, 3, 4];

const newArr = arr.map((value) => value - 1);
console.log(newArr);
// => [0, 1, 2, 3]

console.log(arr);
// => [1, 2, 3, 4]
```

## .filter()
```js
let arr = [1, 2, 3, 4];

arr.filter((value) => value % 2 === 0);
// => [2, 4]
```

## .reduce (pure)
Reduces the array into a single value using a function that takes an accumulator and the current element in the array as parameters.
```js
array.reduce((accumulator, currentValue) => newAccumulator, initialValue);

let arr = [1, 2, 3, 4]

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator;
  },
  { even: [], odd: [] },
);
// => { even: [2, 4], odd: [1, 3] }
```

## Predicate - functions that returns boolean
### .every() 
```js
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true
```

## .some()
returns true if some of the element meet the requirement
```js
[1, 3, 5].some(n => n % 2 === 0); // false
[1, 4, 5].some(n => n % 2 === 0); // true
```

### .includes() - determines whether an array includes a certain value
```js
const numbers = [1, 'two', 3, 'four']
numbers.includes(1)
>>> true

numbers.includes("1")
>>> false
```

## .find()
It returns the `value` of the first element in the array that passes the predicate test. The method returns undefined when none of the elements in the array pass the predicate test.
```js
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1
```

## .findIndex()
The findIndex(predicate) is the same as the find() method, but it returns the (first) `index` of the element that passes the predicate test instead of the value. The method returns -1 when none of the elements in the array pass the predicate test.
```js
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7);
// => 4
numbers.findIndex((num) => num > 9);
// => -1
```

## .indexOf() - Get the first index of the value
```js
const numbers = [1, 'two', 3, 'four']
numbers.indexOf(1)
>>> 0
```

-------------------------------------------------------
## Change the original array
They are used to add or remove from the array. **Change the array itself!**

### [] = "" - Change
To change an element in the array, you assign a value at the index:
```js
const numbers = [1, 'two', 3, 'four'];
numbers[0] = 'one';
console.log(numbers);

>>> ['one', 'two', 3, 'four']
```

### .push() & .unshift()  - Add element and return the length
The .push() method adds one or more elements to the `end` of an array and returns the new `length` of the array.
```js
const numbers = [1, 'two', 3, 'four'];
numbers.push(5); 
console.log(numbers);

>>>[1, 'two', 3, 'four', 5]
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
numbers.pop(); 
console.log(numbers);

>>> [1, 'two', 3]
```
The shift() method removes the `first` element from an array.
```js
const numbers = [1, 'two', 3, 'four'];
numbers.shift(); 
console.log(numbers);

>>> ['two', 3, 'four']
```


## .reverse()
```js
const arr = [1, 2, 3]
arr.reverse();

>>> [3, 2, 1]
```

## .sort()
sorts the elements of an array by first converting them to `strings` and then applying string comparison   
sort also `returns that modified array` which is convenient if you want to chain other methods to it.   

```
```js
const arr = ['c', 'a', 'z', 'b'];
const result = arr.sort();

console.log(result);
// => ['a', 'b', 'c', 'z']

console.log(arr);
// => ['a', 'b', 'c', 'z']
```
To customize the sorting behavior, you can pass a comparison function as an argument.   
The comparison function itself is called with two arguments which are two elements of the array.   
It then needs to return the following:
- a negative number if the first argument should be sorted before the second
- a positive number if the first argument should be sorted after the second
- 0 if the order of the elements should stay the same


Sort the number. 
```js
// without the customized sorting: it is sorting the string, not the number value!
const arr = [10, 2, 30];

arr.sort();

arr;
>>> [10, 2, 30]

// the correct way
arr.sort((a, b) => a - b) // sort from small to big
arr.sort((a, b) => b - a) // sort from big to small
```

```js
const arr = [
  { name: 'Lydia', age: 7 },
  { name: 'Anne', age: 34 },
  { name: 'Holger', age: 59 },
];

// sort by lexicographical order
arr.sort((item1, item2) => {
  if (item1.name < item2.name) {
    return -1;
  }
  if (item1.name > item2.name) {
    return 1;
  }
  return 0;
});

// sort by age
arr.sort((item1, item2) => item1.age - item2.age)

// sort by age first, then name
arr.sort((item1, item2) => {
  if(item1.age == item2.age){
    if (item1.name < item2.name) {
    return -1;
  }
    if (item1.name > item2.name) {
    return 1;
  }
    return 0;
  }
  return item1.age - item2.age;}
)
```


### array.splice(start, deleteCount, item1, item2, ...)
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method returns an `array` containing the deleted elements.
```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```

``` js
// replace
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']

// add
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 0, 'one', 3); // => []
numbers;
// => [1, 'two', 'one', 3, 3, 'four']

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
-------------------------------------------
## Array.isArray()
The Array class has a method called Array.isArray() that checks if its argument is an array.
```js

Array.isArray([1, 2, 3])      // true
Array.isArray([])            // true

Array.isArray({})            // false
Array.isArray("hello")       // false
Array.isArray(123)           // false
Array.isArray(null)          // false
Array.isArray(undefined)     // false

```

# Comparison
Reference objects can be compared, but only by reference, not by value.
```js
[] == []   // false
{} === {} // false
```
Example: Implement the isNonEmptyArray function, that checks if a value is a `non-empty` array.
```js
export function isNonEmptyArray(value) {
    return Array.isArray(value) && value !== [] // this is wrong

}

// correct
export function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length >= 1

}
```