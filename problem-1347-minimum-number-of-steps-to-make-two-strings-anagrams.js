/*1347. Minimum Number of Steps to Make Two Strings Anagram
Medium

Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 
Example 4:

Input: s = "xxyyzz", t = "xxyyzz"
Output: 0
Example 5:

Input: s = "friend", t = "family"
Output: 4
 

Constraints:

1 <= s.length <= 50000
s.length == t.length
s and t contain lower-case English letters only.*/

/*STATS Runtime: 136 ms, faster than 73.33% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
Memory Usage: 44.3 MB, less than 6.06% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.*/

var minSteps = function(s, t) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }
    let counter = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            counter++
        }
        else {
            map[t[i]]--
        }
    }
    
    return counter
};
