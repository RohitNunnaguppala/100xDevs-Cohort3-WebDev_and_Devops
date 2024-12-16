// Function Declaration - greet someone
function greet(name) {
  return "Hello, " + name;
}

// Function Call
let ans1 = greet("Rohit");
let ans2 = greet("Karthik");
let ans3 = greet("Deepak");

// log the output
console.log(ans1); // Hello, Bharat
console.log(ans2); // Hello, Harkirat
console.log(ans3); // Hello, Deepak

// Function Declaration - sum of two numbers
function sum(a, b) {
  let totalSum = a + b;

  return totalSum;
}

// Function Call
let sum1 = sum(2, 3);
let sum2 = sum(5, 10);

// log the output
console.log(sum1); // 5
console.log(sum2); // 15

// Function Declaration - can vote or not
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Function Call
let ans4 = canVote(20);
let ans5 = canVote(15);

// log the output
console.log(ans4); // true
console.log(ans5); // false

// Function Declaration - can vote or not
function canVote1(age) {
  //   if (age >= 18) {
  //     console.log("Yes, you can vote");
  //   } else {
  //     console.log("No, you can't vote");
  //   }

  if (age >= 18) {
    console.log("Yes, you can vote");
  }
  
  if (age < 18) {
    console.log("No, you can't vote");
  }
}

canVote1(20); // Yes, you can vote
canVote1(15); // No, you can't vote

// 1. Write a function sum that finds the `sum` of two numbers. 
function sum(a, b) {
    // calculates the sum of a and b and stores it in the variable `total`
    let total = a + b;

    // returns the value of `total`
    return total;
}

let ans1 = sum(5, 10);
console.log(ans1); // 15

// 2. Side quest - Try passing in a string instead of a number and see what happens?
let ans2 = sum("5", "6"); 
console.log(ans2); // 56


// 3. Write a function called `canVote` that returns true or false if the `age` of a user is > 18
function canVote(age) {
    // if age is greater than 18, it returns true, else it returns false
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

let ans3 = canVote(20);
console.log(ans3); // true
