// const express = require("express");
// const app = express();
// const port = 3000;
// function sum(counter) {
//   let sum = 0;
//   for (let i = 0; i < counter; i++) {
//     sum += i;
//   }
//   return sum;
// }
// // function handleFirstRequest(req, res) {
// //   let calculatedSum = sum(100);
// //   console.log(calculatedSum);
// //   let answer = "the sum is " + calculatedSum;
// //   res.send(answer);
// // }
// function handleFirstRequest(req, res) {
//   console.log(req.headers);
//   let counter = req.query.counter;
//   let calculatedSum = sum(counter);
//   console.log(calculatedSum);
//   let answer = "the sum is " + calculatedSum;
//   res.send(answer);
// }

// // app.get("/handleSum", handleFirstRequest);
// // function started() {
// //   console.log(`Example app listening on port ${port}`);
// // }

// app.post("/handleSum", handleFirstRequest);
// function started() {
//   console.log(`Example app listening on port ${port}`);
// }

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });
// app.listen(port, started);
// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });

// // let calculatedSum = sum(100);
// // console.log(calculatedSum);
// // const fs = required("fs");
// -------------------------
// start week2 (saturday)

// script.js
