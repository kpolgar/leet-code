/*1796. Second Largest Digit in a String

Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

 

Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and/or digits.
*/

/*STATS Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Second Largest Digit in a String.
Memory Usage: 40.4 MB, less than 100.00% of JavaScript online submissions for Second Largest Digit in a String.
*/

var secondHighest = function(s) {
    let numbers = []
      for (let i = 0; i < s.length; i++) {
          if (!isNaN(Number(s[i]))) {
              numbers.push(s[i])
          }
      }
      numbers = numbers.sort(function(a,b){return b-a})
      for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] < numbers[i-1]) {
              return numbers[i]
          }
      } return -1
  };
