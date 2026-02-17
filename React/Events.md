## Add eventListener
```jsx
function App() {
    return (
        <main className="container">
        <img
            src="https://picsum.photos/640/360"
            alt="Placeholder image from Picsum"
        />
        <button onClick={function() {console.log("Clicked!")}}>Click me</button>
        </main>
    )
}
```
Or we can put the function ahead of the html parts:  
- **No parenthesis** otherwise the function will run immediately 
- We should pass the contents of the function or the functionality to the button
```jsx
function App() {

    function handleClick() {
        console.log("I was clicked!")
    }
    
    return (
        <main className="container">
        <img
            src="https://picsum.photos/640/360"
            alt="Placeholder image from Picsum"
        />
        <button onClick={handClick}>Click me</button>
        </main>
    )
}
```

## Handle functions
https://react.dev/reference/react-dom/components/common
### MouseEvent handler function 
```JSX
<div
    onClick={e => console.log('onClick')}
    onMouseEnter={e => console.log('onMouseEnter')}
    onMouseOver={e => console.log('onMouseOver')}
    onMouseDown={e => console.log('onMouseDown')}
    onMouseUp={e => console.log('onMouseUp')}
    onMouseLeave={e => console.log('onMouseLeave')}
/>
```



