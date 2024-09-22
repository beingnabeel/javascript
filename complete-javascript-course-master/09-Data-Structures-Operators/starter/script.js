'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // here we are computing the day names with the help of weekdays array instead of manually mentioning them
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// to restore this opening hour object inside of the restaurant object we need to create a property and assign this object variable to it.

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // returing multiple values from this method using destructuring
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  // commented for enhanced object literals part
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  // method used for restoring properties before es6
  // the annoying thing here is that this property name is exactly the same as the variable name here

  // openingHours: openingHours,
  // enhanced object literal syntax
  openingHours,

  // orderDelivery: function ({
  //   staterIndex = 1,
  //   mainIndex = 0,
  //   time = '20:00',
  //   address,
  // }) {
  //   console.log(
  //     `Order recieved! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
  //   );
  // },
  // above function written in enhanced ES6 version
  orderDelivery({ staterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // above funtion written in enhanced es6 version
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  // orderPizza: function (mainIngredient, ...otherIngredient) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredient);
  // },
  // the above function written in enhanced es6 version
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
// console.log(restaurant);
/*
// ------------Destructuring array--------------
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// the below code is for destructuring arrays and capturing the values in x, y and z variables separatly
// const [x, y, z] = arr;
// console.log(x, y, z);

// console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

// now if we only want the first and the third category.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// now for switching the main and the secondary categories using the third variable.
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);
// console.log(restaurant.categories);

// for switching the variable using destructuring.

[main, secondary] = [secondary, main];
console.log(main, secondary);

// returning multiple values from the function using destructuring
// so here we are recieving 2 return values from the function
console.log(restaurant.order(2, 0));
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// for nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// console.log(nested);
// if i need 2, 5, 6
const [i, , [j, k]] = nested;
console.log(i, j, k);

// // we can also add default values while destructuring arrays.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// ----------------Destructuring objects ------------------
console.log(restaurant);
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// providing alias
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//  adding default
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj;
({ a, b } = obj);
console.log(a, b);

// nested objects
// const { fri } = openingHours;
// console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  staterIndex: 2,
});

// adding default value in the method then calling the function
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  staterIndex: 1,
});
*/
/*
// -----------The spread operator ------------------
// previous methods for adding elements to the begining of the array
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
arr.unshift(2);
arr.unshift(1);
console.log(arr);

// using spread operator
const brr = [7, 8, 9];
const newArr = [1, 2, ...brr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

// copy arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// using spread operator on strings
const str = 'jonas';
console.log(...str);
const letters = [...str, '', 'S.'];
console.log(letters);

// now passing multiple arguments in the function
// real world example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// // previous way of passing the arguments
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // using spread operator
// restaurant.orderPasta(...ingredients);

// using spread operator on objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// using shallow copy on objects
const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
// --------------------Rest patterns and parameters --------------;
// 1. Destructuring
// spread , because on right side of the = operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// Rest, because on left side of the = opeerator
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

// here in the rest battern it is taking the value and putting it in variable a and b and the remaining is put in the array other

// using rest with destructuring
const [pizza, , Risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFoods);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
// here inside the add(...x is acting as a spread operator and it will take the elements out of the array)
add(...x);
// now it will send the individual elements to the add function where the ... is acting as a rest operator and it will be condensing the individual elements into the array.

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
// ---------------------------Short Circuiting-------------------
// properties of logical operator: they can use any data type,
// return any data type, short circuiting

console.log('--------------OR----------------');
// OR operator
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND operator
console.log('------------------AND-----------------');
console.log(0 && 'jonas');
console.log(7 && 'jonas');
console.log('Hello' && 23 && null && 'jonas');

// practical examples
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// we can use and operator instead of if operator in these type of situations
restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'spinach');
*/
// ------------------- The Nullish Coalescing operator ---------------
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish: null or undefined (NOT 0 or '');

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
// -------------Logical Assignment Operator----------------
/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// writing the above thing in a more concise way with logical assignment operator
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined);
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// logical and assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// concise way
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
/*
// ----------------------looping arrays: THE FOR of loop ------------

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) {
  console.log(item);
}

// // using the regular for loop
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// to get the item with the idx
for (const item of menu.entries()) {
  console.log(item);
}

console.log(menu.entries());
console.log(...menu.entries());

// to create a real menu
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// using destructuring
console.log('-------------using destructuring----------');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
// -------------------- Enhanced object literals --------------------

// optional chaining

// console.log(restaurant.openingHours.mon.open);
// for avoiding the error using if else

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Array
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');

// if we want to have the above functionality then i need to write more lines of code

if (users.length > 0) console.log(users[0].name);
else {
  console.log('use array empty');
}
*/
/*
// ---------------------looping objects --------------------

// const properties = Object.keys(openingHours);
// console.log(properties);
// console.log(`We are open on ${properties.length} days`);

// // looping property names or keys
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// modifying the above code
// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entries object
const entries = Object.entries(openingHours);
console.log(entries);

console.log('printing key value pairs of entries --------------');
// for (const x of entries) console.log(x);

// here we are gonna store the result of entries through destructuring into key open and close

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/

// ------------------sets ----------------------------
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('jonas'));
console.log(new Set());
// to check size of set
console.log(orderSet.size);
// to check for a certain element in set
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('bread'));

// adding new element to the set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// deleting element from the set
orderSet.delete('Risotto');
console.log(orderSet);
// deleting all elements from the set
// orderSet.clear();
// console.log(orderSet);

// looping over sets since they are iterables
for (const order of orderSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// if we need the unique elements of the set in the array then we can use rest operator to unpack elements inside square bracket to get the array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//

// if we only need to know the size of the unique elements inside of the array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// counting number of unique letters in a string
console.log(new Set('jonasschmedtmann').size);
*/
/*
// -------------------maps fundamentals ------------------------
// creating an empty map
const rest = new Map();
rest.set('name', 'Classico Italiano');
// setting a key value pair in map
rest.set(1, 'Firenze, Italy');
// set method updates as well as returns the map
// chaining set methods in map
console.log(rest.set(2, 'Lisbo, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// retrieving a certain value corresponding to a key in map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// checking certain key is present inside the map
console.log(rest.has('categories'));
console.log(rest);
// deleting key from a map
rest.delete(2);
console.log(rest);
// to check the size of the map
console.log(rest.size);
// deleting all the key value pair from the map
// rest.clear();
console.log(rest);

// using arrays and objects as keys
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/
/*
// ------------------------Maps Iteration ---------------------------

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);
// the above structure that is array of arrays is same that we get on calling object.entries
console.log(Object.entries(openingHours));

// converting object to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iterating a map
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt(`Your answer`));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('Correct') === answer));

// convertng map back to array
console.log(...question);

console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
// --------------------------Working with strings part 1 -----------------
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('b737'[0]);

// length of the string
console.log(airline.length);

console.log('b7320'.length);
// position of the letter
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));

// slice method
console.log(airline.slice(4));

console.log(airline.slice(4, 7));

// without hrdcoding values
console.log(airline.slice(0, airline.indexOf(' ')));
// we did +1 becoz space is also included here
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// negative characters for letters from end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// writing a function that recieves a seat and log to the console whether its the middle seat or not

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  // to take the last character of certain string take the -1 character and it will be the last character of the sting

  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('you got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// behind the scenes js does this
console.log(new String('jonas'));

// and this is basically an object
console.log(typeof new String('jonas'));
console.log(typeof String('jonas').slice(1));

// ---------------working with string part 2 -----------------------
// changing the case of the string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log('jonas'.toUpperCase());

// fix capitalization in name
// Jonas
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing user input email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// doing all in one go
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing part of the string
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');

console.log(priceUS);

const announcment = 'All passenger come to boarding door 23. Boarding door 23!';
console.log(announcment);
console.log(announcment.replace('door', 'gate'));
// replace all occurences in one go
console.log(announcment.replaceAll('door', 'gate'));

// using regular expression
console.log(announcment.replace(/door/g, 'gate'));

// Boolean
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.includes('neo'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// practice excercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed to board');
  else {
    console.log('Welcome Aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// --------------------working with strings part 3 ------------------
console.log('-------working with strings part 3 ------------------');
// split method
console.log('a+very+nice+string'.split('+'));
console.log('Nabeel Hassan'.split(' '));
const [firstName, lastName] = 'Nabeel Hassan'.split(' ');
console.log(firstName, lastName);

// join method
// uppercase lastname and add Mr firstname at the front
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// capitalizing names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // another method of doing the above thing
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('nabeel hassan');

// padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('jonas'.padStart(25, '+').padEnd(30, '+'));
console.log('jonas'.padStart(25, '+').length);

// real life example
// when you see credit card no. apart from the last 4 digits all the front digits are masked
// if one of the operands of the + sign is a string then it will convert all to string
// or else if you want to convert a number to a string then you can also do String(Number);
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// Repeat
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(10);
planesInLine(12);
*/

// ---------------------------string methods practices --------------------
/*
// const flights1 =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// console.log(flights1.split('+'));
// refactoring
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🟠' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/
