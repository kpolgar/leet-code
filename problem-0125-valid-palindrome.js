/*125. Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric
characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid
palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama" Output: true Example 2:

Input: "race a car" Output: false*/

//My Solution
/*STATS
Runtime: 68 ms, faster than 80.52% of JavaScript online submissions for Valid
Palindrome. Memory Usage: 38.8 MB, less than 30.43% of JavaScript online
submissions for Valid Palindrome.*/
var isPalindrome = function(s) {
    if (s === '') {
      return true;
    }
    let letters = s.toLowerCase().match(/[a-z0-9]/g);
    let beginning = 0;
    if (letters === null) {
        return true;
    }
    let end = letters.length - 1;
  
    while(beginning < end) {
      if (letters[beginning] !== letters[end]) {
        return false;
      } else {
        beginning++;
        end--;
      }
    } return true;
    
};

//Short solution
var isPalindrome = function(s) {
    let arr = s.toLowerCase().split('').filter(a=>/[a-z0-9]/i.test(a));
    return arr.join('') === arr.reverse().join('');
};
