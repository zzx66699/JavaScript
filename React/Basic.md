# Basic

## The process of parsing JSX
1. We write JSX syntax.
```jsx
<div>Hello</div>
```
2. Vite(build tool) turns the JSX syntax(JSX elements) into calls to react.createElement
```js
React.createElement("div", null, "Hello")
```
3. The browser javascript engine run the react.createElement, and react(createElement function) returns **javascript object** as Virtual DOM.
```js
{
  type: "div",
  props: {},
  children: "Hello"
} 
```
4. ReactDOM(library) reads that object and creates real DOM nodes.

5. The browser renders the real DOM.

## react-dom
```jsx
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<App />)
```
or another way
```jsx
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

const reactElement = <h1>Hello from JSX!</h1>

// Vite change jsx syntax into the createElement syntax which creates a js object under the line. 

console.log(reactElement)
>>> {type: 'h1', key: null, props: {children: 'Hello from JSX!'}, _owner: null, _store: {}}

root.render(
    reactElement
)
```

## react
```jsx
// From react(package)，take the default export，and assign it to a variable called React
import React from "react"

console.log(React)
// React is an object variable. 
>>> {
  createElement: f,
  useState: f,
  useEffect: f,
  ...
}
```
```jsx
// Theoretically, We can give it any name, but it is weird so we don't use it. 
import banana from "react" 
```

## return HTML
* Alway put the parent opening tag on the same line as the `return` 
```jsx
// ❌
return 
    <main>
    </main>

// ✅
return <main>
        </main>
```
* Or we can wrap up the HTML into a parenthesis
```jsx
return (
    <main>
    </main>
)
```

## Fragment
The Fragment will not be showned up in the root div. So it is sibling elements directly under the div section
```jsx
import { Fragment } from "react"

root.render {
    <Fragment>
        <header></header>
        <main></main>
    </Fragment>
}
```
We can also just skip the Fragment and use <> instead
```jsx
root.render {
    <>
        <header></header>
        <main></main>
    </>
}
```

### ClassName
Because React is turning React element into dom, and in vannila javascript we use `xx.ClassName.add()`, in JSX we should also use `className` instead of class
```jsx
function Header() {
    return (
         <ul className="nav-list">
    )

}
```
- `className=` is an attribute, not a JavaScript expression.
- Curly braces {} in JSX are only for JavaScript expressions (like variables, logic, or calculations).  
- Never put it in the {} like `{props.on ? className="on" : className=""}`
```jsx
export default function Pad(props) {
    console.log(props.on)
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : ""}
        ></button>
    )
}
```

## Styles
`camelCase` all the css attributes. 
```jsx
import React from "react"
import padsData from "./pads"

export default function App({ darkMode }) {
    const [pads, setPads] = React.useState(padsData)

    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }

    const buttonElements = pads.map(pad => (
        <button style={styles} key={pad.id}></button>
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
```




## Import image
If we are using vite, it will rearrange the code under the hood, compress all the code into a single file, and the structure of the folder may be different, so the relative path may not work.  
```jsx
import mrWhiskerson from "./images/mr-whiskerson.png"
function App() {
    return (
        <div className="contacts">
            <Contact
                img={mrWhiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
        </div>
    )
}
```

## Template string
Template string is a javascript expression, so we also need to wrap it up in a curly brackets
```jsx
aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}`}
```

## React component to render markdown
https://www.npmjs.com/package/react-markdown/v/8.0.6#use 
```jsx
import ReactMarkdown from 'react-markdown'
<ReactMarkdown># Hello, *world*!</ReactMarkdown>
```

