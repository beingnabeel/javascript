'use strict';
// Selecting elements.
const score0El = document.querySelector('#score--0');
// the below one is the another way of selecting elements when we are working with ID's and not classes.
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
// selecting btns
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
// selecting current score.
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
// selecting player class
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// here we are writing numbers but js will automatically convert them to strings.
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// ----------------------- Rolling the Dice functionality --------------
// let currentScore = 0;
// we will create an active player variable which will hold the state 0 for player one and 1 for player two.
// let activePlayer = 0;
// we will put the scores of both the player in an array.
// the below one will contain the state of the game.
// let playing = true;
// const scores = [0, 0];
let scores, currentScore, activePlayer, playing;
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //   player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--acitve');
};
init();
btnroll.addEventListener('click', () => {
  if (playing) {
    // 1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    //we will manipulate src attribute to display corresponding dice image.
    diceEl.src = `dice-${dice}.png`;

    // 3. check for rolled 1: if true, switch to next player.
    if (dice !== 1) {
      // Add dice to current score.
      // we need to define the current score variable to handle the score but not inside this listner function because each time dice will be rolled we will lose previous score.
      currentScore += dice;
      // currentEl0.textContent = currentScore; //change later becoz in future we want to display this score for the whichever active player is and not only for player 1;
      // now in above we were selecting player one upfront but instead we will select the player dynamically.
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player.
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
      // I want the above five line of code exactly same for swithcing the player in the btn hold function as well so to not violate dry principle I will capture it in a function.
    }
  }
});

btnhold.addEventListener('click', () => {
  if (playing) {
    //  1. Add current score to active player score.
    scores[activePlayer] += currentScore;
    //   score[1] = score[1]+currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //   2. check if the player's score is > = 100.
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //   finish the game.
      // switch to the next player.
      switchPlayer();
    }
  }
});

// ---------------------- Resetting the game ---------------------
// btnNew.addEventListener('click', () => {
//   currentScore = 0;
//   // activePlayer = 0;
//   playing = true;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   activePlayer = 0;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add('player--active');
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   currentEl0.textContent = 0;
//   currentEl1.textContent = 0;
// });
// above one done by self : scores assingment problem faced in the array.

// from tutorial.
btnNew.addEventListener('click', init);
