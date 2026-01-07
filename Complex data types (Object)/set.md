# set
A set is a list-like structure containing `unique` values, which can be primitives and/or object references. Unlike an array, a set's elements cannot be accessed by index.

## .add() - add elements to the set
A value cannot be added to a set if it is strictly equal to any of the set's elements.
```js
const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);

console.log(set.size);
//=> 3

set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);
//=> 4

set.add(77); 
console.log(set.size);
//=> 4  // not added because 77 is strictly equal to 77
```

## .delete() - mutable
``` js
const set = new Set(['a', 'b', 'c']);

set.delete('b'); 
>>> true   // return true means b is in set and delete succcessfully

set.has('b'); // false



## Create a new set == but not === to the original set
```js
const playlistNew = new set(playlist);
```

## Convert from / to an array
You can provide an array as an argument when creating a set, and the array's values will become the values of the set, also removing the duplicate values.
```js
const array = [1, 5, 4, 1];
const set = new Set(array); // the set's values become [1, 5, 4]

console.log(set.size);
//=> 3
```

To convert a set to an array, you can use Array.from(), which converts an iterable such as a set or a map to an array.
```js
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

const array = Array.from(set);
console.log(array);
//=> [1, 2, 3, 4]

```

