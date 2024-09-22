"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
    printBookInfo: function ({ title, author, year = "year unknown" }) {
      console.log(`${title} by ${author}, ${year}}`);
    },
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
/*
// destructuring arrays assignment 
// sol 1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// soln 2
const [, , thirdBook] = books;
console.log(thirdBook);

// sol 3
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// sol 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/
/*
// destructuring objects assignment

// sol 2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// sol 2.2

const { keywords: tags } = books[0];
console.log(tags);

// sol 2.3
const { language, programmingLanguage = "unknown" } = books[6];
console.log(language, programmingLanguage);

// sol 2.4
let bookTitle = "unknown";
let bookAuthor = "unknown";
console.log(bookTitle, bookAuthor);
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// sol 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

// sol 2.6

books[0].printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});

books[0].printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });
*/

/*
// the spread operator assignment
// 3.1 soln
const bookAuthors = { ...books[0].author, ...books[1].author };
console.log(bookAuthors);

// 3.2 soln

const spellword = function (...word) {
  console.log(...word);
};

const inputword = prompt("Enter the word");

spellword(...inputword);
*/
/*
// Rest pattern and parameters
// 4.1 soln
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);
// 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);
// 4.3

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
*/
/*
// ----------short circuiting assignment ---------------
// 5.1 soln
function hasExamplesInJava(book) {
  return book.programmingLanguage === "Java" || "no data availabel";
}
const answer = hasExamplesInJava(books[0]);
console.log(answer);

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online contest. `);
}

*/
/*
// ---------nullish coalescing operator assignment --------------

// soln 6.1
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??= console.log(
    `"${books[i].title}" provides no data about its online content`
  );
}

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title} provides no data about its online content"`
    );
}
*/
/*
// ---------------Logical Assignment operator assignment --------------
// sol 7. 1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ??= 1;
// }

// for (let i = 0; i < books.length; i++) {
//   console.log(`${books[i].title} has edition ${books[i].edition}`);
// }

// sol 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted ??= !(books[i].thirdParty.goodreads.rating < 4.2);
}

for (let i = 0; i < books.length; i++) {
  console.log(`${books[i].title} has highlighted ${books[i].highlighted}
  }`);
}

console.log(`${books[0].thirdParty.goodreads.rating < 4.2} `);
console.log(`(books[i].thirdParty.goodreads.rating < 4.2`);
*/

// --------------coding challenge 1 ----------------------

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "nabeel"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  // task 6
  printGoals: function (mainPlayers, ...restPlayers) {
    const totalPlayers = [mainPlayers, ...restPlayers];

    console.log(`${mainPlayers} has total score ${totalPlayers.length}`);
    for (let i = 0; i < restPlayers.length; i++) {
      console.log(`${restPlayers[i]} has total score ${totalPlayers.length}`);
    }
  },
};

// ------------coding challenge -------------
// task 1
console.log("-------------task 1-------------");
const [players1, players2] = game.players;
console.log(players1, players2);

// task 2
console.log("-------------task 2--------------");
// here instead of the game.players[0] we can use the players1 array that we previously created using destructuring.
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

// task 3
console.log("------------------task 3-----------");
// so here also we can use the player 1 and 2 array which was created instead of the game.players
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// task 4
console.log("--------------------task 4 ---------------------");
const players1final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1final);

// task 5
console.log("--------------------- task 5 -----------------");
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// task 6
console.log("-----------------task 6 --------------");

game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
game.printGoals(...game.scored);

// ---------tutorial solution --------------
console.log("------------task 6 tut solution ------------------");
const printGoalsTutorial = function (...player) {
  console.log(`${player.length} goals were scored.}`);
};
printGoalsTutorial("Davies", "Muller", "Lewandowski", "Kimmich");
printGoalsTutorial("nabeel", "Aditya");
printGoalsTutorial(...game.scored);

// task 7
console.log("------------------------task 7 ----------------");

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// --------------------coding challenge 2----------
console.log("-----------CODING CHALLENGE 2-----------------");

console.log("---------------task 1--------------");
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }

// using menu entries
// for (const item of game.scored.entries()) {
//   console.log(`Goal ${item[0] + 1}: ${item[1]}`);
// }

// using destructuring
for (const [idx, ele] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${ele}`);
}

console.log("--------------------task 2----------------");
const averageOdds = Object.values(game.odds);
console.log(averageOdds);

let avg = 0;
for (const item of averageOdds) avg += item;

console.log(`The average is ${avg / averageOdds.length}`);

console.log("--------------------task 3-----------------");

const printOdd = Object.entries(game.odds);
console.log(printOdd);
for (const [team, odd] of printOdd) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// -----------------Optional task 4----------------

console.log("----------------task 4----------------");
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

for (const [player, score] of Object.entries(scorers)) {
  console.log(`${player}: ${score}`);
}

// coding challenge 3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log("-----------CODING CHALLENGE 3 ------------------");

// const eventsSet = new Set();
// for (const [key, value] of gameEvents) eventsSet.add(value);
// console.log(eventsSet);
// const events = [...eventsSet];
// console.log(events);
// another method
// first converting map values to array
const eventsArr = [...gameEvents.values()];
console.log(eventsArr);
// then creating unique values from that array using set and at the same time putting it in array
const events = [...new Set(eventsArr)];
console.log(events);

console.log("-----------------task 2------------------");
gameEvents.delete(64);
console.log(gameEvents);

console.log("-------------------task 3----------------");

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// making it better
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

console.log("--------------TASK 4 ------------------");

for (const [key, value] of gameEvents) {
  const timeStr = key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${timeStr}${key}: ${value}`);
}

// coding challenge 3 ----------------------------------------
console.log("-----------------------Coding challenge 3---------------------");

// const camelProduce = function (test) {
//   const indiWords = test.toLowerCase().split("\n");
//   const newStr = "";
//   for (const word of indiWords) {
//   }
//   console.log(indiWords);
// };
// const testData =
//   "underscore_case\n  first_name  \nSome_Variable   \ncalculate_AGE   \ndelayed_departure";
// camelProduce(testData);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
