## Local storage
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


## UUID
```js
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4());
```