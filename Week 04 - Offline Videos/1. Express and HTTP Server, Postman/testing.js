// import express module using require function and store it in express variable
const express = require('express');

// create an express application using express function
const app = express();

// create a route for the root URL 
app.get("/", function(req, res) {
    // send a response to the client
    res.send("Hi there!");
});

// Start the server on port 3000
app.listen(3000);


// import express module using require function and store it in express variable
const express=require("express");
const app=express();

function sumfrom1ton(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
app.get("/",function(req,res){
       const n=req.query.n;
       const sum=sumfrom1ton(n);
       res.send("<b>sum is : "+sum+"</b>");
})
app.listen(3000);

// import express module using require function and store it in express variable
const express=require("express");
const app=express();

function sumfrom1ton(n,m){
    let sum=n+m;
    return sum;
}
app.get("/",function(req,res){
       const n=parseInt(req.query.n);
       const m=parseInt(req.query.m);
       const sum=sumfrom1ton(n,m);
       res.send("<b>sum is : "+sum+"</b>");
})
app.listen(3000);
