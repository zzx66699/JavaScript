# Promise
A Promise represents a value that will be available later. It is an object that stands for a future result of an async operation.

## 3 states
```
Time →
┌───────────────┐        ┌───────────────┐
│   pending     │ ───▶   │ fulfilled     │
│  (in progress)│        │  (success)    │
└───────────────┘        └───────────────┘
          │
          ▼
   ┌───────────────┐
   │   rejected    │
   │   (failure)   │
   └───────────────┘
```

### pending — the starting state
```js
const promise = fetch("/data");
```
At this moment:
- The asynchronous operation has started
- The result is not available yet
- The Promise is pending

The Promise represents a `future result`, not the result itself.

### Resolution — only one possible outcome

A Promise can leave pending in exactly one way, and this is irreversible.


#### Case A: Success → fulfilled
```js
fetch("/data").then(data => {
  // runs only if the Promise is fulfilled
});
```
- The async operation completes successfully
- The Promise becomes fulfilled
- It now has a resulting value

#### Case B: Failure → rejected
```js
fetch("/data").catch(error => {
  // runs only if the Promise is rejected
});
```
- The async operation fails
- The Promise becomes rejected
- It now has a failure reason (error)

### Final state rule 
Once a Promise leaves pending, it is settled forever.  
- It cannot change from fulfilled to rejected
- It cannot change from rejected to fulfilled
- It can never go back to pending

.then, .catch, and .finally on the timeline
```js
fetch("/data")
  .then(result => {
    // fulfilled
  })
  .catch(error => {
    // rejected
  })
  .finally(() => {
    // always runs
  });
```

## Same timeline using async / await
```js
async function loadData() {
  try {
    const data = await fetch("/data");
    // fulfilled
  } catch (error) {
    // rejected
  } finally {
    // always runs
  }
}
```

await does not change how Promises work — it only makes the code look synchronous.
