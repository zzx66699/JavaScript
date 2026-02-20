# Form
We use `htmlFor` as the for attribute in HTML
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## Form submit function
```jsx
<form onSubmit={handleSubmit} className="add-ingredient-form">
```

## Form prevent default
Put the function in the **form element** 
```jsx
export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
```

## Form action
With action, it automatically help us  
1. prevent default event  
2. get the formData
3. reset the form

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

    function signUp(formData) {
      const email = formData.get("email")
      console.log(email)
    }

// pass a function to the action attribute    
    return (
      <section>
        <h1>Signup form</h1>
        <form action={signUp}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
          <button>Submit</button>
          
        </form>
      </section>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

## Radio, dropdown, textArea - formData.get
get will give us a `value`.
```jsx
function signUp(formData) {

    const employmentStatus = formData.get("employmentStatus")

    console.log(employmentStatus)
    >>> full-time
  }
```
## Checkbox - formData.getAll
If we use get, we will only get 1 value.  
getAll will give us an `array` of all the selected values.
```jsx
function signUp(formData) {

    const dietaryRestrictions = formData.getAll("dietaryRestrictions")

    console.log(dietaryRestrictions)
    >>> ['kosher', 'vegan', 'gluten-free']
  }
```

## Object.fromEntries
- It will give us an `object` of all the values from the form.  
- If we have a **checkbox** in the form, we need to separately get the value of it and combine it with the value object. 
```jsx
function signUp(formData) {
    const data = Object.fromEntries(formData)
    // dietaryRestrictions is an array
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const allData = {
      ...data,
      // the key will become dietaryRestrictions automatically, and value become the array
      // same as dietaryRestrictions: dietaryRestrictions
      dietaryRestrictions
    }
    console.log(allData)
}
```