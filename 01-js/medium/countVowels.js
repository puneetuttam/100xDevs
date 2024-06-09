/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let cnt=0;
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++){
      switch(str[i]){
        case 'a':
          cnt++;
          break;
        case 'e':
          cnt++;
          break;
        case 'i':
          cnt++;
          break;
        case 'o':
          cnt++;
          break;
        case 'u':
          cnt++;
          break;
      }
    }
    return cnt;
}

module.exports = countVowels;