const express = require('express')
const app = express()

// let todos=[];

// app.post("/",function(req,res){
//     todos.push({
//       title:"learn node.js",
//       id:1
//     });
// });

// app.delete("/",function(req,res){
//    res.send(todos);
// });

// app.get("/asd",function(req,res){
//    res.send("rohit");
// });


app.get("/", (req, res) => {
   res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
   res.send("About Page");
});

app.post("/", function (req, res) {
   res.send("Hello World! from the POST request");
});

app.listen(3000);

