# Local storage
Persist the data cross page refresh. You can only store  `string`!
```js
          // store   key     value
localStorage.setItem("name", "Jean");
                         // get the item
const name = localStorage.getItem("name");
console.log(name)
>>> name

        // clear the storage
localStorage.clear()
console.log(name)
>>> null
```

## Convert between string and array
```JS
let myLeads = `["www.awesomelead.com"]`
// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.baidu.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
```