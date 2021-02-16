/*1758. Minimum Changes To Make Alternating Binary String

You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.

 

Example 1:

Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.
Example 2:

Input: s = "10"
Output: 0
Explanation: s is already alternating.
Example 3:

Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
 

Constraints:

1 <= s.length <= 104
s[i] is either '0' or '1'.*/

/*STATS Runtime: 68 ms, faster than 99.05% of JavaScript online submissions for Minimum Changes To Make Alternating Binary String.
Memory Usage: 38.9 MB, less than 86.67% of JavaScript online submissions for Minimum Changes To Make Alternating Binary String.*/

 var minOperations = function(s) {
    let ops1 = 0
    let ops2 = 0
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) { //odd position in s
            if (s[i] !== '1') {
                ops1++
            } else {
                ops2++
            }
        }
        
        if (i % 2 === 0) { //even position in s
            if (s[i] !== '0') {
                ops1++
            } else {
                ops2++
            }
        }
    }  
    return Math.min(ops1, ops2)
};
