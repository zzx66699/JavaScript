# Text
## underline
```css
a {
	text-decoration:underline dotted;
}
```

## text-transform
```css
.headline {
     text-transform: uppercase;  /* lowercase, capitalize */
}
```

## font-size
### the rem unit - root em
We use `rem` for font-size to avoid the `compounding issue`.
1rem = 16px
```css
p {
      font-size: 1rem;
}
```
Only if we change the html font-size, 1rem will change  
```css
html {
    font-size: 20px;
}
```
### the em unit
A font-size value set in em is relative to the font size of the parent element.
If there's no font-size set for all the parents' elements, it will take `16px` as the default 1em.  

It is not commonly used because of the compounding issues.

## Links and buttons
- links are for navigation, go to another location.  
- Buttons are for interaction. (Open a model)  
You can style the link like a button.