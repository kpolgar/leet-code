/*693. Binary Number with Alternating Bits
Easy

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

 

Example 1:

Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101
Example 2:

Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.
Example 3:

Input: n = 1
Output: true
Explanation: The binary representation of 11 is: 1011.
Example 4:

Input: n = 2
Output: true
Explanation: The binary representation of 10 is: 1010.
Example 5:

Input: n = 3
Output: false
 

Constraints:

1 <= n <= 231 - 1*/

/*STATS Runtime: 68 ms, faster than 95.74% of JavaScript online submissions for Binary Number with Alternating Bits.
Memory Usage: 36.4 MB, less than 88.30% of JavaScript online submissions for Binary Number with Alternating Bits.*/

var hasAlternatingBits = function(n) {
    let bString = n.toString(2).split('')
    
    for (let i = 1; i < bString.length; i++) {
        if (bString[i] === bString[i-1]) {
            return false;
        }
    }
    return true;
};
