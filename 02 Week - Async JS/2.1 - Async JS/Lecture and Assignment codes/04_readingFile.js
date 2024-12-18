// fs is stands for file system used to read and write files in your local system 

// import an external fs module
const fs = require('fs');
const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous way of reading file
console.log(contents); 
