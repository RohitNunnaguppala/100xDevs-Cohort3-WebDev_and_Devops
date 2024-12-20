/*
Defining your own async function

Q: Write a function that
    - Reads the contents of a file
    - Trims the extra space from the left and right
    - Writes it back to the file
*/

//callback
const fs=require("fs");
function cleanfile(filepath,cb){
  fs.readFile(filepath,"utf-8",function(err,data){
    data=data.trim();
    fs.writeFile(filepath,data,function(){
       cb();
    });
  });
}

function ondone(){
  console.log("done");
}

cleanfile("b.txt",ondone)

//promisified
const fs=require("fs");
function cleanfile(filepath,cb){
  return new Promise(function(resolve){
    fs.readFile(filepath,"utf-8",function(err,data){
      data=data.trim();
      fs.writeFile(filepath,data,function(){
        resolve();
      });
    });
  });
}

async function main(){
  await cleanfile("a.txt");
  console.log("done cleaning file");
}

main();
