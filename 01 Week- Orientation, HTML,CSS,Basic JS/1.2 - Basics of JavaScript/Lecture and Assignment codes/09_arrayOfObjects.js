let arr = [
  "Rohit",
  21,
  {
    name: "Rohit",
    age: 21,
    cities: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      {
        country: "India",
        population: 1500000000,
      },
    ],
  },
];

console.log(arr[0]); // Rohit
console.log(arr[1]); // 21
console.log(arr[2]); // { name: 'Rohit', age: 21, cities: [ 'Delhi', 'Mumbai', 'Bangalore', { country: 'India', population: 1500000000 } ] }
console.log(arr[2].name); // Bharat
console.log(arr[2].age); // 21
console.log(arr[2].cities); // [ 'Delhi', 'Mumbai', 'Bangalore', { country: 'India', population: 1500000000 } ]
console.log(arr[2].cities[0]); // Delhi
console.log(arr[2].cities[1]); // Mumbai
console.log(arr[2].cities[2]); // Bangalore
console.log(arr[2].cities[3]); // { country: 'India', population: 1500000000 }
console.log(arr[2].cities[3].country); // India
console.log(arr[2].cities[3].population); // 1500000000


// Create a function that takes an array of objects as an input, and returns the users whose age > 18 and are male
let users = [
  {
    name: "Rohit",
    age: 21,
    gender: "male",
  },
  {
    name: "Priya",
    age: 22,
    gender: "female",
  },
  {
    name: "Rani",
    age: 15,
    gender: "female",
  },
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Rahul",
    age: 17,
    gender: "male",
  },
];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

function getEligibleUsers(users) {
  let ans = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].gender === "male") {
      ans.push(users[i]);
    }
  }

  return ans;
}

let allUsers = getEligibleUsers(users);
console.log(allUsers); 

// 1. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


// define a function called `getAdultUsers` that takes an array of users as an input
function getUsers(users) {
  // using filter method to filter out users who are more than 18 years old and store them in a new array
  let adultUsers = users.filter((user) => user.age > 18);

  // returns only the users who are more than 18 years old
  return adultUsers;
}

// define an array of users
let users = [
  { name: "Rohit", age: 21 },
  { name: "Deepak", age: 17 },
  { name: "Harkirat", age: 27 },
  { name: "Raj", age: 15 },
  { name: "Niraj", age: 20 },
];

// calls the function `getAdultUsers` with the array of users as an input
console.log(getUsers(users)); // [ { name: 'Bharat', age: 21 }, { name: 'Harkirat', age: 27 }, { name: 'Niraj', age: 20 } ]
