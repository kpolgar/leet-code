/*168. Excel Sheet Column Title

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
Example 4:

Input: columnNumber = 2147483647
Output: "FXSHRXW"
 

Constraints:

1 <= columnNumber <= 231 - 1*/

/*STATS Runtime: 76 ms, faster than 67.03% of JavaScript online submissions for Excel Sheet Column Title.
Memory Usage: 38.7 MB, less than 10.62% of JavaScript online submissions for Excel Sheet Column Title.*/

var convertToTitle = function(n) {
    const digits = [];
    while (n > 0) {
      digits.unshift((n - 1) % 26);
      n = Math.trunc((n - 1) / 26);
    }
    return String.fromCharCode(...digits.map(d => d + 65));
};

/*STATS Runtime: 68 ms, faster than 98.17% of JavaScript online submissions for Excel Sheet Column Title.
Memory Usage: 38.4 MB, less than 56.78% of JavaScript online submissions for Excel Sheet Column Title.*/

var convertToTitle = function(n) {
    const digits = [];
    while (n > 0) {
      digits.unshift((n - 1) % 26);
      n = Math.trunc((n - 1) / 26);
    }
      
      for (let i = 0; i < digits.length; i++) {
          digits[i] = String.fromCharCode(digits[i] + 65)
      }
    return digits.join('')
};
