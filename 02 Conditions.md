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

## Logical operators (!, &&, ||) 
```js
// or
true || false   // true

// and
true && false   // false
```



## switch()
It is a statement that examines a value for a match against many case clauses. More efficient than many "else if" statements. 
The `break` statements are needed because by default all cases are "fallthrough" in JavaScript. Without break, it will have 2 outputs: the correct one and the default value.
```js
// case A || B is incorrect
    case "A":
    case "B":
        ....

```
Example: 
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
    case "D":
        console.log("You passed ... barely")
        break;
    case "F":
        console.log("Your FAILED!")
    default:
        console.log(grade, "is not a letter grade!")

}
```

```js
let grade = 90;

switch(true){
    case grade >= 90:
        console.log("You did well!");
        break;
    case grade >= 80:
        console.log("You did good!")
        break;
    case grade >= 70:
        console.log("You did okay!")
        break;
    case grade >= 60:
        console.log("You passed ... barely")
        break;
    case grade >= 0:
        console.log("Your FAILED!")
        break;
    default:
        console.log(grade, "is not a letter grade!")

}
```

