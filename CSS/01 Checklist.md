## viewport - adjust the width for different devides
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## box-sizing
When we add the padding or margin to the element, it makes the whole element bigger.
It also happens if we set with percentage, like 100%. The div will stretch out of the viewport. 
**Always set the box-sizing in the universal selector using an asterisk.** It works throughout the page.
```css
*, *::before, *::after {
    box-sizing: border-box;    
}
```
Once we add the box-sizing, the height and weight is set for the `whole div`, not the inside content!

## form doesn't inherit the font family
```css
input {
    font-family: inherit;
}
```