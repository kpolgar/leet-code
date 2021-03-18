/*1790. Check if One String Swap Can Make Strings Equal

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
Example 4:

Input: s1 = "abcd", s2 = "dcba"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.*/

/*STATS Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
Memory Usage: 39.4 MB, less than 100.00% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.*/

var areAlmostEqual = function(s1, s2) {
    let difs1 = []
    let difs2 = []
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            difs1.push(s1[i])
            difs2.push(s2[i])
        }
        
        if (difs1.length > 2) {
            return false
        }
    }
    difs2.unshift(difs2.pop())
    
    if (difs1[0] === difs2[0] && difs1[1] === difs2[1]) {
        return true
    }
    return false
};