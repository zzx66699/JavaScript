# Form
Form elements don't inherit font-settings in css.

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
```js
const yesBtn = document.getElementById("yes")
//                    for checked radio, the event is `change`
yesBtn.addEventListen("change", function(){
    ...
})
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

## 4. Dropdown button
```html
<section class="container">
    <form>
        <label for="superpowers">Choose Your Superpower:</label>
        <!--                     how many items shown in the scroll bar without scroll -->
        <select id="superpowers" size="6">
            <optgroup label="physical">
                <option value="flight">Flight</option>
                <option value="invisibility">Invisibility</option>
                <option value="superStrength" selected>Super Strength</option>
            </optgroup>
            <optgroup label="psychological">
                <option value="telepathy">Telepathy</option>
                <option value="timeTravel">Time Travel</option>
                <option value="wisdom">Wisdom</option>
            </optgroup>
        </select>

        <button type="submit">Reveal My Superpower</button>
    </form>
</section>
```
```js
const superPowers = document.getElementById("superpowers")

//                          select the value action
superPowers.addEventListener("change", () => {
//                                     the value selected
    location.href = `./unit.html?unit=${unitSelect.value}`
})

```

## 5. textarea
```html
<div class="container">
    <textarea 
        placeholder="Ask me anything!" 
        id="chat-input"
    ></textarea>        <!-- need to keep the opening tag and closing tag together in one line -->
    <button id="talk-btn">Talk to me!</button>
</div>
```

```css
textarea{
    /* can't resize the text area */
    resize: none;
}
```

```js
const talkBtn = document.getElementById('talk-btn')
const chatInput = document.getElementById('chat-input')

talkBtn.addEventListener('click', function(){

    // same as the input, value property
    console.log(chatInput.value)
    chatInput.value = '' 
})

```

### Get input value
The value is always in the format of `string`!
```js
const input = document.getElementById("input");
               // value property
console.log(input.value);
```

### Clear input value
```js
const input = document.getElementById("input");
    // value property
input.value = "";
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


