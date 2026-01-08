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