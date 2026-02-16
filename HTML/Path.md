## Relative path syntax
### Look in the current directory
```html
<img src="cat.png">

<img src="image/cat.png">

<!--  add an dot slash do the same thing-->
<img src="./image/cat.png">
```

### Start from the parent directory of the current file
```html
<img src="../image/cat.png">
```
```css
/* go back to 2 levels */
.image-div {
    background-image: url('../../images/dog.jpg');
}

```

### Start from the project root directory
```html
<img src="/image/cat.png">
```