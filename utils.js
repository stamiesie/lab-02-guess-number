export function compareNumbers(userNumber, correctNumber, guessResult) {
    if (userNumber === correctNumber) {
        guessResult.textContent = `You guessed correct!`;
    } else if (userNumber < correctNumber) {
        guessResult.textContent = `Higher!`;
    } else if (userNumber > correctNumber) {
        guessResult.textContent = `Lower!`;
    }
}