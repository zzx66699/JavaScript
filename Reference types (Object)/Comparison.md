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