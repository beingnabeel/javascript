'use strict';

// ------------ selcting element and setting the value and textContent using dom manipulation --------------------
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 5;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// --------------Event Listeners__________

// document.querySelector('.check').addEventListener('click', () => {
//   console.log(document.querySelector('.guess').value);
// });

// ---------now we will start slowly building our game -----------------
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.number').style.width = '30rem';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// code for our secret number
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20; //this variable is called state variable becoz this score is part of the application state which is all the data which is relevant to the application.
// let highscore = 0;
// // ----------73 section -----------
// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   //   here we want something to happen when the user didn't input any number and try to check or guess..so when the user didn't put any number it is 0 and it is a falsy value so we will take negation of it whenever there is 0.
//   // this is when no number is input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//     // this is when player wins the game
//   } else if (guess === secretNumber) {
//     // this logic is for checking whether the number we entered is matches with the radom number generated or not.
//     document.querySelector('.message').textContent = ' Correct Number';
//     document.querySelector('.number').textContent = secretNumber;
//     // for setting the highscore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     // this is when guess is  tooo high
//   } else if (guess > secretNumber) {
//     // if the score becomes neative then
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high !';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//     // this is when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// -----------------------------------------------
// coding challenge 1
/*
Implement a gmae rest funcitonality, so that the player can make a new guess! Here is how:

1. Select the element with the agian class and attatch a click event handler
2. In the handler function, restore initial values of the score and secretnumber variables 
3. Restore the initial conditions of the message, number, score and guess input feild.
4. Also restore the original background color (#222) and number width 15 rem 
*/
// done my self
// const initialScore = 20;
// document.querySelector('.again').addEventListener('click', () => {
//   document.querySelector('.score').textContent = initialScore;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').textContent = '';
//   document.querySelector('.message').textContent = 'Start guessing...';
// document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// from tutorial
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });

// -------------------------------------------------

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// // ----------73 section -----------
// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   //   here we want something to happen when the user didn't input any number and try to check or guess..so when the user didn't put any number it is 0 and it is a falsy value so we will take negation of it whenever there is 0.
//   // this is when no number is input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//     // this is when player wins the game
//   } else if (guess === secretNumber) {
//     // this logic is for checking whether the number we entered is matches with the radom number generated or not.
//     document.querySelector('.message').textContent = ' Correct Number';
//     document.querySelector('.number').textContent = secretNumber;
//     // for setting the highscore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     // this is when guess is  tooo high
//   } else if (guess > secretNumber) {
//     // if the score becomes neative then
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high !';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//     // this is when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });

// -------------------------------------self-----------------------
// ---------------------refactoring our code-----------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};
// similarly we can refactor all the other code.
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
