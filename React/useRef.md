# useRef
Refs are similar to state, except:
* You can mutate them directly
* Changing them doesn't not cause re-render
* They are often used for accessing DOM nodes without needing to assign id to elements
```jsx
    const recipeSection = React.useRef(null)
    console.log(recipeSection)
```