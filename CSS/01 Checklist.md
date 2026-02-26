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
input, button {
    font-family: inherit;
}
```

## Common design
### box-shadow
```css
/* for the header section */
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);

/* for an input box */
box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
```

### Body background image
```css
body {
    background: no-repeat center center fixed; 
    background-size: cover; 
}
```

### text-shadow to stand the text out from the white background
```css
text-shadow: 0px 0px 20px #aaaaaa;
```