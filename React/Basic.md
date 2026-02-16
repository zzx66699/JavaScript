# Basic

## The process of JSX
1. turn the JSX syntax into calls to react.createElement
2. createElement function is turning them into javascript object 
3. then React is able to interpret it and turn it into real dom nodes under the hood. 
```js
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

// react change this into the createElement syntax which creates a js object under the line. 
const reactElement = <h1>Hello from JSX!</h1>
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

