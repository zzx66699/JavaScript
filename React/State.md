# State
If the value of a **local variable** changes, no code will be re-run.   
When the value of `state` changes and the setter function is called, React will re-render the component. However, **simply modifying the state value directly** doesn't always trigger the re-render in React. 
```jsx
import React from "react"

export default function App() {

  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
  
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    // We'll work on this next, nothing to do here yet.
    myFavoriteThings.push("Test")
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}
```

## Import 
There are 2 ways to import useState: 
### Import the default export and give it a name as React
```jsx
import React from "react"

React.useState()
```
- This is the React variable
```jsx
const React = {
  useState: function() { ... },
  useEffect: function() { ... }
}
```

### Import a destructured useState hook from the React library 
```jsx
import { useState } from "react"
```


- Destructuring means we 
```jsx
const obj = { name: "Tom", age: 18 }
const { name } = obj
```
- So we are doing the same thing
```jsx
const { useState } = React
```
- That is how we get 
```jsx
import { useState } from "react"
```

## useState()
Without passing in any parameter, it will return an `array`, which the 1st element is undefined, and 2nd element is a function. 
```jsx
import React from "react"
const result = React.useState()
console.log(result)
>>> [undefined, ƒ()]
```
When we pass in a value when calling the useState, it provides an **initial state**. 
```jsx
import React from "react"
const result = React.useState("yes")
console.log(result)
>>> ["yes", ƒ()]
```

## useState() array destructure
```jsx
import React from "react"

export function App() {
    // Theoretically We can give whatever name we want to the array destructuring element, but there's a convention
    const [isImportant, setIsImportant] = React.useState("Yes")

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{isImportant}</button>
        </main>
    )
}
```

## Change state
```jsx
import React from "react"

export function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")

     // Run the function will update the State to the new value and re-run the code
    // However, If we just call the function here, it will run again and again ❌ 
    setIsImportance("Definitely!")
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{isImportant}</button>
        </main>
    )
}

```
The correct way of doing it ✅
```jsx
import React from "react"

export default function App() {
    let [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick() {
        setIsImportant("Heck yes")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}
```

## Update a state with callback function
We have 2 options for what you can pass in to a `state setter function`: 
1. Pass the new version of state that we want to use as the replacement for the old version of state. -    Whenever we don't really care about (or need) the old value, we simply want to set a new value.  
2. Pass a callback function. - Must `return` what we want the new value of state to be. If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function. This callback function will `receive the old value` of state as its `parameter`, which you can then use to determine your new value of state.

```jsx
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)


    function add() {
        // setCount(count + 1)
        setCount(prevCount=> prevCount + 1)
    }

    function subtract() {
        // setCount(count - 1)
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
```

## Array state
```jsx
import React from "react"

export default function App() {
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
    
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁"]

    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    // We should't use the push function because we don't want to change the prevArray!
    function addFavoriteThing() {
        setMyFavoriteThings(prevFavThings => [
            ...prevFavThings, 
            allFavoriteThings[prevFavThings.length]
        ])
    }
    
    return (
        <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">
            {thingsElements}
        </section>
        </main>
    )
}
```

## Object state
```jsx
import React from "react"

const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
})

function toggleFavorite() {
    setContact(prevContact => {
        return {
            ...prevContact, 
            isFavorite: !prevContact.isFavorite
        }
    })
}
```