let users = ["Harkirat", "Teju", "Deepu", "Karthik", "Rohit"];

console.log(users); // ["Harkirat", "Teju", "Deepu", "Karthik", "Rohit"]

// console.log(users[0]); // Harkirat
// console.log(users[1]); // Teju
// console.log(users[2]); // Deepu
// console.log(users[3]); // Karthik
// console.log(users[4]); // Rohit
// console.log(users[5]); // undefined

let totalUsers = users.length; 
console.log(totalUsers); // 5


for (let i = 0; i < totalUsers; i++) {
  console.log(users[i]); // Harkirat, Bharat, Deepu, Karthik, Rohit
}

// 1. Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS

// define a function called `getEvenNumbers` that takes an array of numbers as an input
function getEvenNumbers(numbers) {
    // using filter method to filter out even numbers from the array of numbers and store them in a new array
    let evenNumbers = numbers.filter((number) => number % 2 === 0);

    // returns a new array with only even values
    return evenNumbers;


    /*
    // using without filter method
    // define a new array to store even numbers
    let evenNumbers = [];

    // iterate over the array of numbers
    for (let i = 0; i < numbers.length; i++) {
        // check if the number is even
        if (numbers[i] % 2 === 0) {
            // add the number to the `evenNumbers` array
            evenNumbers.push(numbers[i]);
        }
    }

    // returns a new array with only even values
    return evenNumbers;
    */
}

// define an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// calls the function `getEvenNumbers` with the array of numbers as an input
console.log(getEvenNumbers(numbers)); // [2, 4, 6, 8, 10]
