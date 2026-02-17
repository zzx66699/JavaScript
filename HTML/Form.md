# Form

## Elements
| Tag Name        | Meaning / Use                                                 | Attributes       | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| `<label>`       | Label for a form element.                                     |
| `<button>`      | Clickable button.                                             | type
| `<input>`       | Input field (text box, checkbox, etc.).                       | type name placeholder aria-label value  id accept="image/png, image/jpg"
| `<select>` and `<option>` and `<optgroup>`      | Dropdown buttons.                       | value selected size multiple
| `<textarea>`   | Long inputs.                   | 

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
    name="city"
    placeholder="London"
>
```
If there's no label, we should give it an aria-label
```html
<input 
    type="text"
    name="ingredient"
    placeholder="e.g. oregano"
    aria-label="Add ingredient"
/>
```

## Submit button
2 ways of making the submit button:   
- a special input type   
```html
<form>
    <input type="submit">
</form>
```
- use a regular HTML button 
```html
<form>
    <!-- any button that is inside of the form tag is taken as the submit button -->
     <!-- type="submit" is not neccessary, but it is good for clarity -->
    <button type="submit">submit</button>
</form>
```

## Reset button 
```html
<form>
    <button type="reset">
        Reset
    </button>
</form>
```

## Decline button
```html
<form>
    <button type="button">
        Decline
    </button>
</form>
```

## Checkbox
```html
<div>
    <label for="accept-terms">
        I accept these terms and conditions
    </label>
    <input type="checkbox" id="accept-terms">
</div>
```
We can check if the checkbox is checked
```js
const acceptTerms = document.getElementById('accept-terms')

continueBtn.addEventListener('click', function(){
    if (acceptTerms.checked){...}
})
```

## Radio buttons
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

## Dropdown button
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
We can get the value of the currently selected dropdown option
```js
const superPowers = document.getElementById("superpowers")

superPowers.addEventListener("change", () => {
    console.log(superPowers.value)
})
```

## Textarea
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
We can get the textarea value, same as the input element. 
```js
const talkBtn = document.getElementById('talk-btn')
const chatInput = document.getElementById('chat-input')

talkBtn.addEventListener('click', function(){
    console.log(chatInput.value)
})

```
