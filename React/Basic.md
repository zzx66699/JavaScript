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

## react & react-dom 

| Library         | 负责什么                          |
| --------- | ----------------------------- |
| react     | 组件、hooks、createElement、虚拟 DOM |
| react-dom | 把虚拟 DOM 渲染成真实 DOM             |

### react
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

### react-dom
```jsx
// react-dom/client(package) doesn't have default export, so we need to use a named export
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


## ClassName
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

## Pass data 
- The data can only be passed from the **parents** component to the child component. No child to child (between siblings). No child to parents. 
- In this example, since we got the `state` userName in the Header component, the Body component can never get that state data. 

```jsx
// App.jsx
import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    return (
        <main>
            <Header />
            <Body />
        </main>
    )
}
```
```jsx
// Header.jsx
import React from "react"
import avatar from "./icons/user.png"

// We get the state here
export default function Header() {
    const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}
```
```jsx
// Body.jsx
import React from "react"

export default function Body() {
    return (
        <section>
            <h1>Welcome back, ___!</h1>
        </section>
    )
}
```
Instead, we should move the state to the parent component. 
```jsx
// App.jsx
import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    const [userName, setUserName] = React.useState("Bob")
    
    return (
        <main>
            <Header userName={userName} />
            <Body userName={userName} />
        </main>
    )
}
```

## React component to render markdown
https://www.npmjs.com/package/react-markdown/v/8.0.6#use 
```jsx
import ReactMarkdown from 'react-markdown'
<ReactMarkdown># Hello, *world*!</ReactMarkdown>
```

