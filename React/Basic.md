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