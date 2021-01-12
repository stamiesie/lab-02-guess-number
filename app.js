// import functions and grab DOM elements
const guessesLeft = document.getElementById('guesses-left');
const guessButton = document.getElementById('guess-button');
const guessResult = document.getElementById('guess-result');
// initialize state

let numberOfGuesses = 0;
let correctNumber = Math.ceil(Math.random() * 20);


// set event listeners to update state and DOM

guessButton.addEventListener('click', () => {
    console.log("Hello!");
})