# OOP

## Object with methods and this
``` js
// If we change the gamer name, we will also need to change the object name in the incrementScore method
const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){
        gamer.score++   
    }
}

// to make it eeasier, we can use `this` to represent the whole object
const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){
        this.score++   
    }
}
```


## Objects to Constructor functions
We uppercase the first letter to show it is a constructor
```js
function Gamer(name, score){
	this.name = name
	this.score = score
	this.incrementScore = function(){
		this.score++
	}
}

const dave = new Gamer('Dave', 0)
dave.incrementScore()
```


## Class syntax
It is not hoisted
```js
class Gamer {
	constructor(name, score){
		this.name = name
		this.score = score
	}
	incrementScore(){
		this.score++
	}
}

const dave = new Gamer('Dave', 0)
dave.incrementScore()
```






array is also an object
```js
// array
const arr = [1, 2, 3];
arr.foo = 'hello';

console.log(arr.foo); // "hello"
```
function is also an object
```js
//function
function f() {}
f.x = 42;

console.log(f.x); // 42
```





```js
Car.prototype.startEngine = function () {
  this.engineRunning = true;
};
```
startEngine is a property name  
startEngine -> function () {this.engineRunning = true;} is the `method`

Example:   
```js
function Tiger(name, weight){
    // field
    this.name = name;
    this.weight = weight;
}

// prototype
Tiger.prototype.bark = function(){
    console.log(this.name + ": wahwahwah");
}

Tiger.prototype.eat = function(foodWeight){
    this.weight += 0.1 * foodWeight
};


const tigerA = new Tiger("tigerA", 100);
tigerA.bark()
tigerA.eat(10)

tigerA.bark()
tigerA.eat(50)

tigerA.bark()
tigerA.eat(20)

console.log(tigerA.weight)
```



## instanceof
Check whether the object come from the class 
```js
class Beverage {
  // ...
}

// The Coffee class is a child of the Beverage class.
class Coffee extends Beverage {
  // ...
}

const java = new Coffee();

java instanceof Coffee;
// => true

java instanceof Beverage;
// => true
```

## The in operator
The in operator returns whether the first operand is a property of the second operand. It does not check that the property has a defined value. A property set to undefined will still be detected by in.   

`in` will return true for `inherited` properties and methods.
```js
class Coffee {
  constructor() {
    this.temperature = 'hot';
    this.isDarkMatter = undefined;
  }

  coolDown() {
    this.temperature = 'warm';
  }
}

const espresso = new Coffee();

'temperature' in espresso;
// => true

'color' in espresso;
// => false

'isDarkMatter' in espresso;
// => true
```

## Object.hasOwn() 
The Object.hasOwn() method returns whether the specified object owns the given property (it is not inherited or a method).
```js
class Coffee {
  constructor() {
    this.temperature = 'hot';
  }

  coolDown() {
    this.temperature = 'warm';
  }
}
const cappuccino = new Coffee();

Object.hasOwn(cappucino, 'temperature');
// => true

Object.hasOwn(cappucino, 'constructor');
// => false

Object.hasOwn(cappucino, 'coolDown');
// => false
```