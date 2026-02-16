# Props

Use {} when we want to get into a javasript expression
```jsx 
// Contact.jsx
export default function Contact(props) {
    console.log(props)
    return (
        <article className="contact-card">
            <h3>{props.name}</h3>
        </article>
    )
}
```
```jsx 
// App.jsx
import Contact from "./Contact"
export default function App(props) {
    return (
        <main>
            <Contact name="Jean"/>
            <Contact name="David"/>
            <Contact name="John"/>
        </main>
    )
}
```

## Destructure props
```jsx
export default function Contact({img, name}) {
    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
        </article>
    )
}
```
```jsx
import Contact from "./Contact"

export default function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
            />
        </div>
    )
}
```

## Different Data Types
Numbers has to be sent inside curly brackets to be treated as numbers:
```jsx
createRoot(document.getElementById('root')).render(
  <Car year={1969} />
);
```