const fs=require("fs");
fs.readFile('a.txt','utf-8',(err,data)=>{
  if(err){
    if(err.code=='ENOENT'){
       console.log('Error:File not found!');
    }
    else{
        console.log('Error reading file: ',err);
    }
    return;
  }
  console.log('file contents: ',data);
});

const expensiveOperation = () => {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { 
      sum += i;
    }
    console.log('Expensive operation done');
  };
  
  
  expensiveOperation();
