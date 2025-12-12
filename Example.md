## .innerHTML - Change the HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- variable -->
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>

    <script src="index.js"></script>
</body>
</html>
```

```js
let firstName = "Jean";
let age = 26;
let student = false;

// string concatenation
document.getElementById("p1").innerHTML = "Hello " + firstName; // /innerHTML to edit the inner HTML
document.getElementById("p2").innerHTML = "You are " + age + " years old"; 
document.getElementById("p3").innerHTML = "Enrolled " + student;
```

## Subscribe checkbox
```html
<body>
    <label for="myCheckBox" id="labelText">Subscribe</label>
    <input type="checkbox" id="myCheckBox"><br>

    <button type="button" id="submitButton">Submit</button>
<body>
```
```js
    const myCheckBox = document.getElementById("myCheckBox").checked
document.getElementById("submitButton").onclick = function(){
    if(myCheckBox){
        console.log("You are subscribed!")

    }
    else{
        console.log("You are not subscribed!")

    }
}

```
## Input userName via HTML textbox
```html
<body>
    <!-- user input -->
    <label id="myLabel">Enter your name:</label><br>
    <input type="text" id="myText"><br>
    <button type="button" id="myButton">Enter</button>

    <script src="index.js"></script>
</body>
```
```js
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}