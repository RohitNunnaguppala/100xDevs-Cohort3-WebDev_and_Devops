// import an external fs module
const fs = require('fs');

const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous way of reading file
console.log(contents); 
