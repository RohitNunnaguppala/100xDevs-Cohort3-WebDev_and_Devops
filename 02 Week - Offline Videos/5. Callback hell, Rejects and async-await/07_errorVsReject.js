const fs=require("fs")
function afterDone(err,data){
  if(err){
    console.log("Error while reading file");
  }else{
    console.log(data)
  }
}

fs.readFile("a.txt","utf-8",afterDone);

const fs=require("fs");

function readfilepromisified(filepath){
  return new Promise(function(resolve,reject){
    fs.readFile(filepath,"utf-8",function(err,data){
      if(err){
        reject("err while reading file");
      }
      else{
        resolve(data);
      }
    });
  });
}

function ondone(data){
  console.log(data);
}
function onerror(err){
  console.log(err);
}
readfilepromisified("a.txt").then(onerror).then(ondone);
