/*66. Plus One
Given a non-empty array of digits representing a non-negative integer, plus
one to the integer.

The digits are stored such that the most significant digit is at the head of
the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the
number 0 itself.

Example 1:

Input: [1,2,3] Output: [1,2,4] Explanation: The array represents the integer
123. Example 2:

Input: [4,3,2,1] Output: [4,3,2,2] Explanation: The array represents the
integer 4321.*/
//Naive solution; fails the tests for large numbers

var plusOne = function(digits) {
  digits = digits.join('')
  digits = (parseFloat(digits) + 1)
  console.log(digits)
   digits = digits.toString().split('');
  for (let i = 0; i < digits.length; i++) {
    digits[i] = parseInt(digits[i], 10)
  } return digits;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

//Accepted Solution
/*STATS
Runtime: 60 ms, faster than 32.87% of JavaScript online submissions for Plus One.
Memory Usage: 33.7 MB, less than 89.36% of JavaScript online submissions for Plus One.
*/
var plusOne = function(digits) {
  for (let i = digits.length-1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    } 
  } digits.unshift(1)
  return digits;
};


