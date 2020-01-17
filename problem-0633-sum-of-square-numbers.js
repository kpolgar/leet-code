/*633. Sum of Square Numbers
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:

Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
 

Example 2:

Input: 3
Output: False
*/
/*STATS
Runtime: 52 ms, faster than 93.88% of JavaScript online submissions for Sum of Square Numbers.
Memory Usage: 34.6 MB, less than 66.67% of JavaScript online submissions for Sum of Square Numbers.
*/

var judgeSquareSum = function(c) {
    for (let i=0; i * i <= c; i++) {
        let num = Math.sqrt(c-(i*i))
        if (num === Math.floor(num)) {
            return true;
        }
    } return false;
};
