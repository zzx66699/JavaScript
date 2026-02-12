# Type conversions
## Convert object values into an array
```js
const loginCredentials = {
    "rafidhoda": "BestPassword123",
    "shahrukhkhan": "InBigCitiesSmallThingsHappen",
    "jackblack": "ThisIsNotTheGreatestPasswordInTheWorld"
}

console.log(Object.keys(loginCredentials))
>>> ['rafidhoda', 'shahrukhkhan', 'jackblack']

console.log(Object.values(loginCredentials))
>>> ['BestPassword123', 'InBigCitiesSmallThingsHappen', 'ThisIsNotTheGreatestPasswordInTheWorld']

console.log(Object.entries(loginCredentials))
//  array contains sub arrays
>>> [['rafidhoda', 'BestPassword123'], ['shahrukhkhan', 'InBigCitiesSmallThingsHappen'], ['jackblack', 'ThisIsNotTheGreatestPasswordInTheWorld']]
```