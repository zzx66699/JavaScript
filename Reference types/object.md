# Object
only the type of the key is restricted: it has to be a `string`

## Creating an Object
You create an object using curly brackets. You can also directly include some entries. For that, state the key first, followed by a colon and the value.
```js
const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: 'Hello World',
  useGreeting: true,
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
  fruits: ['melon', 'papaya'],
  addNumbers: function (a, b) {
    return a + b;
  }, // The trailing comma after the last entry is optional in JavaScript.
};
```

keys are not wrapped in quotation marks although they are supposed to be strings. This is a short-hand notation. If the key follows the naming rules for a JavaScript identifier, you can omit the quotation marks. For keys with `special characters` in the name, you need to use the usual string notation.
```js
const obj = {
  '1keyStartsWithNumber': '...',
  'key/with/slashes': '...',
  'key-with-dashes': '...',
  'key with spaces': '...',
  '#&()[]{}èä樹keyWithSpecialChars': '...',
};
```

## Retrieving a Value
There are two ways to retrieve the value for a given key, dot notation and bracket notation.
```js
const obj = { greeting: 'hello world' };

obj['greeting'];
// => hello world

// Using the dot notation as a shorthand has the same restriction as omitting the quotation marks. It only works if the key follows the identifier naming rules.
obj.greeting;
// => hello world

// Bracket notation also works with variables.
const key = 'greeting';
obj[key];
// => hello world

```

## Adding or Changing a Value
You can add or change a value using the assignment operator =. Again, there are dot and bracket notations available.
```js
const obj = { greeting: 'hello world' };

obj.greeting = 'Hi there!';
obj['greeting'] = 'Welcome.';

obj.newKey1 = 'new value 1';
obj['new key 2'] = 'new value 2';

const key = 'new key 3';
obj[key] = 'new value 3';
```

## Deleting an Entry
You can delete a key-value pair from an object using the delete keyword.
```js
const obj = {
  key1: 'value1',
  key2: 'value2',
};

delete obj.key1;
delete obj['key2'];
```

## .hasOwnProperty() - Checking Whether a Key Exists
You can check whether a certain key exists in an object with the hasOwnProperty method.
```js
const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
```

## Looping Through an Object
Objects are not designed to be ordered collections. To avoid subtle errors, you should always assume the for...in loop visits the keys in an `arbitrary` order. 
When iterating over a plain object (for example with for...in or Object.keys()), JavaScript follows this order:
- Integer keys (also called array index–like keys): Iterated in ascending numeric order
- String keys: Iterated in the order they were inserted
- Symbol keys: Iterated in insertion order

```js
const obj = {
  b: 1, 
  1: 'one', 
  a: 2, 
  0: 'zero'
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// 0
// 1
// b
// a

```

## Object destructure
```js
const weather = {
  sun: '☀️',
  sun_behind_small_cloud: '🌤️',
  sun_behind_cloud: '⛅',
  cloud: '☁️',
  cloud_with_lightning: '🌩️',
};

// syntax sugar
const { sun, cloud, cloud_with_lightning: thunder } = weather;

// equals to
const sun = weather["sun"];
const cloud = weather["cloud"];
const thunder = weather["cloud_with_lightning"];


sun;
// => '☀️'

cloud;
// => '☁️'

thunder;
// => '🌩️'
```

### Rest operator
rest operator can be used to collect one or more object properties and store them in a single object.
```js
const { street, ...address } = {
  postalCode: '11011',
  street: 'Platz der Republik 1',
  city: 'Berlin',
};
street;
// => 'Platz der Republik 1'
address;
// => [  postalCode: '11011',
//       city: 'Berlin']
```

### Spread operator
It expands an object into a list of elements
```js
let address = {
  postalCode: '11011',
  city: 'Berlin',
};
address = { ...address, country: 'Germany' };
// => {
//   postalCode: '11011',
//   city: 'Berlin',
//   country: 'Germany',
// }
```