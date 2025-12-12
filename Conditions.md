## if, else if, else statement
```js
let age = 21;

if(age >= 18){
    console.log("You are an adult!");
}
else if(age <= 0){
    console.log("YOU HAVEN'T BEEN BORN YET!")
}
else{
    console.log("You are a child!");
}
```
```js
let online = True

if(online){
    console.log("You are online!")
}
else{
    console.log("You are offline!")
}
```

## switch()
It is a statement that examines a value for a match against many case clauses. More efficient than many "else if" statements
```js
let grade = "C";

switch(grade){
    case "A":
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
