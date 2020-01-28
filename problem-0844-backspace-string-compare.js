/*844. Backspace String Compare

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?*/
/*STATS
Runtime: 60 ms, faster than 63.16% of JavaScript online submissions for Backspace String Compare.
Memory Usage: 35.8 MB, less than 33.33% of JavaScript online submissions for Backspace String Compare.
*/

var backspaceCompare = function(S, T) {
    let longer = Math.max(S.length, T.length);
    let sTemp = '';
    let tTemp = '';
    for (let i = 0; i < longer; i++) {
        if (S[i] && S[i] !== '#') {
            sTemp = sTemp + S[i];
        }
        if (S[i] === '#') {
            sTemp = sTemp.substring(0, sTemp.length-1);
        }
        if (T[i] && T[i] !== '#') {
            tTemp = tTemp + T[i];
        }
        if (T[i] === '#') {
            tTemp = tTemp.substring(0, tTemp.length-1);
        }
    } 
 
  return sTemp === tTemp
};
