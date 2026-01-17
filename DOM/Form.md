# Form

## Common tags
| Tag Name        | Meaning / Use                                                 | Attributes       | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| `<label>`       | Label for a form element.                                     |
| `<button>`      | Clickable button.                                             | type
| `<input>`       | Input field (text box, checkbox, etc.).                       | type name placeholder  id aria-label

## Common validation attributes
| Attributes        | Meaning / Use                                                 |    input type | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| required       |                               |
| minlength      |   minlength="8"                                   |  text
| maxlength      |                       |  text
| max      |                       |  number
| min      |    min="21"                   |  number
|pattern| pattern="[a-zA-Z0-9]+" <br>pattern="[a-zA-Z]{3}"


## Accessibility
always add a label and placeholder for the input form
```html
<!--   associate a label to the element id  -->
<label for="city">City</label>

<!-- name is to reference form data after a form is submitted. -->
<input 
    type="text" 
    id="city" 
    name="city"
    placeholder="London"
    class="city" 
    required
>
```

## 1. Submit button
2 ways
```html
<form>
    <input type="submit">
</form>
```
```html
<form>
    <!-- any button that is inside of the form tag is taken as the submit button -->
     <!-- type="submit" is not neccessary, but it is good for clarity -->
    <button type="submit">submit</button>
</form>
```
### Reset button 
```html
<form>
    <button type="reset">
        Reset
    </button>
</form>
```
### Decline button
```html
<form>
    <button type="button">
        Decline
    </button>
</form>
```

## 2. type="radio" - Radio buttons
Use `<fieldset>` and `<legend>` tags to group the set and provide the context for screen reader users
```html
<fieldset class="radio-container">
    <legend>Do you have cats?</legend>
    <label for="yes">Yes</label>
    <!-- giving the radios the same name can create a radio group in which only one choice can be selected -->
    <input 
        type="radio" 
        name="cats"
        id="yes"
        value="name"
        class="contact-radio">

    <label for="no">No</label>
    <input 
        type="radio" 
        name="cats"
        id="no"
        value="no"
        class="contact-radio">
</fieldset>
```

## 3. type="checkbox" 
```html
<div>
    <label for="accept-terms">
        I accept these terms and conditions
    </label>
    <input type="checkbox" id="accept-terms">
</div>
```

```js
const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')

continueBtn.addEventListener('click', function(){
    // check if the checkbox is checked
    if (acceptTerms.checked){
        console.log("Terms accepted!")    
    }
    else{
        console.log("Terms refused!")         
    }
})
```


## Get input value
The value is always in the format of `string`!
```js
const input = document.getElementById("input");
               // value property
console.log(input.value);
```

## Clear input value
```js
const input = document.getElementById("input");
    // value property
input.value = "";
```


## preventDefault 
To prevent getting a query string in the URL.
```html
<!-- give the whole form an id -->
<form id="form">
    <input type="text">Name
    <input type="email">Email
    <input type="number">Age
</form>
```
```js
const form = document.getElementById("form")

// e represents the event, which is submit 
// use form as the element, not the submit button
form.addEventListener("submit", function(e){
    e.preventDefault()
})
```

## FormData - return an object holding all the forms data
```js
const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()

    const loginFormData = new FormData(loginForm)
    console.log(loginFormData)
    >>> FormData {}

    // use FormData.get(key) to get the value
    console.log(loginFormData.get("name"))
    >>> Jean
})
```


