/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
    if (typeof str1!=='string'||typeof str2!=='string'){
        return false;
    }

    function sortString(str){
        return str.toLowerCase().split('').sort().join(''); 
    }

    return sortString(str1)===sortString(str2);
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   
console.log(isAnagram("Triangle", "Integral")); 
console.log(isAnagram("spar", "rasp"));     
console.log(isAnagram("apple", "pale"));    
console.log(isAnagram("a gentleman", "elegant man"));
console.log(isAnagram("123", "231"));       
console.log(isAnagram("123", "456"));       

