import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('should return 0 when number guessed is correct', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(0, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return -1 when number guessed is less than correct number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 1 when number guessed is more than correct number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


