import { compareNumbers } from './utils.js';

// import functions and grab DOM elements
const guessesLeft = document.getElementById('guesses-left');
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const guessResult = document.getElementById('guess-result');

// initialize state

let correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);
let numberOfGuesses = 4;


// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    --numberOfGuesses;
    guessesLeft.textContent = numberOfGuesses;

    compareNumbers(Number(userGuess.value), correctNumber, guessResult);




    // let userNumber = (Number(userGuess.value));
    // if (userNumber === correctNumber) {
    //     guessResult.textContent = `You guessed correct!`;
    // } else if (userNumber < correctNumber) {
    //     guessResult.textContent = `Higher!`;
    // } else if (userNumber > correctNumber) {
    //     guessResult.textContent = `Lower!`;
    // }
})