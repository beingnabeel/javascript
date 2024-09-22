'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
// ----------------143. Simple array methods ------------------

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
// the above slice method will return you the new array where 2 is the begin addr and it will return to the end element, this doesn't mutate the original arr array.
// end parameter is not included in the output
console.log(arr.slice(2, 4));

// so the length of the output will be simply the end parameter - the begining parameter\

console.log(arr.slice(-2));
// negative character will return elements from the end
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// the above code will extract everything except the last two

// slice method can also be used to create a shallow copy of any array
console.log(arr.slice());
console.log([...arr]);
// so only time you use the slice method when you want to chain multiple methods together calling one after the other
console.log('-------------------------------splice----------------------');
// SPLICE METHOD
// console.log(arr.splice(2));
console.log(arr);
// so splice method return you the extracted part of the array as well as it mutates the array and the original array is left with the remaining part of the array which doesn't contain the splice part
arr.splice(-1);
console.log(arr);
// the second paramether is the splice method is the number of charecter that you want to delete from the array
arr.splice(1, 2);
console.log(arr);

// REVERSE
// here the reverse method mutates the original array

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
// this one is used to concatinate two arrays
const letter = arr.concat(arr2);
console.log(letter);
// the first array is the one on which the method is called and the second array is the one which we pass in as the argument.
// concat doesn't mutate the original array
// another method of doing the above thing

console.log([...arr, ...arr2]);

// JOIN METHOD:
// this method helps you join the element using the separator in between

console.log(letter.join('-'));
console.log(letter);
*/
/*
// ---------------144. The new at method ------------------
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
// this above line of code means fetch me the element at position 0 of the array arr
//getting the last element of the array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
// so the above line of code means from arr.slice(-1) we get the copy of the last value of the array and now if we want the value outside of the array then we need that first value so [0];

//using the new at method
console.log(arr.at(-1));

// at method also works on the string
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/
/*
// ---------------------145. Looping Arrays: forEach ---------------------
// we use a callback funtion to tell another higher order function exactly what it should do

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of loop
for (const movement of movements) {
  if (movement > 0) console.log(`money credited : ${movement}`);
  else console.log(`money withdrawn: ${Math.abs(movement)}`);
}
console.log('----------------forEach ----------------------');
// for each here is the higher order function which requires a callback function in order to tell it what to do.
// it is the forEach method that is calling the funciton we are not calling the function ourself
movements.forEach(function (movement) {
  if (movement > 0) console.log(`money credited. ${movement}`);
  else console.log(`money deducted. ${Math.abs(movement)}`);
});

// 0: function(200)
// 1: function(450)
// 3: function(400)
// ..... and so on.

// we can access the idx and the values in the for of loop using entries
console.log('-----------entries using for of loop ---------------');

for (const [idx, movement] of movements.entries()) {
  if (movement > 0) console.log(`${idx + 1}: money credited = ${movement}`);
  else console.log(`${idx + 1}: money withdrawn = ${Math.abs(movement)}`);
}

// to access the current index in the forEach method.
// here actually it is the forEach method that is calling callback function and while calling it passes the current element , but that is not all it also passes the index and the entire array that we are looping apart from the current element.
//
// therefore we can specify them in the parameters list , and we can use any no. of the three i.e, 1, or 2 or 3 of the parameter b/w current element, idx or the array.
// the order of the parameter is important here ,
// first should be current element, then idx, then the array itself.

console.log('-------------current idx using forEach --------------------');
movements.forEach(function (mov, idx, arr) {
  if (mov > 0) console.log(`${idx + 1}: money credited = ${mov}`);
  else console.log(`${idx + 1}: money deducted = ${Math.abs(mov)}`);
});

// always remember the parmeters passed in the forEach's order is different than the destructuring performed on the entries method in for of loop where we paas the idx first and then the current element.

// CONTINUE and the BREAK statement do not work in the forEach loop;
*/
/*
// 146. ----------------------forEach with maps and sets -------------
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// iterating over a map using the for of loop
for (const [key, value] of currencies) {
  console.log(`This ${key} belongs to ${value}`);
}

// using forEach loop
console.log('------------------using forEach---------------');
// now here the callback function of the forEach still has three parameters 1. current value, 2. key, 3. entire map that is being loop over.
currencies.forEach(function (cur, key, mappp) {
  console.log(`This ${key} belongs to ${cur}`);
});

// now using the forEach method on the currencies
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// now using for each on the set

// here the sets doesn't have keys or idx so when we assign the parameter as we have assigned in the case of map then we get value: value ,
// so here _ means a throwaway variable that means its completely unnecessary
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
*/
// --------------------147. PROJECT: Bankist App -----------
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// ----------------148. Creating Dom Elements -----------------
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

// logging in out the app is just changing the opacity in the .app class, so oppacity was set to 0 we comment it out now it's 100 that is by default.

// now we need to present the movement property of the particular account object in the .movements class
// now we will create our html template using the template literals

// movements.slice() --> This will create copy of the movements array

const displayMovements = function (movement, sort = false) {
  containerMovements.innerHTML = ''; // empty the container before adding new elements.
  // so innerHTML here is little bit similar to text content, as text content simply return the text while innerHTML returns everything including the HTML

  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    // now we need to find a way to actually adding this html onto the webpage , so we need to attach this html to the container, so for that we will use a method called insertAdjacentHTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // if we use before end then the order would be inverted as each new element will be added after the previous one.
    // so here we are adding new elements after the start of the container.
    // but what about the elements that are already present inside the container beforehand, so we need to empty the container first so before calling foreach we should empty the container.
  });
};
// displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);
// creating our application here combining all the sections

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1.movements);
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outflows = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outflows)}€`;
  // here while calculating the interest we have to filter out the values which are below 1
  // here the interest rate is hardcoded to 1.2 but we need to take it from the accounts property so in order to do that we need to paas here the entire account and not just the movements property
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((inter, i, arr) => {
      // console.log(arr);
      return inter >= 1;
    })
    .reduce((acc, inter) => acc + inter, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (acc) {
  acc.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word[0];
      })
      .join('');
  });
};
createUsernames(accounts);

// updating the ui
const updateUI = function (acc) {
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

// event handlers
// And that's because this is the button in a form element. And so in HTML, the default behavior, when we click the Submit button, is for the page to reload. So we need to stop that from happening. And for that, we need to actually give this function here, the event parameter, and let's just call it event. And you already know how this callback function gets access to this event object, remember?
let currentAccount;
btnLogin.addEventListener('click', e => {
  // prevent form from submitting
  e.preventDefault();
  // now we will be finding the accounts acc. to the user intered username and pin
  // and we will create a variable for storing that info outside of the function becoz we will use this info for mapping it with other components also for showing the data according to this account
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // if we do optional chaining here then this pin property will only be read if the current account exists.
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message to the user
    // here the currentacount.owner give me the name string which i split which gave me a array in which I accessed the first index value.
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // now everything is visible such as movements, balance etc.. but now i need to manipulate the hardcoded values
    // so now i will fetch all the data using the current account and update all the UI components.
    // fetchAccountData(currentAccount); // this function is not defined here so I will comment it out.
    // we also need to clear the login input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // we also need to remove the focus from the fields
    inputLoginPin.blur();
    // the below three line we also have to call when we are doing transfers so we will refactor the code into a funcion.

    // display movements
    // displayMovements(currentAccount.movements);
    // // display balance
    // calcDisplayBalance(currentAccount);
    // // display summary
    // calcDisplaySummary(currentAccount);

    // UPDATING THE UI
    updateUI(currentAccount);
  }
});

// implementing the transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, recieverAcc);
  // so now after sending the money we need to add a negative movment to the current user and positive movment to the reciever. and we also need to check certain condition that the sending amount should be positive and if the sender is having sufficient funds to send or not.
  // removing the focus from the input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  // at this point we dont have access the the global balance of a certain account becoz we have calculated it previously just for the ui purposes now we will create a property in the account by passing in the account itselff in the display funcion.

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer valid');
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// loan functionality
// rule: a bank will only provide the loan amount if there is atleast one deposit with at least 10% of the requested loan amount.
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    // updating the ui
    updateUI(currentAccount);
  }
  // clear the input field
  inputLoanAmount.value = '';
});

// closing an account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    console.log('close account');
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // delete account
    accounts.splice(index, 1);

    // hide ui
    containerApp.style.opacity = 0;

    // accounts.splice(index, 1);
    // here through the above line we will delete exactly one element from the index provided.
    // here the findindex is in some sort similar to .indexof method in array which is true and retruns index if the element is present in the array and returns false if the element is not present in the array.
  }
  inputCloseUsername.value = inputClosePin.value = '';
  // both the findindex and the find method also gets access to current index and the current entire array.
  // also both the findindex and the find method were added to javascript in es6 so they are not gonna work in super old browsers.
});

// implementing button handler for sorting movements
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // now this function is still not complete becoz when we click the button then the movement is sorted but when we click the button back then the movements should go back to thier original state so this can be handled by creating a state variable outside this function so that the value can be preserved after clicking the button
  sorted = !sorted;
});

//-------------------------- 151. The map Method -------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// so suppose this movements are in euro and we want to covert them to us dollar

const euroToUsd = 1.1;
// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
// now replacing the callback with the arrow functions
const movementsUSD = movements.map(mov => {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

console.log('------------------doing the above thing using for of loop');
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

// the map method has also access to all the three parameters as in : current element, index and the whole array

const movementsDescription = movements.map((mov, i) => {
  return `Movement ${i + 1}: you ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsDescription);

// it is completely acceptable that we have multiple return statements as long as only one return statement is being executed.

for (const desc of movementsDescription) console.log(desc);
// forEach method creates side effects.
*/
/*
// ------------------------152. Computing usernames -----------------------
// const user = 'Steven Thomas Williams'; //stw
// here we can directly call the map method becoz the split method returns an array.
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(word => {
//     return word[0];
//     // now the result of this map method is also an array so we can now call join method.
//   })
//   .join('');
// console.log(username);

// now creating a generalized function
// const createUsernames1 = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(word => {
//       return word[0];
//     })
//     .join('');
//   return username;
// };
// console.log(createUsernames1('Steven Thomas Williams'));

// now I want this function for all the account members and i don't need it in a new array I simply need to modify the existing array.

const createUsernames1 = function (acc) {
  acc.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word[0];
      })
      .join('');
  });
};
createUsernames1(accounts);
console.log(accounts);
*/
/*
// --------------------153. The filter method --------------------------------

// THIS IS USED TO FILTER FOR ELEMENTS THAT SATISFY A CERTAIN CONDITION

// we specify that condition using a callback function
// this filter method has also access to all the parameters like the other method , such as current element , index, and the array.

// here we only want to filter the elements which are greater than 0 so we pass just a boolean and all those elements will be passed into the new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// doing the above thing using for of loop
console.log('-----------------using for of loop ------------------');
const depositfor = [];
for (const mov of movements) {
  if (mov > 0) depositfor.push(mov);
}
console.log(movements);
console.log(depositfor);

const withdrawal = movements.filter(function (mov) {
  return mov < 0;
});
console.log('-----------------withdrawal');
console.log(withdrawal);
*/
/*
// -----------------------------154. The reduce method -----------------------
// we use the reduce method in an array to boil down all the values into a single value.

// now we need to add all the values of the movements array to get the global balance
// the reduce function also gets a callback function but this one is little bit different then the other methods, here the first parameter is something called as accumulater and this accumulater is like a snowball that keeps accumulating the value that we finally want to return.

// so the callback function is the first parameter of the reduce method but we also have a second parameter that is, the initial value of the accumulator.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (acc, mov, i, arr) {
//   console.log(`Iteration: ${i}: ${acc}`);
//   return acc + mov;
// }, 0);
// console.log(balance);

// // doing the above thing manually using the for of loop
// console.log('----------------using the for of loop');
// let balancefor = 0;
// for (const mov of movements) balancefor += mov;
// console.log(balancefor);
// so we see a common pattern in the case of for of loop that we need an external variable.

// now calculating the balance for our application
// here label is all the things where we simply need to put some text.

// const calcDisplayBalance1 = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// calcDisplayBalance1(account1.movements);

// finding the maximum value of the movements array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const maxval = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(maxval);

console.log(
  '-------------doing the above thing using for of loop ----------------'
);
let maxfor = movements[0];
for (const mov of movements) {
  if (mov > maxfor) maxfor = mov;
}
console.log(maxfor);
*/
/*
// -----------------------156. The Magic of chaining methods --------------------

// chaining methods is a powerful technique where we can chain multiple methods together to perform a sequence of operations on an array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
// pipeline
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposits);
*/
/*
// -------------------------158. The find method ----------------------
// just like all the other method the find method also accepts a callback function and also loops over all the elements, here the find method retrieves the element of the array.

// like the filter method it will accept a boolean and like the other method it will not return the whole array it will only return the first element of the array for which the boolean value is true.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
// so the differecen between the find and the filter method is that filter return all the elements that match the condition while the find method return the first element which is encountered while matching the condition. also filter method returns a new array while the find method returns the element itself.

console.log(accounts);
// so here we can basically find an object in the array based on some property of that object.

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// usually the goal of the find method is to find just one element
console.log('-------------------using the for of loop ------------');
// using the above functionality using the for of loop
for (const accn of accounts) {
  if (accn.owner === 'Jessica Davis') console.log(accn);
}
*/
// --------------------------159. Implementing login -----------------------
// written the code where all the app code is residing

// --------------------------160. Implementing transfers ---------------------
// written the code where all the app code is

// --------------------------161. The find Index Method ----------------------
// now in our application closing an account means just to simply delete the account from the accounts array and from where the index comes is from the find index method.
// so to delete and element we use the splice method and for that we need an index and that index will come from the find index method
/*
// --------------------------162. Some and every. --------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// checks for equality
console.log(movements.includes(-130));
// we can use include method to test wheter an array contain certain element, here this includes basically test for the equality means it's true only if the value in the array is exactly eqault to.
console.log(movements.some(mov => mov === -130));

// check for SOME: conditions
// so now if we want to test some condition instead then that's where the some method comes into play
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// now we will use this some method to implement loan functionality in our app.
console.log('----------------------every --------------------');

// now we will see EVERY which is a close cousine of some
// every returns true if all of the elements present in the array satisfy the condition.
console.log(movements.every(mov => mov > 0));
console.log(account4.movements);

console.log(account4.movements.every(mov => mov > 0));
console.log('----------------seprate callbacks --------------');

// seprate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/*
// -----------------------------------------163. FLAT AND FLATMAP METHOD --------------------------------
// here we have a nested array.

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr);

// now if we want all this elements to put it in one big array then we use flat method
console.log(arr.flat()); //this doesn't mutate the original array
console.log(arr);

// now if we have even deeper nested arrays
console.log('------------deeply nested array');
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep);
console.log('using flat on deeply nested array');
console.log(arrDeep.flat());
// so this means that the flat method only goes one level deeper and not more than that.
// so we can fix that by passing the depth argument in the flat method that is by default set to 1 but we can specify the depth argument explicitly here.
console.log(
  '-----------------using depth argument on flat method. =--------------------'
);

console.log(arrDeep.flat(2));

console.log('------------Movements in account ---------------------');
// now another example if the bank want to calculate the overall balance of all the movements of all the accounts.
const accountsMovement = accounts.map(acc => acc.movements);
console.log(accountsMovement);
const allMovements = accountsMovement.flat();
console.log(allMovements);
const addAllMovements = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(`sum of all movements: ${addAllMovements}`);

console.log(
  '-------doing the above thing using chaining ---------------------'
);
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
// using the map first and then flattening the array in pretty common operation.

// FLATMAP: It is a method that combines and map and flat method together, which is better for performance.
// flatmap is basically a map method that in the end only flattens the result so it takes all the parameter of the map method;

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/
// so flatmap only goes one level deeper so if you need to go more deeper then you have to use flat method instead.
/*
// ---------------------------164, Sorting Arrays ----------------------------------------
// Now we will build the functionality of sorting movements in our app.
// strings.
const owners = ['jonas', 'zach', 'adam', 'martha'];
console.log(owners.sort());
// so this will sort our array alphabetically, and also this sort method mutates our original array
console.log(owners);
// so when we are using this sort method on numbers we get wierd result because this sort method sorts elements based on strings

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort());
// so we can fix this problem when we are not working with strings by passing a compare callback function in the sort method
console.log(
  '---------------passing compare callback function -----------------'
);
console.log('Ascending order');
// return < 0, A will be before B  (Keep Order)
// return > 0, B will be before A  (Switch Order)
// the below one is for sorting in ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1; //switch order
//   if (a < b) return -1; //Keep order
// });
// improving the above code that is if a > b then a-b is something +ve similarly if b>a then a-b is something -ve
movements.sort((a, b) => a - b);
console.log(movements);

console.log('Descending order');
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

// if you have a mix of strings and numbers then this sort method is not gonna work then I advise you to simply not use sort method in these cases
*/
/*
// --------------------------------------- 165. More ways of creating and filling arrays -----------------------
// now we will see how to programatically create and fill arrays
// EMPTY ARRAYS + FILL METHOD
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// creating arrays programatically
const x = new Array(7); // it creates an array with 7 empty elements in there.
console.log(x);

// now there is only one method that we can call on this empty array
// x.fill(1);
// it basically fills the entire array with this value 1 and it also mutates the array
// so besides the value that we want to fill our array with we can also specify from where to start while filling the array and we can also specify a end parameter where it should stop filling and the end index is not included while filling the array
console.log(
  '---------------------------------------practice-------------------------'
);

// we can use this fill mehtod on filled arrays also
arr.fill(23, 4, 6);
// the above line will mutate our original array and fill it with 23 and pos. 4, 5.
console.log(arr);

// NOW if we want to create the arr array programmatically then we can use from function.
// here on array.from we are not using from as a method we are using it as a array constructor.
// so here array is a function and on that function we are calling from as a method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// here this callback function is exactly like a map method.
// here in the place of curr we can use a throwaway variable becoz we dont need this curr parameter but still we have to pass it as a first parameter
// const z = Array.from({ length: 7 }, (curr, i) => i + 1);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// array with 100 random dice roll
const diceRoll = Array.from({ length: 100 }, (curre, i) => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
});
console.log(diceRoll);
*/
//strings, maps and sets are iterables and they can be converted to real arrays using array.from and that is why it is the name of the function that we can create arrays using other things
// another good example of array like structure is queryselectorAll method which we have seen earlier which returns us with a nodelist(it is something like an array which contains all the selected elements) it is not a real array so it doesn't have methods like map, reduce etc.. and if we want to use array method on nodelist then we need to convert it first to a real array and for that array.from is perfect.

// let us assume that we do not have movement array stored in our application it is only visible in the user interface.

// so bascially we can't actually directly get all the movemets here because we have embedded html row which is being called from different accounts so we have to use this on some event listner to gett all the movements else we get only the two movements which were there by default
// const movementUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementUI);
// writing the above code in an event listner

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  ); // here as a callback we have passed in a mapping function
  // array.from also take another argument as a mapping callback so we can put the below thing as a callback

  console.log(movementUI);
  // the below one is the second way of converting a nodelist to an array so basically we can use spread operator here.
  // const movementUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementUI2);
});

// -------------- 166. Which array method to ues ---------------------
// ----------------167. Array method practive ---------------------
