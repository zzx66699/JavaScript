# Regular Expressions
A Regular Expression (or Regex) is a sequence of characters that we can use to target and manipulate certain elements in strings. 
- Search for a text in a string
- Replace substrings in a string
- Extract information from a string

## Create
A regular expressions is mostly written in the format `/pattern/modifiers`.
We have two ways of creating a regular expression. In both cases, JavaScript is creating an object out of the regex.   

It is recommended to use immutable patterns with the literal as default.
Regular Expression Literal: 
```js
const regex = /[a-z]/;
```

Constructor RegExp: can be used for cases where the regex will change or we don't know it yet (like an input). 
```js
const regex = new RegExp('[a-z]');
```


## Flags
Regular expressions have optional superpowers called flags that allow for additional features.

Some of the widely used are:
```
/g - Global Search
/i - Case Insensitive
/m - Multiline Search
```
The g character allows us to parse all possible matches within a string. Without this feature, JavaScript would have extracted only the first Home match.
```js
const re = /home/gi;
const str = 'Home, sweet home.';
const myArray = str.match(re);
console.log(myArray);

=> // ["Home", "home"]
```

When using the RegExp constructor, the syntax of adding flags is different.
```js
let regex = /[a-z]/gi; // literal notation
let regex = new RegExp('[a-z]', 'gi'); // constructor with string pattern as first argument
let regex = new RegExp(/[a-z]/, 'gi'); // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
```

## Quantifier
| quantifier      | name              | meaning      |
| ------- | ------------------ | -------- |
| `+`     | one or more        | 1 or more   |
| `*`     | zero or more       | 0 or more   |
| `?`     | zero or one        | 0 or 1  |
| `{n}`   | exact quantifier   |  n  |
| `{n,}`  | range quantifier   | at least n    |
| `{n,m}` | bounded quantifier | from n to m   |


## Anchors
| symbol | Meaning    |
| ---- | ----- |
| `^` | Start of the string |
| `$` | End of the string |


## Escape character
The character is treated as a normal character (plain string), no special meaning like a syntax symbol.
```js
\+  // The plus sign is escaped.
\(
\)
\.
```

## Capturing group
one () is one capturing group.
```js
const str = '123-456-789';
const result = str.match(/(\d{3})-(\d{3})-(\d{3})/);

console.log(result[0]); // '123-456-789'（the whole regular expression）
console.log(result[1]); // '123'
console.log(result[2]); // '456'
console.log(result[3]); // '789'
```



## reg.test()
The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
```js
const str = 'It is difficult to test if you have a virus';
const result = /virus$/.test(str);    // virus$ - End with virus

console.log(result);

// => true
```



## .match(reg)
With the match() method, we get a useful `array` whose contents depend on the presence or absence of the found matches.
In this way, we are able both to search and to extract information from any string.
```js
const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';
const regex1 = /someone/;
const regex2 = /happy/;

funnyQuote.match(regex1);
// => ["someone", index: 11, input: "If you see someone crying, ask if it is because of their haircut.", groups: undefined]

funnyQuote.match(regex2);
// => null
```
When the Global Search flag /g is present, instead of getting the only match alongside useful information such as the index or input, the method returns all of the occurances displayed in the array:
```js
const funnyQuote =
  'If you see someone crying, ask if it is because of their haircut.';

const regex3 = /if/gi;

funnyQuote.match(regex3);
// => ["If", "if"];
```

## .replace()
The replace() method in JavaScript allows us to search for a value within a given string, and replacing it with a desired new value.
```js
string.replace(searchValue, newValue);
```
The pattern for searching the substitution can be a single string, or a regular expression.
```js
let string = 'I like dogs!';
let result = string.replace('dogs', 'cats');

let string = 'I would love to travel to China';
let result = string.replace(/China/g, 'Hawaii');
```
Moreover, we can apply a function on the replacement position in order to make additional changes to each value.
```js
let text = 'Say hello to the chatbot.';
let result = text.replace(/chatbot|hello/gi, function (word) {
  return word.toUpperCase();
});
// => "Say HELLO to the CHATBOT"
```


## .split()
In this way, we will be using regex in order to divide a given string by recognizing a pattern, e.g. str.split(/[,.\s]/). This pattern will be used as the separator. We will get an `array`.
```js
const str = 'hello,user.how are.you';

const result = str.split(/[,.\s]/);

console.log(result);
// => ['hello', 'user', 'how', 'are', 'you']
```

