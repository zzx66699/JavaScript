# Command
## Normal comment
```js
// this is a normal comment

/* this is also a normal comment */
```

## JSDoc
```js
/**
 * @param {string} name
 * @returns {number}
 * @typedef {TYPE} Name
 */
```
Example:  

Translation is a {} object, it has 2 keys: translation and quality. 
```js
/**
 * @typedef {{ translation: string, quality: number }} Translation
 * /
```

TranslatableValues is a map like `Record<key, value>`.  
key is a string, value is the an array. The array contains null or the Translation object. 
```js
 /**
 * @typedef {Record<string, Array<null | Translation>>} TranslatableValues
 */

// An exmaple of TranslatableValues
const values = {
  title: [
    { translation: "Hello", quality: 0.9 },
    null
  ],
  description: [
    { translation: "World", quality: 0.8 }
  ],
  footer: [
    null,
    null
  ]
};

 ```
