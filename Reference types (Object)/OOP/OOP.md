## Object
Object: A value can attach properties if you can add a `property` to it and the value keeps it.
Property: key + value on obj  

```js
// object
const obj = {};
obj.a = 1;

// property = ("a", 1) on obj
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

---------------------------------------------------------------------
## Legacy: Prototype syntax
``` js
function Car(color) {
  // different instances have different colors. so color is stored on this.
  this.color = color;     
}
 
// difference instances perform the same behaviour for the start.(shared behaviour) so we put start under prototype. 
Car.prototype.start = function () {   
  console.log('start');
};

const myCar = new Car('red');
```
### Prototype
Prototype: Only function has prototype. It is a property of function. Prototype has its own properties. (methods)
```js
Car.prototype
```
It has 2 layers:   
**First layer**: Car is an object. prototype is a property on "car" obj.  
```
Car (object)  
└── prototype :  <value>  
```

**Second layer**: prototype itself also contains properties.
```
Car.prototype  (object)  
├── startEngine : function  
├── addGas      : function  
└── constructor : Car  
```

method = property whose value is a function    
In oop, the property (key) is either a field or a method.   
If the value is a function, then it is a method;  
Else, it is a field.


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

## Class syntax
   
```js
class Car{
    constructor(color){         // color is the argument
        this.color = color;     // field
        this.age = 0;           // field
        this.brand = function(){ // method
            console.log("qq")
        }
    }

    start(){                    // method
        console.log("start!");
    }
}

const myCar = new Car('red');
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