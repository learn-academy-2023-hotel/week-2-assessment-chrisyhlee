// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe('multipliedByThree', () => {
  it('takes in an array of numbers and returns an array with all the numbers multiplied by 3', () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
    expect(multipliedByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multipliedByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})

// ReferenceError: multipliedByThree is not defined


// b) Create the function that makes the test pass.

// Pseudo code:

// input: array of numbers
// output: array with all numbers multiplied by three
const multipliedByThree = (arr) => {
  // iterate using .map
  return arr.map((value) => {
    // multiply current value of each iteration by 3
    // return product in the new array created by .map
    return value * 3
  })
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code: