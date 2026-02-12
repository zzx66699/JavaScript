# CSS

## element.style.property - to change the css
```css
.answer{
    display: none;
}

.question{
    background-color: white;
}
```
```js
const answer = document.getElementById('answer')
const revealBtn = document.getElementById('reveal-btn')
const question = document.getElementById('question')

revealBtn.addEventListener('click', function(){
//  element.style.property
    answer.style.display = 'block'
//                 change the dash property to camel case
    question.style.backgroundColor = '#68e1fd'
})
```

## classList
### .toggle()
```html
<div class="container reverse" id="container">
    <div class="palette-section blue-1"></div>
    <div class="palette-section blue-2"></div>
    <div class="palette-section blue-3"></div>
    <div class="palette-section blue-4"></div>
    <div class="palette-section blue-5"></div>
</div>
<button id="sort-btn">Sort by shade</button>
```

```css
.container {
    display: flex;
}

.reverse {
    flex-direction: row-reverse;
}
```

```js
const sortBtn = document.getElementById("sort-btn")
const container = document.getElementById("container")

sortBtn.addEventListener("click", function(){
    //                          the class that we want to toggle on and off
    container.classList.toggle("reverse")
})
```

### .add() and .remove()
```html
<div class="container">
    <h1>Messages 📩</h1>
    <div class="message unread">
        <div class="from" id="message-from-1">Stevie Wonder</div>
        <div class="message-text" id="message-text-1">I just wrote to say I love you❤️</div>
        <div class="date" id="message-date-1">28 Aug</div>
    </div>
    <div class="message unread">
        <div class="from" id="message-from-2">Arnie</div>
        <div class="message-text" id="message-text-2">Hasta la Vista Baby! 😎</div>
        <div class="date" id="message-date-2">27 Aug</div>
    </div> 
    <div class="message unread">
        <div class="from" id="message-from-3">The Queen</div>
        <div class="message-text" id="message-text-3">One is not amused 👑</div>
        <div class="date" id="message-date-3">23 Aug</div>
    </div>
    <div class="message unread">
        <div class="from" id="message-from-4">James Bond</div>
        <div class="message-text" id="message-text-4">Casino night tonight! 🍹</div>
        <div class="date" id="message-date-4">20 Aug</div>
    </div>
</div>
```

```css
.unread {
    background: blue;
}

.read {
    background: green;
}

```

```js
document.addEventListener('click', function(e){
    document.getElementById(e.target.id).parentElement.classList.remove('unread')
    document.getElementById(e.target.id).parentElement.classList.add('read')
})
```

