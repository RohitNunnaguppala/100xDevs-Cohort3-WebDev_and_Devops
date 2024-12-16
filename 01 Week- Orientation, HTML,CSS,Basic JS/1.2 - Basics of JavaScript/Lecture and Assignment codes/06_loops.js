// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // print 1 to 5
}

// While Loop
let j = 1;

while (j <= 5) {
    console.log(j); // print 1 to 5
    j++;
}


// array of users
let users = ["priya", "Harkirat", "Deepu", "Raju", "Rohit"];

// console.log(users[0]); // priya
// console.log(users[1]); // Harkirat
// console.log(users[2]); // Deepu
// console.log(users[3]); // Raju
// console.log(users[4]); // Rohit

// For Loop
for (let i = 0; i < 4; i++) {
    console.log(users[i]); // print priya, Harkirat, Deepu, Raju
}

let totalUsers = users.length; 

for (let i = 0; i < totalUsers; i++) {
    console.log(users[i]); // print  priya, Harkirat, Deepu, Raju, Rohit
}

// 1. Write a function called `sum` that finds the sum from 1 to a number
// define a function called `sum` that takes a number as an input and returns the sum from 1 to that number
function sum(num) {
    // define a variable called `total` and set it to 0
    let total = 0;

    // this loop runs from 1 to the input number 
    for (let i = 1; i <= num; i++) {
        // adds the value of `i` to the `total` variable
        total += i;
    }

    // returns the value of `total`
    return total;
}

// logs the value of the function `sum` with the input 5
console.log(sum(5)); // 15

// logs the value of the function `sum` with the input 10
console.log(sum(10)); // 55
