/*
Create a counter in JavaScript
Try to code a counter in 
Javascript It should go up as time goes by in intervals of 1 second
*/

let cnt=0; 

function updateCntr(){
  cnt++; 
  console.log(cnt);
};

setInterval(updateCntr, 1000);
