
```jsx
export default function Joke(props) {
    return (
        <>
            // if props.setup exists, then ...
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}
```