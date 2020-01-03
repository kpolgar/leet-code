/*1047. Remove All Adjacent Duplicates In String
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

Example 1:

Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 

Note:

1 <= S.length <= 20000
S consists only of English lowercase letters.*/

//My Solution
/*STATS
Runtime: 80 ms, faster than 62.42% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
Memory Usage: 41.8 MB, less than 100.00% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
*/

var removeDuplicates = function(S) {
    let temp = [];
    for (let i = 0; i < S.length; i++) {
        if (!temp.length) {
            temp.push(S[i])
        } else {
            if (temp[temp.length-1] === S[i]) {
                temp.pop();
            }
            else {
                temp.push(S[i])
            }
        }
    } return temp.join('')
};
