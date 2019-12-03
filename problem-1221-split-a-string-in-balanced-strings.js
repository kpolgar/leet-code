/*1221. Split a String in Balanced Strings Balanced strings are those who have
equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
Example 4:

Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 

Constraints:

1 <= s.length <= 1000
s[i] = 'L' or 'R'*/

/*STATS Runtime: 48 ms, faster than 96.24% of JavaScript online submissions
for Split a String in Balanced Strings. Memory Usage: 33.9 MB, less than
100.00% of JavaScript online submissions for Split a String in Balanced
Strings.*/

var balancedStringSplit = function(s) {
    let numBalancedStrings = 0;
    let rCount = 0;
    let sCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            rCount++
            if (rCount === sCount && rCount !== 0) {
                numBalancedStrings++;
                rCount = 0;
                sCount = 0;
            }
        } else {
            sCount++;
            if (rCount === sCount && rCount !== 0) {
                numBalancedStrings++;
                rCount = 0;
                sCount = 0;
            }
        }
    } return numBalancedStrings;
