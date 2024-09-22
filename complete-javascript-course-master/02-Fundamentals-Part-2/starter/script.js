"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive :D");
// // const interface = "audio";
// // const private = 534;
// // these are reserved words wchic can be used in the future.
// function logger() {
//   console.log("My name is Jonas");
// }
// logger();
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function declaration vs function expression
// function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age = calcAge1(1999);
// console.log(age);

// // function expression
// const calcAge2 = function (birthyear) {
//   return 2023 - birthyear;
// };
// const age2 = calcAge2(2001);

// console.log(age, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1999, "Nabeel"));
// console.log(yearsUntilRetirement(2001, "Hassan"));

// funtion callling other function
// const cutFruitPieces = (fruits) => {
//   return fruits * 4;
// };
// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} of oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

// // examples of funciton calling other function.
// const calcAge = (birthYear) => {
//   return 2023 - birthYear;
// };
// const retirement = (calcAge) => {
//   return 65 - calcAge;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const serviceLeft = retirement(age);
//   if (serviceLeft > 0) {
//     return `${firstName} retires in ${serviceLeft} years.`;
//   } else {
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1999, "Nabeel"));
// console.log(yearsUntilRetirement(1950, "Hassan"));

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins * 2 >= avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins * 2} vs. ${avgKoalas})`);
//   } else if (avgKoalas * 2 >= avgDolphins) {
//     console.log(`Koalas win (${avgKoalas * 2} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// Introduction to arrays;
// const friend1 = "nabeel";
// const friend2 = "hassan";
// const friend3 = "jonas";

// const friends = ["nabeel", "hassan", "jonas"];
// console.log(friends);
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// // length -1 gives you the last element of the array
// console.log(friends[friends.length - 1]);
// friends[2] = "jay";
// console.log(friends);

// const firstName = "Nabeel";
// const nabeel = new Array(firstName, "hassan", 2023 - 2001, "student", friends);
// console.log(nabeel);

// const calcAge = (birthYear) => 2037 - birthYear;
// const Years = new Array(1990, 1967, 2002, 2010, 2018);

// const age1 = calcAge(Years[0]);
// const age2 = calcAge(Years[1]);
// const age3 = calcAge(Years[Years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(Years[0]),
//   calcAge(Years[1]),
//   calcAge(Years[Years.length - 1]),
// ];
// console.log(ages);
// const friends = new Array("Nabeel", "hassan", "jonas");
// const newLength = friends.push("jay");
// console.log(newLength);
// console.log(friends);

// const newLength2 = friends.unshift("john");
// console.log(newLength2);
// console.log(friends);

// // // Remove elements
// const remove1 = friends.pop();
// console.log(friends);
// console.log(remove1);
// const poppedFront = friends.shift();
// console.log(friends);
// console.log(poppedFront);

// const located = friends.indexOf("hassan");
// console.log(located);

// console.log(friends.indexOf("hritik"));

// console.log(friends.includes("hassan"));
// console.log(friends.includes("hrithik"));

// friends.push(23);
// console.log(friends.includes("23"));
// console.log(friends);
// const present = "jonas";
// if (friends.includes(present)) {
//   console.log(`Present at ${friends.indexOf(present)}.`);
// } else {
//   console.log(`Not present ${friends.indexOf(present)}`);
// }

/* Write your code below. Good luck! 🙂 */
// let calcTip = (bill) => {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     tip = 0.15 * bill;
//     return tip;
//   } else {
//     tip = 0.2 * bill;
//     return tip;
//   }
// };

// const bills = new Array(125, 555, 44);
// console.log(bills);
// const tips = [];

// for (let i = 0; i < bills.length; i++) {
//   const temp = calcTip([bills[i]]);
//   tips.push(temp);
// }
// console.log(tips);

// const total = [];
// for (let i = 0; i < bills.length; i++) {
//   total.push(bills[i] + tips[i]);
// }
// console.log(total);

// intorduction to objects
// const nabeelArray = new Array("nabeel", "hassan", 2023 - 1999, "student", [
//   "jonas",
//   "jay",
//   "striver",
// ]);
// console.log(nabeelArray);

// // // this way of creating objects is known as object literal syntax
// const nabeel = {
//   firstName: "nabeel",
//   lastName: "hassan",
//   birthYear: 2023 - 1999,
//   designation: "student",
//   friends: ["jonas", "jay", "striver"],
// };

// console.log(nabeel);
// // using dot notation
// console.log(nabeel.lastName);
// // using bracket notation
// console.log(nabeel["lastName"]);

// const nameKey = "Name";
// console.log(nabeel["first" + nameKey]);
// console.log(nabeel["last" + nameKey]);
// // adding the properties to the object
// nabeel.location = "noida";
// nabeel["twitter"] = "@beingnabeelhassan";
// console.log(nabeel);
// console.log(nabeel.calcAge());
// console.log(nabeel.calcAge());

// const interestedIn = prompt(
//   "what do you want to know about nabeel ? choose between firstName, lastName, birthYear, designation, friends location and twitter"
// );

// // console.log(interestedIn);jo
// // console.log(nabeel.interestedIn);   here this wont work

// if (nabeel[interestedIn]) {
//   console.log(nabeel[interestedIn]);
// } else {
//   console.log(
//     `${interestedIn} is not present. choose between firstName, lastName, birthYear, designation, friends`
//   );
// }
// console.log(
//   `${nabeel.firstName} has ${nabeel.friends.length} friends and his best friend is called ${nabeel.friends[0]}`
// );

// const nabeel = {
//   firstName: "nabeel",
//   lastName: "hassan",
//   birthYear: 1999,
//   job: "student",
//   friends: ["jonas", "jay", "striver"],
//   hasDriverLicense: true,
//   // calcAge: (birthYear) => 2023 - birthYear,
//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2023 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     const summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he ${
//       this.hasDriverLicense ? "does" : "doesnt"
//     } have a drivers license. `;
//     return summary;
//   },
// };

// console.log(nabeel.calcAge());
// console.log(nabeel["calcAge"]());
// console.log(nabeel.age);
// console.log(nabeel["age"]);
// console.log(
//   `${nabeel.firstName} is a ${nabeel.age}-year old ${nabeel.job}, and he ${
//     nabeel.hasDriverLicense ? "does" : "doesnt"
//   } have a drivers license. `
// );
// console.log(nabeel.getSummary());
// console.log(nabeel["getSummary"]());

// console.log(nabeel.calcAge(1999));
// console.log(nabeel["calcAge"](1999));
/* Write your code below. Good luck! 🙂 */
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(
//   `${
//     mark.calcBMI() > john.calcBMI()
//       ? mark.fullName +
//         "'s BMI (" +
//         mark.bmi +
//         ") is higher than " +
//         john.fullName +
//         "'s (" +
//         john.bmi +
//         ")!"
//       : john.fullName +
//         "'s BMI (" +
//         john.bmi +
//         ") is higher than " +
//         mark.fullName +
//         "'s (" +
//         mark.bmi +
//         ")!"
//   }`
// );

// iteration : the for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} .`);
// }
// const nabeelArray = [
//   "nabeel",
//   "hassan",
//   2023 - 1999,
//   "student",
//   ["jonas", "jay", "striver"],
// ];
// for (let i = 0; i < nabeelArray.length; i++) {
//   console.log(nabeelArray[i], typeof nabeelArray[i]);
// }

// const typeArray = [];
// for (let i = 0; i < nabeelArray.length; i++) {
//   typeArray.push(typeof nabeelArray[i]);
// }

// console.log(typeArray);
// const years = [1991, 2007, 1969, 2020];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   const temp = 2037 - years[i];
//   age.push(temp);
// }

// for (let i = 0; i < age.length; i++) {
//   console.log(age[i]);
// }
// console.log(age);
// const nabeelArray = [
//   "nabeel",
//   "hassan",
//   2023 - 1999,
//   "student",
//   ["jonas", "jay", "striver"],
// ];

// for (let i = 0; i < nabeelArray.length; i++) {
//   if (typeof nabeelArray[i] !== "string") continue;
//   console.log(nabeelArray[i], typeof nabeelArray[i]);
// }
// for (let i = 0; i < nabeelArray.length; i++) {
//   if (typeof nabeelArray[i] === "number") break;
//   console.log(nabeelArray[i], typeof nabeelArray[i]);
// }

// // looping backwords
// for (let i = nabeelArray.length - 1; i >= 0; i--) {
//   console.log(i, nabeelArray[i]);
// }

// const excercise = ["chest", "back", "shoulder"];
// for (let i = 0; i < excercise.length; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(`you have to do ${excercise[i]}`);
//   }
//   if (i == excercise.length - 1) break;
//   console.log("REST");
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`lifting weights repetition ${i}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE : lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 5) {
//   console.log(`you rolled a ${dice}`);
// }
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end....");
// }
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);
// const nameArray = ["Alex", "Jacob", "Mark", "Max"];
// function likes(names) {
//   // TODO
//   let ans;
//   if (nameArray.length == 0) {
//     console.log("no one likes this");
//   } else if (nameArray.length == 1) {
//     ans = `${nameArray.pop()} likes this`;
//     return ans;
//   } else if (nameArray.length == 2) {
//     ans = `${nameArray.shift()} and ${nameArray.shift()} like this`;
//     return ans;
//   } else if (nameArray.length == 3) {
//     ans = `${nameArray.shift()}, ${nameArray.shift()} and ${nameArray.shift()} like this`;
//     return ans;
//   } else if (nameArray.length() > 3) {
//     ans = `${nameArray.shift()}, ${nameArray.shift()} and ${
//       nameArray.length
//     } others like this`;
//     return ans;
//   }
// }

// likes(nameArray);

// const nameArray = ["Mark", "Max"];

// function likes(names) {
//   let ans;
//   if (nameArray.length === 0) {
//     ans = "no one likes this";
//   } else if (nameArray.length === 1) {
//     ans = `${nameArray.pop()} likes this`;
//   } else if (nameArray.length === 2) {
//     ans = `${nameArray.shift()} and ${nameArray.shift()} like this`;
//   } else if (nameArray.length === 3) {
//     ans = `${nameArray.shift()}, ${nameArray.shift()} and ${nameArray.shift()} like this`;
//   } else if (nameArray.length > 3) {
//     ans = `${nameArray.shift()}, ${nameArray.shift()} and ${
//       nameArray.length
//     } others like this`;
//   }
//   return ans;
// }

// const result = likes(nameArray);
// console.log(result);
