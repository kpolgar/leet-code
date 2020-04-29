/*258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?*/

/*STATS Runtime: 64 ms, faster than 95.02% of JavaScript online submissions for Add Digits.
Memory Usage: 36.2 MB, less than 66.67% of JavaScript online submissions for Add Digits.*/

var addDigits = function(num) {
  
    let arr = num.toString().split('')
    while (arr.length !== 1) {
        arr = arr.reduce((acc, curr) => { return Number(acc) + Number(curr)})
        arr = arr.toString().split('')
    }
    return arr
};
