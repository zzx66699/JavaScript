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

## Errors
### Constructor
```js
new Error() // No argument
new Error('message') // With one argument (string)
```
The main property of this object is message.
```js
const error = new Error('Oops, something went wrong');

console.log(error.message);
// => "Oops, something went wrong"
```
### throw the error
Using the throw syntax, you can throw an Error.
```js
function test() {
  console.log('A');
  throw new Error('Oops');
  console.log('B');     // never run
}

```
### try/catch the error
If we want the flow continue to run after we throw an error, we should use try/catch.  
It will jump out of try immediately after the error is thrown, find the nearest catch, and run the catch.  

```js
try {
  throw new Error('Oops');
  console.log('inside');  // never run
} catch (error) {   // the error represent the [new Error('Oops')]
  console.log(error.message);
}

console.log('after'); // will run
```
### Compare the error
we `throw` the error, not `return` the error, so we can't use error == xxx to compare.
the error should be an instance of a class of error. we can use `instanceof`.  

Example:   

Now that your machine can detect errors, you will implement a function `monitorTheMachine` that takes an argument actions. actions is an `object` that has 4 properties:
- check: a function. Checks the temperature of the machine. It may throw various errors.
- alertDeadSensor: a function. Alerts a technician that the temperature's sensor is dead.
- alertOverheating: a function. Will turn on a warning light on the machine.
- shutdown: a function. Will turn off the machine.

The monitorTheMachine(actions) function should internally call check(). If that passes, the function should not return anything. If that throws an error, different behaviour is expected:
- ArgumentError: all the alertDeadSensor function.
- OverheatingError: If the temperature is less than 600 °C, turn on the warning light by calling the alertOverheating function. If the temperature exceeds 600 °C, the situation is critical, so call the shutdown function.
- (anything else): rethrow the error
```js
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function monitorTheMachine(actions) {
  try{
    actions.check()
  } catch(error){
    if(error instanceof ArgumentError){
      actions.alertDeadSensor();
    }
      
    else if (error instanceof OverheatingError){
      if(error.temperature <= 600){
        actions.alertOverheating();
      }
      else{
        actions.shutdown();
      }
    }
      
    else{
      throw error;
    }
  }
}
```

## Inheritance
Inheritance is a way to create parent-child relationships between classes. The child class (sometimes referred to as a subclass) has access to the behavior and data defined by the parent class (sometimes referred to as a superclass).
```js
class Pet {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`This is my pet, ${this.name}.`);
  }
}

// Dog is the child class.
// The extends keyword in the child class declaration establishes a relationship with the parent class through the prototype chain.
class Dog extends Pet {}  

const dog = new Dog('Otis');
dog.introduce();
// => This is my pet, Otis.
```
prototype chain
```
dog → Dog.prototype → Pet.prototype → Object.prototype → null
```
```js

// objA.isPrototypeOf(objB): is objA on the prototype chain of objB
Dog.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(Dog.prototype); // => true

Pet.prototype.hasOwnProperty('introduce'); // => true
Dog.prototype.hasOwnProperty('introduce'); // => false
dog.hasOwnProperty('introduce'); // => false
```


As with any class in JavaScript, subclasses can inherit from Error to create Custom errors by using the extends keyword. The instanceof syntax will check if the error caught is an instance of a particular subclass of Error.
```js
class CustomError extends Error {}

try {
  // ... Code that may throw an error
} catch (error) {
  if (error instanceof CustomError) {
    console.log('The error thrown is an instance of the CustomError');
  }
}
```