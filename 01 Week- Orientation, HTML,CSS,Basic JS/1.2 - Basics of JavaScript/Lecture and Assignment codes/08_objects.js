let student = {
  name: "Rohit",
  age: 20,
  gender: "Male",
};

console.log(student); // { name: 'Rohit', age: 20, gender: 'Male' }
console.log(student.name); // Rohit
console.log(student.age); // 20
console.log(student.gender); // Male

function greet (user) {
  console.log("Hi " + user.name + ", Your age is " + user.age);
}

let user = {
    name: "Rohit",
    age: 20
}

greet(user); // Hi Rohit, you are 20 years old

function greetUser (user) {
    console.log("Hi " + user.name + ", Your age is " + user1.age + " and you are " + user1.gender);

    if (user.age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }
}

let user1 = {
    name: "Rohit",
    age: 20,
    gender: "Male"
}

greetUser(user1); // Hi Rohit, Your age is 20 and you are Male

function greetUser(user) {
    console.log("Hello " + user.name + ", You are " + user.age + " years old.");
}

let user = {
    name: "Rohit",
    age: 20
};

greetUser(user); // Hello Rohit, You are 20 years old.

function greet(user) {
    if (user.gender === "male") {
        console.log("Hi Mr " + user.name + ", your age is " + user.age);
    } else if (user.gender === "female") {
        console.log("Hi Mrs " + user.name + ", your age is " + user.age);
    } else {
        console.log("Hi " + user.name + ", your age is " + user.age);
    }
}

let user1 = {
    name: "Rohit",
    age: 20,
    gender: "male"
}

greet(user1); // Hi Mr Rohit, your age is 20

function greet(user) {
    if (user.gender === "male") {
        if (canVote(user.age)) {
            console.log("Hi Mr " + user.name + ", your age is " + user.age + " and you are eligible to vote");
        } else {
            console.log("Hi Mr " + user.name + ", your age is " + user.age + " and you are not eligible to vote");
        }
    } else if (user.gender == "female") {
        if (canVote(user.age)) {
            console.log("Hi Mrs " + user.name + ", your age is " + user.age + " and you are eligible to vote");
        } else {
            console.log("Hi Mrs " + user.name + ", your age is " + user.age + " and you are not eligible to vote");
        }
    } else {
        if (canVote(user.age)) {
            console.log("Hi " + user.name + ", your age is " + user.age + " and you are eligible to vote");
        } else {
            console.log("Hi " + user.name + ", your age is " + user.age + " and you are not eligible to vote");
        }
    }
}

function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let user2 = {
    name: "Rohit",
    age: 20,
    gender: "male"
}

greet(user2); // Hi Mr Rohit, your age is 20 and you are eligible to vote
