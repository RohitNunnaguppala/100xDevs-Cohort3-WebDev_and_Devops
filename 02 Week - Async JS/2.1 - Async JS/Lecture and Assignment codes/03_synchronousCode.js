// Syncronous code - code that runs line by line and waits for the current line to finish before moving to the next line

function sumofn(n){
    let sum = 0;
    for (let i=1;i<=n;i++) {
        sum+=i;
    }
    return sum;
}

let result1=sumofn(5);
console.log(result1);

let result2=sumofn(10);
console.log(result2);

let result3=sumofn(15);
console.log(result3);
