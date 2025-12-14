# Closures
```js
function makeCounter(){
    let counter = 0;

    return function(){
        count ++;
        return count;
    };

}

const counter = makeCounter() // the counter here is atucally the whole function(){....} after return 

counter()
>>> 1

counter()
>>> 2

// when we run counter(), the let counter = 0 will not run. 
// the count is stored. so the number is increasing. 
```