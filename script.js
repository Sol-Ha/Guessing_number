"use strict";

/* method
DOM = document object model
DOM methods and properties are Webs APIs ( somewhat can be refered as libraries ) that permits JS to interact with HTML and CSS

- document.querySelector(".message") = DOM manipulation
.textContent

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = `You guessed right!`;

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = 23;
*/

// const x = function () {
//   console.log(23);
// };

let secretNumber = Math.trunc(Math.random() * 50) + 1;

let score = 20;

// ---mechanism hot and cold game---
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value);
  console.log(guess, typeof guess);

  //   if click on empty it display zero but zero is neither right, neither it is in the scope we want
  if (!guess) {
    document.querySelector(
      ".message"
    ).textContent = `Please choose between 1 and 50. `;
    document.querySelector(".message").style.color = "red";

    // if the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `You guessed right!`;
    document.querySelector(".message").style.color = "green";
    document.querySelector("#number").textContent = secretNumber;

    // if the guess is greater than the number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `You are too high, try once more! 🔥`;
      // wrong guess it substract the score tries
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost...`;
      document.querySelector(".score").textContent = 0;
    }

    // if the guess is lower than the number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `You are too low, try once more! 🧊`;
      // wrong guess it substract the score tries
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost...`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

// ---reset function---
document.querySelector("img").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  document.querySelector(".message").textContent = `Make a guess`;
  document.querySelector(".message").style.color = "white";

  document.querySelector(".score").textContent = score;

  document.querySelector("#number").textContent = `?`;
});

/* --- WHAT SHALL I DO ---

1. Establish a roll method
2. Attach it to the DOM
3. Hide the random from player 
4. Display a different message if the player is outside the scop of 1 to 50 included / Display also same messge in case no number is selected / if too high / if correct / if too low
5. Make a loop to decrease the numbers of tries
6. Establish a best score on guessing so far
7. Refresh button reinitialise the random
*/

/* CODING CHALLENGE 

Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the "again" class and attach a click event handler

2. In the handler function, restore initial values of the score and number variables

3. Restore the initial conditions of the message number, score and guess input field

4. Reset style in effect
*/
