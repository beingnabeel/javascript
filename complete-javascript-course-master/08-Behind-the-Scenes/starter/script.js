'use strict';
/*// -scoping in practice
function calcAge(birthyear) {
  const age = 2037 - birthyear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //   Creating new variable with the same name as outer scope variable.
      const firstName = 'stevens';
      // js can find the above var variable outside this scope becoz is var is not block scoped, they are fucntion scoped.
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //   Reassigning outer scope variable
      output = 'New output';
    }
    // console.log(str);
    // in the above line we are getting error becoz const and let variable are block scoped.
    console.log(millenial);
    // console.log(add(2, 4));
    // in the above code we are getting error becoz in strict mode function are block scoped.
    console.log(output);
    // here we are manipulating the outer scope output from  the inner scope.
  }
  printAge();
  return age;
}

const firstName = 'jonas';
calcAge(1991);
// console.log(age);
// in above we get reference error becoz the outer scope cant access the inner scope variables.

// printAge();
// similarly we can't access function of the inner scope from the outer scope
*/
// -------------hoisting and tdz--------------

// ---------hoisting with variables---------
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonal';
let job = 'teacher';
const year = 1991;
*/
// -----------hoisting with function ---------------
/*
console.log(addDecl(2, 4));
// we are able to call function declaration before they are actually defined in the code.
// console.log(addexpr(2, 4));
// console.log(addArrow(2, 4));

function addDecl(a, b) {
  return a + b;
}

var addexpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// here the below lines of code are not working as expected becoz even when the numbproducts is initialized to 10 we are getting all products deleted(this should only be true when the cart is empty) but we see this phenomenon becoz of hoisting.
// numproducts are actually being used before being initialized ending up being undefined
console.log(numproducts);
if (!numproducts) deleteShoppingCart();

var numproducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 1;
const z = 1;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
// ------------the this keyword in practice-----------------
/*
console.log(this);
const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
// here we are simply copying the calcage method from jonas to matilda
matilda.calcAge = jonas.calcAge;
// the above thing is called method borrowing
matilda.calcAge();

// const f = jonas.calcAge;
// f();
*/
// --------Regular function vs Arrow functions--------------
/*
var firstName = 'Matilda';

const jonas = {
  // so here inside this jonas object its not a code block its the objects literal syntax.
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // solution 1
    // const self = this;
    // // here we are preserving the this keyword so that it can be used in regular function calls else it will give us undefined.
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };\
    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
// here we are getting undefined becoz arrow  function does not have their own this keyword they take it from thier parent and here in this case its global scope so its reffering the window itself.

console.log(this.firstName);

// now we are getting matilda becoz this is reffering to its parent scope window and var creates a window object with the property firstName.

jonas.calcAge();
*/

// -----------------Arguments Keywords ---------------
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

// primitives vs. objects--------------
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend: ', friend);
console.log('Me: ', me);
*/
/*
//  ----------------primitives vs. objects practice------------
// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After Marriage', marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};
// so here we are basically creating a new object in the heap
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('before marriage ', jessica2);
console.log('after marriage ', jessicaCopy);

// the array is also an object and it is not creating a separate family members in jessica copy becoz it is a deeply nested object

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');
console.log('before marriage ', jessica2);
console.log('after marriage ', jessicaCopy);
// if we want to manipulate only the array of the jessicacopy then we need a deep clone and its hard to achieve and its beyond the scope of this lecture.
// we can use the library lo-dash which is used for ton of tools and and one of the tool is used for deep cloning

*/
