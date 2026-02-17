# Basic

## The process of JSX
1. turn the JSX syntax(JSX elements) into calls to react.createElement  
2. createElement function is turning them into **javascript object**   
3. then React is able to interpret it and turn it into real dom nodes under the hood.   

```jsx
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

React can't render an regular object, but it can render an `array` of jsx element.
```jsx
export default function App() {
    const ninjaTurtles = [
        <h2>Donatello</h2>, 
        <h2>Michaelangelo</h2>,
        <h2>Rafael</h2>,
        <h2>Leonardo</h2>
    ]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}
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

