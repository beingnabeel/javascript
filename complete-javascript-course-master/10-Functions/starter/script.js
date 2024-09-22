'use strict';
/*
//-------------------------------- Default parameters ---------------
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
console.log(bookings);
*/

// ---------------------------How passing arguments works -------------
/*
const flight = 'LH234';
const jonas = {
  name: 'jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  // changing the parameter of a function not a good practice
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
// here two functions are manipulating the same object
newPassport(jonas);
checkIn(flight, jonas);

console.log(jonas);
*/
//
/*
// ----------------Funtions accepting callback functions ----------------
// removing all the spaces from the string
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// making the first word uppercase

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// here this transformer function is our higher order function
// a higher order function is a function that takes in a function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
console.log('----------using with oneWord func-------');
transformer('javascript is the best!', oneWord);

// js uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['jonas', 'Martha', 'Adam'].forEach(high5);
*/

// ------------------Functions returning functions ------------------------
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('nabeel');

// another way
greet('hello')('jonas');

// challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Hassan');
*/
/*
// ---------------The call and apply method --------------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Joe Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// since the js has first class function we can take the function value and put it into variable and then that also becomes function

const book = lufthansa.book;

// Do not work
// book(233, 'Nabeel Hassan');
// calling book method on eurowings flight
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// calling book method on lufthansa flight

book.call(lufthansa, 239, 'Mary cooper');
console.log(lufthansa);

// now we can create more airlines and use the book method first created on lufthansa by manipulating the this keyword.

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// using spread operator with call method
book.call(swiss, ...flightData);
console.log(swiss);
console.log(
  '-------------------------------------------------------------------------------'
);

// --------------The Bind method ------------------

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

// making pre set bind calls
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas schmedtmann');
bookEW23('Martha Cooper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
// we don't want the above this we want the this keyword to point to the lufthansa and not the button element on the occurence of the event

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// challenge : write the above partial application function as one function returning the other one

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
*/
/*
// ----------------------Immediately Invoked Function Expressions -------------------

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// here wrapping the function inside a curly braces tricks js into thinking it as a expression
// Here this is just a function value and this function is invoked right away

// IIFE
(function () {
  console.log('This will never run again');
})();

// same goes for arrow functions

(() => console.log('This will also never run again'))();
*/

/*
// ---------------------CLOSURES -----------------

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// --------------More Closure Examples ---------------
// example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// untill here the closure was containing a=23
// Re-assigning f function
h();
f();
console.dir(f);
// now the closure is containing b= 777;

// example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  // setTimeout function requires two arguments first is the function which we want to execute and second is the time after which we want to execute it.
  // setTimeout(function(){}, 1000);
  // here the function inside the settimeout runs completely independently of the boardpassengers function
  // and it still has access to the pergroup variable and arguments of boardpassengers that clearly indicate it created the closure

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passensgers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds.`);
};
// setTimeout(() => {
//   console.log('TIMER');
// }, 1000);
const perGroup = 1000;
// the above declaration of the pergroup variable in the global scope still not affect the settimeout function and it will take the value from the pergroup variable of the boardpassengers because closure have priority over global scope
boardPassengers(180, 3);

// closure will always have the priority over the scope chain
*/
