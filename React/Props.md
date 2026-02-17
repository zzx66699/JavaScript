# Props
Use {} when we want to get into a javasript expression  
We can pass neccessary props to the component when creating a new instance of the component
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
            <Contact name="Jean" location="Singapore"/>
            <Contact name="David" location="Netherlands"/>
            <Contact name="John" location="China"/>
        </main>
    )
}
```
```jsx
// Index.jsx
import { createRoot } from "react-dom/client"
import App from "./App"

createRoot(document.getElementById("root")).render(<App />)

// It will log out objects with all the keys and values that we passed in when calling the component
>>> {name: "Jean", location="Singapore"}
>>> {name: "David", location="Netherlands"}
>>> {name: "John", location="China"}
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
    <Car year={1969} 
        comments={[
        {author: "", text: "", title: ""},
        {author: "", text: "", title: ""}
        ]}
        img={{ 
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji" 
        }}
    />
);
```

## Pass on object to props
```jsx
export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}
```
```jsx
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    // entry is a property of props, and img is a property of entry
                    src={props.entry.img.src} 
                    alt={props.entry.img.alt}
                />
            </div>
        </article>
    )
}
```

## Spread object
```jsx
export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                // equals to 
                // img={entry.img}
                // location={entry.location}
                // ...
                {...entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}
```