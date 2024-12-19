/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str){
    let filter="";
    for(let char of str){
        if(char>="a"&&char<="z"||char>="A"&&char<="Z"||char>="0"&&char<="9"){
            filter+=char.toLowerCase();
        }
    }
    let left=0;
    let right = filter.length - 1;


    while(left<right){
        if(filter[left]!==filter[right]){
            return false;
    }
    left++;
    right--; 
    }
    return true;
}

console.log(isPalindrome("Nan"));        
console.log(isPalindrome("A man, a plan, a canal, Panama"));  
console.log(isPalindrome("Hello"));    
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("No 'x' in Nixon")); 


  
  
