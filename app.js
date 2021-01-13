import { compareNumbers } from './utils.js';


const guessesLeft = document.getElementById('guesses-left');
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const guessResult = document.getElementById('guess-result');


let correctNumber = Number(Math.ceil(Math.random() * 20));
console.log(correctNumber);
let numberOfGuesses = 4;


guessButton.addEventListener('click', () => {
    const userNum = Number(userGuess.value);
    --numberOfGuesses;
    guessesLeft.textContent = numberOfGuesses;


    if (compareNumbers(userNum, correctNumber) === 0) {
        guessResult.textContent = `You got it!`;
    } else if (compareNumbers(userNum, correctNumber) === -1) {
        guessResult.textContent = `Too low!`;
    } else if (compareNumbers(userNum, correctNumber) === 1) {
        guessResult.textContent = `Too high!`;
    }


    if (numberOfGuesses === 0) {
        guessResult.textContent = `Better luck next time!`;
        guessButton.disabled = true;
    }
    if (Number(userGuess.value) === correctNumber) {
        guessButton.disabled = true;
    }
});