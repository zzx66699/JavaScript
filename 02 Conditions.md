# Conditions
## if, else if, else statement
```js
let age = 21;

if (age >= 18) {
    console.log("You are an adult!");
} else if (age <= 0) {
    console.log("YOU HAVEN'T BEEN BORN YET!")
} else {
    console.log("You are a child!");
}
```

## Convert into Boolean 
The `if` statement evaluates the expression inside and coerces it into a boolean value. 
```js
let online = True

if (online) {
    console.log("You are online!")
}
else {
    console.log("You are offline!")
}
```

## Falsy value
```js
if (""){
  // will never run
}
```

## Comparison operators
```js
//Strict Equals	
// All numbers are floating-points, so this is different syntax for the exact same value.
1 === 1.0;     // true
5 === "5";     // false
// Not (strict) equals	
5 !== "5";     // true

// Loose equals - This is not recommended because it will automatically change the data type
5 == "5"       // true 
true == 1      // true 
"" == 0        // true 
null == undefined // true 
```


## Ternary operator
This operator is a short form for writing an if/else statement.   
The syntax is `condition ? consequent-expression : alternative-expression`.   
If the condition is truthy, left expression will be executed. Otherwise, the right expression will be executed.  

A common usage of ternary operator is to update the value of a variable depending on whether the condition is met.
```js
const grade = 95

console.log(`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`)

// => You have passed the exam.
```
### 3 situations
```js
const exerciseTimeMins = 40
let message = ''

if (exerciseTimeMins < 30) {
    message = 'You need to try harder!'
}
else if(exerciseTimeMins < 60) {
    message = 'Doing good!'
}
else {
    message = 'Excellent!'
} 

// equals to 
const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
    : exerciseTimeMins < 60 ? 'Doing good!' 
    : 'Excellent!'

console.log(message)
```
### Don't assign any value
```js
const likeIconClass = tweet.isLiked ? 'liked' : ''
```


## Logical operators (!, &&, ||) 
```js
// or
true || false   // true

// and
true && false   // false
```
### Short-circuiting - Use logical operator to assign value to a variable
```js
const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe'
}

console.log(`${jobHunter.name}'s work location is ${jobHunter.jobSearchArea || 'Worldwide'}`)
```
```js
const user = {
    userName: 'Tom',
    // role: 'admin',
}
// it works like an if considtion: if the left is true, then the right will be executed
user.role === 'admin' && console.log('Dashboard Displayed')
```


## switch()
It examines a value against many case clauses.   
It's more efficient than many "else if" statements because we don't need to write `if variable = xxx` again and again. 

Without `break`, it will have 2 outputs: the correct one and the default value.

```js
let grade = "C";

switch(grade){
    case "A":   // if grade = "A"
        console.log("You did well!");
        break; 
    case "B":
        console.log("You did good!")
        break;
    case "C":
        console.log("You did okay!")
        break;
    default:
        console.log(grade, "is not a letter grade!")
}
```


