# Loop
## for loop
```js
const list = ['a', 'b', 'c'];
//   start      finish           step
for (let i = 0; i < list.length; i += 1) { 
	console.log(list[i])
}

//   start      finish           step
for (let i = 0; i < list.length; i++) { 
	console.log(list[i])
}
```

## for of - a nicer way of iterating
For each item in an iterable object like Array, String. Not for `Object`.
```js
const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

for (let character of characters){
    console.log(character)
}
```
Example: Implement a function birdsInWeek that accepts an   `array-like` object of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely. e.g.
```js
birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);
// => 12
```
```js
export function birdsInWeek(birdsPerDay, week) {
	let sum = 0;
	let start = (week-1) * 7; // determine the start and end 
	let end = week * 7
	
	for (let i = start; i < end; i++){
		sum += birdsPerDay[i]
	};
	return sum;
}
```

## .forEach() method
Use the forEach() method when you don't need to create a new array
```js
// pass in an anonymous function with a parameter, which will be each individual element in the array
characters.forEach(function(character){
	console.log(character)
})
```

```js
// know the index of the element that you are working on
characters.forEach(function(character, index){
    console.log(character, index)
})

>>> 
0 Ninja
1 Sorcerer
2 Ogre
3 Unicorn
```
### return undefined error
It doesn't return a new array! It returns `undefined`! We need to avoid using `return` in the forEach() function. 
```js
const playlistHtml = playlistArr.forEach(function(track){
    return `
    <section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
    </section>
    `
}).join('')

console.log(playlistHtml)
>>> undefined
```
The correct way is to create the array first and push element to the array. 
```js
const playlistHtml = []

playlistArr.forEach(function(track){
    playlistHtml.push( `
    <section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
    </section>
    `)
})   // the join() method can't be chained here, because forEach() method returns undefined. 
document.getElementById('container').innerHTML = playlistHtml.join('')  // the join() method should be chained here
```

## .map() method 
It gives us a new `array` and we're going to store the array in a const.   
If we don't need a new array it returns, we don't need to use map method.  
```js
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]
const conversionFactorMilesToKm = 1.6

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles, index){
    // The comma operator evaluates both expressions but returns only the last one.
    return distanceMiles * conversionFactorMilesToKm, index
})

console.log(distanceWalkedKmArr)
>>> [0, 1, 2, 3, 4, 5]
```
```js
const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles, index){
    return [index, distanceMiles * conversionFactorMilesToKm]
})

console.log(distanceWalkedKmArr)
>>> [[0, 224], [1, 244.8], [2, 257.6], [3, 244.8], [4, 204.8], [5, 236.8]]
```
```js
const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles, index){
    return `${index}: ${distanceMiles * conversionFactorMilesToKm}`
})

console.log(distanceWalkedKmArr)
['0: 224', '1: 244.8', '2: 257.6', '3: 244.8', '4: 204.8', '5: 236.8']
```
### A typical example
```js
function getLabelsHtml(text, sender, ...staffObjs) {
    return staffObjs.map(staffObj => 
`<div class="label-card">
    <p>Dear ${staffObj.name}</p>
    <p>${text}</p>
    <p>Best wishes,</p>
    <p>${sender}</p>
</div>`
    ).join('')
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'}
    ) 
```


## while loop
Multiple conditions - using && or ||
```js
let i = 0;
while (i < orders.length && timeLeft > 0>) {
	.....
	i += 1
}

// the condition is checked after the loop body was executed
do {
	// The code here will always be executed once and then
	// repeatedly while the condition is true.
} while (condition);
```
continue & break
```js
let i = 0;

while (i < 100) {
	
	i = i + 2;

	if (i % 3 === 0) {
		continue;
	}

}
```

## The forEach Method
Every array includes a `forEach` method that can be used to loop over the elements in the array.  
There is no way to stop the iteration once the forEach loop was started. The statements break and continue do not exist in this context.
```js
const numbers = [6.0221515, 10, 23];

numbers.forEach((number, index) => console.log(number, index));
// => 6.0221515 0
// => 10 1
// => 23 2
```


