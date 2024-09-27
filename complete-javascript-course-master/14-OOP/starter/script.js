'use strict';

//----------------------------------209 ------------------------------
// constructor functions and the new operator
// here person is the contructor function through which we are creating objects.

const Person = function (firstName, birthYear) {
  //   console.log(this);
  //   so these properties here are  the instance properties.

  this.firstName = firstName;
  this.birthYear = birthYear;

  //   attatching methods
  //   but this way of creating a method is a bad practice we should never define a method inside of  a constructor fucntion
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
  // instead of this we will use prototypes and the prototypal inheritance instead of this.
};
// so from the analogy this constructor fucntion is the blueprint for the house and then the each object we create from this constructor fucntion are the actual houses
const jonas = new Person('jonas', 1991);
// so here this is the person object with the first name jonas and the birthyear that we passed into the constructor.
console.log(jonas);

// 1. New empty {} is created
// 2. function is called, this is set to {}empty object
// 3. empty{} is liked to prototype
// 4. function is automaticaly return {}

// now we can use this constructor function to create as many objects as we want.
const Matilda = new Person('Matilda', 2011);
const jack = new Person('jack', 1975);
console.log(Matilda, jack);

// so here we can say that jonas, matilda and jack are the instance of the person class.

// to check whether an object or instance belongs to a class or not
console.log(jonas instanceof Person);
const jay = 'jay';
console.log(jay instanceof Person);

// ------------------------PROTOTYPES ------------------------------
//  first each and every function in js automatically have a property called prototype and that includes also constructor functions
// so here this is the prototype property of the constructor function
// so all the objects that are created through this Person contructor function will inherit or they will get access to all the method and properties defined on this person.prototype property.
// Person.prototype;
// now adding a method to this prototype property
// so it is a object Prototype.property
console.log(Person.prototype);
// so this person.prototype will now include firstname and lastname as property and calcAge as a method.

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
// so now we can use this calcAge method on jonas object even though it is not really on the object itself, so it doesn't contain the calcAge method.
// but still we have access to it because of the prototypal inheritance.
// so it works becoz this keyword always gets attatched to the object that is calling the method.

console.log(jonas);
Matilda.calcAge();

// it works because any object always has access to methods and properties from its prototype and the prototype of jonas and matilda is person.prototype

// to confirm the prototype we can use __proto__
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// or
console.log(Person.prototype.isPrototypeOf(jonas));

console.log(Matilda.__proto__);

// note: imp: => here Person.prototype is not the prototype of Person, but is what's gonna be used as the prototype of all the objects that are created with this Person constructor function.
console.log(Person.prototype.isPrototypeOf(Person));

// remember .prototype as prototypeofLinkedObjects. and not of the constructor function.
console.log(jonas);
// we can also set properties on the prototype not just method.
Person.prototype.species = 'Homo sapiens';
console.log(jonas.species);
// to check whether the object owns the property or not
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// -----------------------------PROTOTYPAL INHERITANCE ON BUILT IN OBJECTS------------------

console.log('---------------------prototypal inheritance --------------------');
console.log(Person.__proto__);
// object.prototype (top of the prototype chain)
// moving up the prototype chain
console.log(Person.__proto__.__proto__);
// there is nothing above object.prototype
console.log(Person.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
// for inspecting the function
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
// here all the method of arrays such as map, filter etc lives in the Prototype of Array constructor.

console.log(arr.__proto__ === Array.prototype);
// we can also reach object.prototype here which is the top
console.log(arr.__proto__.__proto__);
console.log(Array.prototype.constructor);

// creating our own method in the Array.prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
// so here we added a new method to the prototype property of the Array constructor now all arrays will inherit this method, and we can call this method on any array we want.
// this way of creating new methods on prototype is not a good practice.
const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// coding challenge
console.log(
  '---------------------------coding challenge ------------------------'
);
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const car1 = new Car('BMW', 100);
const car2 = new Car('Mercedes', 100);

car1.accelerate();
car2.brake();

// --------------------------ES6 CLASSES----------------------
console.log('------------------ES6 classes ----------------------');
// class expression
// const personCL = class{}
// class declaration
class personCL {
  constructor(fullName, birthYear) {
    // adding properties on this class
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //   adding methods
  //   so all of these method that we write outside of the constructor will be on the prototype of the objects and not on the object themselves.
  //   Methods will be added to the .prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey, this is ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //   setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // else alert(`${name} is not a full name !`);
  }
  //is that we are creating a setter for a property name that does already exist. So fullName is already a property that are trying to set here, but then we also have the setter. And so now what's gonna happen is that each time this code here is executed, so whenever we set the fullName on the this keyword, then actually this method here, so this setter is gonna be executed. And so that name that we pass in as fullName will then become this name.
  //So right now both the setter function and this constructor function are trying to set the exact same property name. And so that gives origin to this weird error. So what we need to do instead is to here create a new property name. And the convention for doing that, so when we have a setter which is trying to set a property that does already exist, then here as a convention we add an underscore. So again, this is just a convention, it's not a JavaScript feature. So it's really just a different variable name to avoid that naming conflict. However, now when we do this, we are actually creating a new variable, so a fullName variable.

  get fullName() {
    return this._fullName;
  }
  // So if we try to look at Jessica Davis you see that right now the property that exists is underscore fullName. And so right now we cannot do jessica.fullName because that simply doesn't exist. And so to fix this we now also need to create a getter for the fullName property.
}
// then inside the class, the first thing that we need to do is to add a constructor method. So just like this, and this constructor actually works in a pretty similar way as a constructor function, so as we studied previously but this one is actually a method of this class. And in fact, it needs to be called constructor. So that is the rule. But just like in constructor functions, we pass in arguments basically for the properties that we want the object to have.
const Nabeel = new personCL('Nabeel', 2024);
console.log(Nabeel);
// So using the new operator. And so therefore, whenever we create a new object, so like a new instance using the new operator, this constructor will automatically be called.
Nabeel.calcAge();
console.log(Nabeel.age);
console.log(Nabeel.__proto__ === personCL.prototype);
// And so as you see, PersonCl here acts just like any other function constructor but the only difference that this looks a little bit nicer. So with this syntax, we don't have to manually mess with the prototype property. All we have to do is to write the methods here, so inside the class, but outside of the constructor, and then they will automatically be added to the prototype property of the class basically.

// creting a greet method
// personCL.prototype.greet = function () {
//   console.log(`hey, this is ${this.firstName}`);
// };

Nabeel.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// -----------------------------215. SETTERS AND GETTERS -------------------------
console.log('-----------------setters and getters ----------------------');
// getter methods are very useful when we want something to read as a property.

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  //   any setter method needs exactly one parameter.
  set latest(mov) {
    this.movements.push(mov);
  },
  // now it is not mandatory to specify a setter for the same property that we have created getter for
};

console.log(account.latest);

// now for using the setter if it would be normal method we would do something like this account.latest(50)
// but here we set it like a property
account.latest = 500;
console.log(account.movements);

// adding setter and getter in our classes go in above section.
const walter = new personCL('walter white', 1999);
console.log(walter);
// this is now coming from the getter method.
console.log(walter.fullName);

// we can use getters and setters for validation purposes.
