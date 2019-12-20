/*0013. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.*/

//My answer

/*STATS
Runtime: 120 ms, faster than 99.37% of JavaScript online submissions for Roman to Integer.
Memory Usage: 39.7 MB, less than 65.96% of JavaScript online submissions for Roman to Integer.
*/

var romanToInt = function(s) {
  let arr = s.split('');
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]  === 'M') {
      arr[i] = 1000;
    }
    if (arr[i]  === 'D') {
      arr[i] = 500;
    }
    if (arr[i]  === 'C') {
      arr[i] = 100;
    }
    if (arr[i]  === 'L') {
      arr[i] = 50;
    }
    if (arr[i]  === 'X') {
      arr[i] = 10;
    }
    if (arr[i]  === 'V') {
      arr[i] = 5;
    }
    if (arr[i]  === 'I') {
      arr[i] = 1;
    }
    }
  let totaler = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i+1]) {
      totaler= totaler + arr[i]
    } else if (arr[i] < arr[i+1]) {
      let x = (arr[i + 1] - arr[i]);
     totaler = totaler + x;
      i++
    } else {
      totaler= totaler + arr[arr.length-1]
    }
  }
  return totaler;
}


// More Concise solution:
/*STATS
Runtime: 148 ms, faster than 53.73% of JavaScript online submissions for Roman to Integer.
Memory Usage: 39.8 MB, less than 51.06% of JavaScript online submissions for Roman to Integer.
*/

var romanToInt = function(s) {
     let map = { M: 1000,
              D: 500, 
              C: 100, 
              L: 50, 
              X: 10,  
              V: 5, 
              I: 1 
     }
     let sum = 0
     for (let i=0; i < s.length; i++) {
         if (i === s.length - 1) {
             sum += map[s[i]]
             break
         }
         if (map[s[i]] >= map[s[i+1]]) {
             sum += map[s[i]]
         }
         else {
             sum += map[s[i+1]] - map[s[i]]
             i += 1
         }
     }
    return sum
     
};
