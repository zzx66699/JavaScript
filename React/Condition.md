## Conditional rendering: &&
- When you want to either display something or NOT display something.  
- if props.setup is false, the whole line is taken as {false}, and React will interpret it as nothing will be rendered in this spot.
```jsx
export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}
```

## Ternary
- When you need to decide which of 2 things to display
- Put `null` as the alternative-expression.
```jsx
return (
    <div>
        {props.setup ? <h3>{props.setup}</h3> : null}
        {isShown ? <p>{props.punchline}</p> : null}
        <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
        <hr />
    </div>
)
```

## If condition
- if you need to decide between > 2 options, use if...else if...else conditional or maybe a `switch` statement.

```jsx
import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])


    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

    return (
        <div>
            <h1>{determineText()}</h1>
        </div>
    )
}

```