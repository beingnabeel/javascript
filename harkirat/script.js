// const fs = require('fs');

// let users = ["hrkirat", "sameer", "raman"];
// // console.log(users[0]);
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }
// uderstand while loop
// variable numbers string s arrays
//

// we are creatig array of objects
// function starryPattern(numberOfRows) {
//   let starryString = "";
//   for (let i = 1; i < numberOfRows; i++) {
//     if (i == (numberOfRows / 2 == 0)) starryString += "*";
//   }
//   console.log(starryString);
// }

// starryPattern(8);
// you can write the code for the examples in more structured format before the session starts and explain them in the session so you can cover more examples.

// variables
// let firstName = "nabeel";
// let age = 22;
// // let users = ["nameel", "harkirat", "hritik"];
// // let user1 = "nabeel";
// // let user2 = "hritik";
// // let user3 = "harkirat";
// let car = {
//   // properties of the object
//   color: "blue",
//   model: "sedan",
//   doors: "4",
//   // methods of the object
//   startEngine: function () {
//     console.log("Engine started!");
//   },
//   accelerate: function () {
//     console.log("the car is accelerating");
//   },
//   brake: function () {
//     console.log("Brakes applied!");
//   },
// };
// // Accessing object properties
// console.log(car.color);
// console.log(car.model);
// console.log(car.doors);

// // calling object methods
// car.startEngine();
// car.accelerate();
// car.brake();

// let users = {
//   location: "india",
//   salary: 70000,
//   user1: function () {
//     console.log("Name: Nabeel Hassan");
//     console.log("45000");
//   },
//   user2: function () {
//     console.log("Name: harkirat singh");
//     console.log("35000");
//   },
//   user3: function () {
//     console.log("Name: Hritik uadav");
//     console.log("10000");
//   },
// };

// users.user1();
// users.user3();
// console.log(users.location);
// console.log(users.salary);
// function printSingleFullRow(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     str = str + "*";
//   }
//   console.log(str);
// }
// function printPartialRow(n) {
//   let;
// }

// printSingleFullRow(10);
// asynchronus function doesnt need javascript thread
// var counter = 1;
// function printCounter() {
//   console.clear();
//   console.log(counter);
//   counter = counter + 1;
// }

// setInterval(printCounter, 1000);
// when you pass a function inside a function inside a funciton
// const x = "23";
// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1999));
// function isAnagram(str1, str2) {
//   if (str1.sort() == str2.sort()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let ans = isAnagram("rasp", "pasr");

// self learning Async javascript
// console.log(" I ");
// console.log(" eat ");
// setTimeout(() => {
//     console.log(" ice cream ");
// }, 3000);
// setTimeout(() => {
//     console.log(" with a  ");
// }, 4000);
// console.log(" spoon ");

// callback

// const one = (call_two) =>{
//     call_two();
//     console.log(" step 1 is complete. please call step 2");
//     // call_two();
// };
// const two = () =>{
//     console.log(" step 2 ");
// };
// one(two);

// lets understand callback with our iceCream business with callbacks
// let stocks = {
//     fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }
// // console.log(stocks.fruits[0]);
// let order = (fruit_name, call_production) =>{
//     // console.log("order placed, please call production");
//     setTimeout(() => {
//         console.log(`Order is placed with ${stocks.fruits[fruit_name]}`);
//         call_production();
//     }, 2000);

// };
// let production = () =>{
//     // console.log("order received, starting production");
//     setTimeout(() => {
//         console.log("production has started");
//         setTimeout(() => {
//             console.log("The fruit has been chopped.");

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

//                 setTimeout(() => {
//                     console.log("The machine was started.");

//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} was selected.`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was selected as toppings.`);
//                             setTimeout(() => {
//                                 console.log("The ice cream has been served.");
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0);
// };

// order(0, production);

// front end : kitchen
// backend : store room
// ------------------------------now we will see how promises works---------------

// let stocks = {
//     fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }

// let isShopOpen = false;

// let order = (time, work) =>{
//     // now we will make the promise, first we make the order then we make the promise
//     // here in the return new promise we will write resolve and reject we dont need pending here
//     return new Promise( (resolve, reject)=>{
//         // now we will run these promises
//         if(isShopOpen){
//             setTimeout(() => {
//                 resolve( work () )
//             }, time);

//         }else{
//             reject( console.log("our shop is closed.") )
//         }

//     })
// }

// // chaining of promises

// order(2000, () => console.log(`${stocks.fruits[0]} was selected.`))
// .then(()=>{
//     return order(0, ()=> console.log("production has started."))
// })
// .then(()=>{
//     return order(2000, ()=>console.log("The fruit was chopped."))
// })
// .then(()=>{
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`);
//     })
// })

// .then(()=>{
//     return order(1000, ()=>{
//         console.log("start the machine.");
//     })
// })
// .then(()=>{
//     return order(2000, ()=>{
//         console.log(`icream was placed on ${stocks.holder[0]}`);
//     })
// })

// .then(()=>{
//     return order(3000, ()=>{
//         console.log(`${stocks.toppings[0]} was selected.`);
//     })
// })
// .then(()=>{
//     return order(2000, ()=>{
//         console.log("Ice cream has been served.");
//     })
// })

// // understanding the error handling part or catch handling
// .catch(()=>{
//     console.log("Customer Left");
// })

// // now understand the filnally handler
// .finally(()=>{
//     console.log("Day ended is closed.");
// });
// this finally handler will run whether our promises were resolved or rejected
// -------------------now understanding async and await ------------------------
// let stocks = {
//     fruits : ['strawberry', 'grapes', 'banana', 'apple'],
//     liquid : ['water', 'ice'],
//     holder : ['cone', 'cup', 'stick'],
//     toppings : ['chocolate', 'peanuts']
// }

// let isShopOpen = false;

// let order = () =>{
//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }
// order()
// .then()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exist", error);
//     }

//     finally{
//         console.log("runs code anyways.");
//     }
// }

// order()
// .then(()=>{
//     console.log("lsdjfsdjflsdjf");
// })

// understanding await keyword
// let toppings_choice = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(
//                 console.log("which topping would you love.")
//             );
//         }, 3000);
//     })
// }
// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await toppings_choice()
//     console.log("D");
//     console.log("E");
// }

// kitchen()

// console.log("doing the dishes.");
// console.log("cleaning the table.");
// console.log("taking other orders.");
// let stocks = {
//   fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let isShopOpen = false;
// let time = (ms) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// };

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.fruits[0]} was selected`);
//     await time(0);
//     console.log("start the production");
//     await time(2000);
//     console.log("cut the fruit.");
//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
//     await time(1000);
//     console.log("start the machine.");
//     await time(2000);
//     console.log(`ice cream was placed on ${stocks.holder[0]}.`);
//     await time(3000);
//     console.log(`${stocks.toppings[0]} was selected as toppings.`);
//     await time(2000);
//     console.log("ice cream has been served.");
//   } catch (error) {
//     console.log("customer left", error);
//   } finally {
//     console.log("Day ended, shop is closed.");
//   }
// }

// kitchen();

// ------------------------WEEK 1 ------------------------------
// HARKIRAT CLASS ONE 09-06-2023
// sum from 1 to 100;
// const sumRange = (num) =>{
//     if(num == 0)
//     {
//         return 0;
//     }else{
//         return sumRange(num-1)+num;
//     }
// }

// const answer = sumRange(100);
// console.log(answer);
// -------------------------------------------
// fibonacci number program
// const fib= (n)=>{
//     if(n<=1)
//     {
//         return n;
//     }else{
//         return fib(n-2)+fib(n-1);
//     }
// }

// const answer = fib(7);
// console.log(answer);
// --------------------------------------------------
// pattern creation program
// square star pattern;
/*
 *****
 *****
 *****
 *****
 *****
 */
// let print = '';
// for(let i=0; i<5; i++)
// {
//     for(let j=0; j<5; j++)
//     {

//         console.log("*");
//     }
//     console.log("\n");
// }
// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);
// ----------------------------------------------------------------READING FROM A FILE
// const calcSum = (n) => {
//     let sum = 0;
//     for(let i=0; i<=n; i++){
//         sum +=i;
//     }
//     console.log(sum);
// };
// function fileIsRead(err, fileContent){
//     calcSum(fileContent);
// };

// fs.readFile("./chocolate.txt", "utf8", fileIsRead);
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1); // Remove the last character from the display
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

const MidCards = [
  {
    link: "/live/Israel-hamas-war",
    imageSrc: "images/FirstSection/analysis.jpg",
    text: "Rishi Sunak is picking a fight on the migration issue that he probably cannot win",
    tag: "Analysis",
  },
  {
    link: "/your-link-url",
    imageSrc: "images/FirstSection/news3.jpg",
    text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
    tag: "",
  },
  {
    link: "/your-link-url",
    imageSrc: "images/FirstSection/news2.jpg",
    text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
    tag: "",
  },
  // Add more cards as needed
];

MidCards.map((card, index)=>{
  Midcard key = 
})
