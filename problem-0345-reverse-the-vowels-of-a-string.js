/*345. Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".*/
//First Attempt
/*Runtime: 84 ms, faster than 57.77% of JavaScript online submissions for Reverse Vowels of a String.
Memory Usage: 44 MB, less than 21.43% of JavaScript online submissions for Reverse Vowels of a String.*/

var reverseVowels = function(s) {
    let vowels = []
  for (let i = s.length-1; i >= 0; i--) {
     if (s[i].toLowerCase() === 'a' || s[i].toLowerCase() === 'e' || s[i].toLowerCase() === 'i' || s[i].toLowerCase() === 'o' || s[i].toLowerCase() === 'u') {
         vowels.push(s[i])
     }
  }
    let index = 0;
    s=s.split('')
    for (let i = 0; i < s.length; i++) {
     if (s[i].toLowerCase() === 'a' || s[i].toLowerCase() === 'e' || s[i].toLowerCase() === 'i' || s[i].toLowerCase() === 'o' || s[i].toLowerCase() === 'u') {
            s[i] = vowels[index];
            index++
        }
    } return s.join('');
  
};

//Second Attempt
/*STATS Runtime: 76 ms, faster than 81.38% of JavaScript online submissions for Reverse Vowels of a String.
Memory Usage: 39 MB, less than 92.86% of JavaScript online submissions for Reverse Vowels of a String.*/

var reverseVowels = function(s) {
  let map = {
    "a":true, 
    "e":true, 
    "i":true, 
    "o":true, 
    "u":true,
    "A":true, 
    "E":true, 
    "I":true, 
    "O":true, 
    "U":true
  }; 
  s = s.split('');
  let right = s.length-1;
  let left = 0;
  
  while (right > left) {
      if (!map[s[left]]) {
          left++
          
      }
      if (!map[s[right]]) {
          right--
      }
      if (map[s[left]] && map[s[right]]) {
          let temp = s[left];
          s[left] = s[right];
          s[right] = temp;
          left++;
          right--
      }
  } return s.join('')
  
};
