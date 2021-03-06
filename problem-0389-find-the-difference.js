/*389. Find the Difference
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.*/
/*STATS
Runtime: 64 ms, faster than 55.59% of JavaScript online submissions for Find the Difference.
Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Find the Difference.
*/
var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    
    for (let i = 0; i < t.length; i++) {
         if (s[i] !== t[i]) {
        return t[i]
        }
    }
};
