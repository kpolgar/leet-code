/*1780. Check if Number is a Sum of Powers of Three
Medium

Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.

 

Example 1:

Input: n = 12
Output: true
Explanation: 12 = 31 + 32
Example 2:

Input: n = 91
Output: true
Explanation: 91 = 30 + 32 + 34
Example 3:

Input: n = 21
Output: false
 

Constraints:

1 <= n <= 107*/

/*STATS Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.
Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.*/

var checkPowersOfThree = function(n) {    
    while (n > 1 && n % 3 !== 2) {
        if (n % 3 === 0) {
            n = n / 3
        } else {
            n--
        }
    }
    
    if (n === 1) {
        return true
    }
    return false;
};
