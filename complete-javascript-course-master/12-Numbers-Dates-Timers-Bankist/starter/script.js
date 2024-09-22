'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-07-20T23:36:17.929Z',
    '2024-07-24T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
// now we need to format movements dates accrding to the locale

const formatMovementDate = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const dayPassed = calcDayPassed(new Date(), date);
  // console.log(dayPassed);
  // here with multiple return once the function returns the execution never proceeds further that statement

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) {
    return `${dayPassed} days ago`;
  } else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = `${date.getFullYear()}`;
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // this is the common technique for looping over 2 arrays at the same time that is acc.movements we are looping over it and at the same time we have access to index as well so we can do acc.movementDate[i]; and this is gonna be nicely formatted time string so we need to create a new date from it
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);
    // using the reusable function
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;
    // here we are doing everything by ourselves but we want our internationalization api to take care of it.

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  const formattedBal = formatCur(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = `${formattedBal}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// implementinng timer logic for auto logout
const startLogOutTimer = function () {
  //set time to 5 minutes
  let time = 20;
  // call the timer every second
  const tick = () => {
    // we need to convert this number to minutes:seconds
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    // and here seconds will be the remainder of dividing by 60
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    //when o seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to gets Started';
      containerApp.style.opacity = 0;
    }
    // decreasing time
    time--;
    // now if we switch account we see the timer is running abnormally becoz 2 timers are running at the same time so we need to fix the problem
    // so what we can do is whenever we log the user we check if the timer is running or not and if so timer running then we simply stop the previous timer
    // so we need to return the timer from here becoz to clear the interval timer I need the timer variable
  };
  tick();
  const timer = setInterval(tick, 1000);
  // so this callback function that we have passed in setInterval is not called immediately, it will only get called after 1 sec, but we want this function to called immediately and the trick to do that is to export this function as a separate function and call it immediately and after every 1 sec
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// so I should set the timer variable here as the global variable becoz I want it to exist so that it persist across multiple calls

// // Fake account always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// // setting the date outside to function so that for now we can see the effect.
// const now = new Date();

// // labelDate.textContent = now;
// // through the above line we don't get the date in the format we expect it to so we need to format our date first.
// // I want day/month/year
// labelDate.textContent =
//   `${now.getDate()}`.padStart(2, 0) +
//   `/` +
//   `${now.getMonth() + 1}`.padStart(2, 0) +
//   `/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;

// through internationalization we can format dates accourding to the user location
// Experimenting with internationalization
// Intl is the namespace for the internationalization api
// to get your country code : ISO language code table

// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };
// // now we cal also fetch the locale from the user browser
// const locale = navigator.language;
// // console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
// now we also need the time to be presented here so for that we will define an option object here we have to provide this option object as a second argument in the datetimeformat function and in our options object we need to specify what are the things we need in our format eg. hour, minute, day, month, etc
// we can set it according to other locale or languages by changing the country code

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // setting the date outside to function so that for now we can see the effect.
    // const now = new Date();

    // // labelDate.textContent = now;
    // // through the above line we don't get the date in the format we expect it to so we need to format our date first.
    // // I want day/month/year
    // labelDate.textContent =
    //   `${now.getDate()}`.padStart(2, 0) +
    //   `/` +
    //   `${now.getMonth() + 1}`.padStart(2, 0) +
    //   `/${now.getFullYear()},` +
    //   `${now.getHours()}`.padStart(2, 0) +
    //   `:` +
    //   `${now.getMinutes()}`.padStart(2, 0);

    // so we will remove the above code for the date shown on login and use internalization api to format and present my date
    // so now we want to experiment with that api so we will do that outside of this event handler so that we don't need to login every time

    // now setting the date according to the locale when the user actually logs in
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      // month: 'long',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // now we cal also fetch the locale from the user browser
    // const locale = navigator.language;
    // // console.log(locale);
    // now setting the locale according to different accounts locations
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Calling the timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // so here initially there will be no timer but when we have already logged in some account and there is timer running then that timer will be exported to this timer variable and on the next login it will check if the timer exist and if exist then it will clear the timer
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // adding the date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    // Reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // const amount = +inputLoanAmount.value;
  // now in the above case we don't need to typecast it to number by adding + becoz we will round that no. to floor and this method does type coercion automatically
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // implementing the timer functionality here .
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      // Adding the date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  // Resetting the timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// ----------------------------------------- 171. Converting and checking numbers. -------------------------------
// in js internally all numbers are represented as floating point numbers so basically as decimals
console.log(23 === 23.0);

// Base 10 - 0 to 9
// Binary Base 2 - 0 1
// there are certain numbers that are very difficult to represent in base 2 for example fraction 0.1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// CONVERSION
console.log(Number(23));
console.log(+'23');
// when js sees + it automatically does type coercion and converts string to numbers.

// PARSING
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('    2.5rem    ', 10));
console.log(Number.parseFloat('    2.5rem   ', 10));

// below is the old way of using parse method
// console.log(parseInt('   2.3rem  '));

// checking if a value is nan
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20px'));
console.log(Number.isNaN(23 / 0));
console.log(Number.isNaN(+'23'));

// checking if value is a number
// the below method is your go to whenever you need to check whether something is a number or not.

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/
/*
// -------------------------------------------- 172. Math and Rounding ----------------------------------
// sqrt is a part of math namespace.
console.log(Math.sqrt(25));
// same can also be achieved using exponentiation operator
console.log(25 ** (1 / 2));
// getting the cube roots
console.log(8 ** (1 / 3));

// getting the maximum value returned and also this max function does type coercion
console.log(Math.max(1, 3, 5, 6, 34, 23, 12));
console.log(Math.max(1, 3, 5, 6, '34', 23, 12));
// this maths function does'nt do parsing
console.log(Math.max(1, 3, 5, 6, '34px', 23, 12));

// similarly we have min method also
console.log(Math.min(1, 3, 5, 6));

// now beside couple of methods there are also certain constants present on math object or math namespace
console.log(Math.PI);

// now if we have to calculate the area of the circle with radius
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// another method on math object is random number which we have used earlier to calculate dice roll
// so math.random gives us a number between 0 and 1 and so when we multiply it with 6 we get a number from 0 to 5.something becoz 1 is not included here so we can also truncate the decimal part by using math.trunc
console.log(Math.trunc(Math.random() * 6) + 1);

// generating a random number between 10 to 20 including both.
const randomnumber = Math.trunc(Math.random() * 10) + 11;
console.log(randomnumber);

// generalizing this formula that we can use to generate random numbers between two values
const randomGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// random number generates numbers between 0 and 1.
// now if we do max-min -> 0 to max-min +1 so that max can be included and if we do add min and both the ends then min and min gets cancelled and we get our random number between min and max.
// 0...1 -> 0 ... (max-min) => min ... (max-min + min) => no. b/w (min...max)
console.log(randomGenerator(10, 20));

// lets talk about rounding
// Rounding integers
// the below one will always remove or truncate the decimal part
console.log(Math.trunc(23.4667));
console.log(Math.trunc(23.888889));

// the below one will always round to the nearest integer
console.log(Math.round(23.3442));
console.log(Math.round(23.67687));

// now we also have ceil and floor method where the ceil will round the numbers up and floor will round the numbers down
// Also all this method does type coercion
console.log(Math.ceil(23.3442));
console.log(Math.ceil(23.67687));

console.log(Math.floor(23.3442));
console.log(Math.floor(23.67687));
console.log(Math.floor('23.89788'));

// here floor and trunc reacts in same way by cutting out the decimal part while working with +ve numbers but there is difference when you work with negative numbers
console.log(Math.trunc(-23.3));
console.log(Math.floor(-24));
// in floor with -ve numbers rounding works the other way around and there floor is better than trunc as it takes into account all the cases.

// ROUNDING DECIMAL OR FLOATING POINT NUMBERS
// TO fixed will always return a string and not a number
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
// converting string to number.
console.log(+(2.345).toFixed(2));
console.log((4.3).toFixed(0));
console.log((4.7).toFixed(0));
// So this is a number, so it's a primitive, right? And primitives actually don't have methods. And so behind the scenes, JavaScript will do boxing. And boxing is to basically transform this to a number object, then call the method on that object. And then once the operation is finished it will convert it back to a primitive, okay?

// Now applying some of the methods on our bankist application

// rounding the requested loan ammount
// making our numbers look good by rounding it to 2 decimal places
*/
/*
// --------------------------------------- 173. The Remainder Operator ----------------------
// it simply returns the remainder

console.log(5 % 2);
console.log(5 / 2); // 5= 2*2 +1

console.log(8 % 3);
console.log(8 / 3); // 2*3 + 2

// another useful concept in prog. is to check whether a no. is even or odd.
// so a no. is even when its divisible by 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(1));
console.log(isEven(9));
console.log(isEven(23));
console.log(isEven(234));
console.log(isEven(54));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/
/*
// ------------------------------------------ 174. Numeric Separators ------------------------------
// we can use it to format numbers in a way that it's easier for us and other developers to read and understand
// 287,460,000,000               we can use comma separators to format numbers
const diameter = 287_460_000_000; // using underscore here as 1000 separator
// so numberic separators and _ that we can place anywhere between our numbers
console.log(diameter);
// so the engine basically ignores these underscores(numeric separators) it simply sees the number itself

const price = 345_99; // these are basically price in cents 345 dollor 99 cents
console.log(price);

const transferFee1 = 15_00; // here the _ is providing different meaning i.e, 15 dollors 00 cents
const transferFee2 = 1_500; // here it means 1000 and 500
// so both of the above value are actually 1500 but get different meaning through visual coz of _

const pi = 3.14_5;
console.log(pi);

// so when we have underscore present in our string number and when we try to convert that to a number through typcasting then that's not going to work as expected and you will get NaN when converting

console.log(Number('230_00'));

// and same is the case with parseINt also so you get only the part which is in front of the underscore
console.log(Number.parseInt('230_000'));
*/
/*
// ------------------------------175. Working with BigInt -----------------------------

// it is a primitive data type in js
// its a special type of integers which was introduced in es2020
// So we learned in the first lecture of the section that numbers are represented internally as 64 bits. And that means that there are exactly 64 ones or zeros to represent any given number. Now of these 64 bits only 53 are used to actually store the digits themselves. The rest are for storing the position of the decimal point and the sign. Now, if there are only 53 bits to store the number, that means that there is a limit of how big numbers can be, and we can calculate that number. So that's two elevated to 53 and then minus one, because the numbers starts at zero. And so that is this gigantic number right here. And so this is essentially the biggest number that JavaScript can safely represent, okay.
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
// It means any integer larger than this is not safe, SO IF we do calculations with numbers larger than this then we might loose precision

// now if we want to work on integer values larger than this then we can use bigINt
// Called BigInt. Now right? And BigInt stands for big integer. And it can be used to store numbers as large as we want. So no matter how big, all right. So let's say we need this number and I'm just using random numbers here. So if I lock this, then you'll see well this here which probably does not have precision because of course it's larger than this, but if I use the n, then this will be a BigInt. So let's see that. And so this n here basically transforms a regular number, into a BigInt number. And you see in the console he

console.log(23470234809382472379729749237492374972n);
// we can also create bigInt by using bigInt function
console.log(BigInt(3298479327947));
// all the operations on bigint work exactly the same
console.log(3274923794793642734923472937942937n * 10000n);
console.log(10000n + 10000n);
// it is not possible to mix bigInt with regular numbers.
const huge = 234236842348263846n;
const num = 1000;
console.log(huge * BigInt(num));
// also math operations doesn't work on bigint
// console.log(Math.sqrt(16n));

// EXCEPTIONS
// we can use bigint with comparison operator
console.log(20n > 10);
console.log(20n === 20);
// we get false in the above case becoz these 2 num. have diffe. primitive types and int triple equality js doesn't do type coercion it does strict equality comparison.
console.log(typeof 20n);
console.log(typeof 20);

// EXCEPTION 2: string concatination
console.log(huge + ' is really a big number');

//divisions
// it returns the closest bigint (cuts of the decimal part) but in the case of numbers we get decimals
console.log(10n / 3n);
console.log(10 / 3);
*/
/*
// -------------------------------------176. Creating Dates ---------------------------

// creating a date
// using new date constructor
const now = new Date();
console.log(now);

// now simply giving js a string and it will parse time on that
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

// js is very smart in parsing out the string that we give here and even provide you the day, however it's not a good idea to do it becoz it's quite unreliable.
// however if the string is created by js then it's pretty safe
console.log(new Date(account1.movementsDates[0]));

// in account1.movementsDates[0] the z here is the UTC that is the coordinated universal time that is the time without any time zone in london

// now we have seen the case of passing string
// we can even pass year, month, day, hour, minute, second into this constructor
console.log(new Date(2037, 10, 19, 15, 23, 5));
// month in js is 0 based

// js also autocorrect date so if we do nov 31'st and we know that nov. has only 30 days so js autocorrect it and set to the next day that is dec 1, if nov 33->dec 03
console.log(new Date(2037, 10, 31));

// Finally, we can also pass into the date constructor function, the amount of milliseconds passed since the beginning of the Unix time, which is January 1, 1970,

// so this 0 here is the 0 millisecond after the initial unix time
console.log(new Date(0));
// creating a date three days after the unix time
// 3 days made out of 24 hrs made of 60 mints made of 60 secs made of 1000 milsec
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// so this no. that we calculated here 2*24*60*60*1000 is known as timestamp of day no. 3: 259200000
// so these dates that we have created are speacial type of object so they have methods just like arrays maps or strings, we use this method to get or set the componenet of the date

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
// to get the year we use getfullyear , never use getyear
console.log(future.getFullYear());
// getting months it's 0 based
console.log(future.getMonth());
// getting the current date
console.log(future.getDate());
// getting the day of the week, it's 0 based
console.log(future.getDay());
// getting the hours, minutes, and seconds
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
// we can also get a nicely formatted string
console.log(future.toISOString());
// we can also get the timestamp and it's basically the millisecond that have passed since jan 1 1970
console.log(future.getTime());
// creating a new date based on timestamp
console.log(new Date(2142237180000));

// to get the current timestamp of this moment
console.log(Date.now());

// there is also set method for all of these
future.setFullYear(2040);
console.log(future);
*/

// ------------------------------------- 177. ADDING DATES TO BANKIST APP ----------------------------
// creating a fake login for implementation so that the account is always logged in
// now we need to display time of each movements
/*
// ------------------------------------------ 178. Operation with the dates --------------------------------------------------
// when we substract one date with other the result will be a number which is the timstamp in milliseconds and then we can convert this millisecond back to date, hours or whtever we like
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDayPassed = (date1, date2) => {
  return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
};
const day1 = calcDayPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(day1);

// if you really want to consider every calculation in date and time then you can explore library like moment.js

// Displaying the dates in our application in a more formatted way

// ------------------------------------------ 179. Internationaliing dates ---------------------------------------
// has a new Internationalization API. Now that sounds very fancy, but all it does is to allow us to easily format numbers and strings according to different languages. So with this new API, we can make our applications support different languages for users around the world which is pretty important. For example, currencies or dates are represented in a completely different way in Europe or in the U.S or in Asia for example. Now there is a lot of language specific things that we can do with the Internationalization API. But in this section, we're just briefly gonna talk about formatting dates and numbers. And starting with dates in this video. So in our application, we have dates in two places. First, right here, and then second here in each of these movements. Now, in case you're wondering why these labels like today or yesterday or five days ago, are gone here from my application, it's just because I'm recording this video a couple of days later. But anyway, let's go to the place in our code which displays this first date here, so that we can format that according to different languages and see what it looks like.

// -------------------------180. Internationalizing numbers ---------------------

const num = 3884764.23;

// now we will define an object for the formatting
// we have to set the currency becoz it is not decided by the locale
// we can also set the grouping true or false, then the numbers will be displayed without the separator.

const options = {
  // style: 'unit',
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:   ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/
// now we will implement currencies in our application with that knowledge
// currency is completely independent from the locale itself
/*
// ----------------------------181. TIMERS: SetTimeout and SetInterval -------------------------------------------
// we can use setTimeout to execute some code at some point in the future.

// setTimeout(
//   (ing1, ing2) => console.log(`Here is you pizza with ${ing1} and ${ing2}`),
//   3000,
//   'olives',
//   'spinach'
// );
// // so we have scheduled the above function call for three seconds later.
// console.log('waiting....');
// asynchronous js
// here the third argument becomes the first parameter of the function and similarly fourth argument becomes the second parameter of the function

// now before these 3 seconds have passed we can actually cancel the timer
// now there is another method of passing in the arguments so basically we will put the ingredients in array and spread it in the arguments so that it can be passed to the parameters
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);
console.log('Waiting....');

// // so in the clear timeout function we need to assign the name of the timer so we can assign settimeout function to a variable
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// now implementing the timer functionality in the loan that is when the user needs loan he will be provided it after a few seconds
// so settimeout simply schedule the function to run simply after certain amount of time and the callback function here is only executed once

//and if we want a function to run over and over again like every 5 seconds. so we can use setInterval function
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// Making a real clock
// setInterval(() => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   console.log(`HOURS: ${hours} MINUTES: ${minutes} SECONDS: ${seconds}`);
// }, 1000);
*/
// ---------------------------- 182. Implementing a countdown timer ----------------------------------------------
// so real application will log out after some inactive time so thats what we will be implementing here that after 5 mints. of inactivity we will be logged out
// lets create a separate function which will start our timer.
// another functionality that we want our timer to have is to reset when ever we do something, bocoz the goal of the timer is to log out in case of inactivity
