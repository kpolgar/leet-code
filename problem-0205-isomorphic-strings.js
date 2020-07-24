/*205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:

You may assume both s and t have the same length.*/

/*STATS Runtime: 88 ms, faster than 55.19% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 39.3 MB, less than 21.17% of JavaScript online submissions for Isomorphic Strings.*/

var isIsomorphic = function(s, t) {
    let map_S_To_T = {};
    let map_T_To_S = {};
    for (let i = 0; i < s.length; i++) {
        if (!map_S_To_T[s[i]]) {
            map_S_To_T[s[i]] = t[i]
        } else {
            if ( map_S_To_T[s[i]] !== t[i]) {
                return false;
            }
        }
       
         if (!map_T_To_S[t[i]]) {
            map_T_To_S[t[i]] = s[i]
        } else {
            if ( map_T_To_S[t[i]] !== s[i]) {
                return false;
            }
        }
       
    }
    return true;  
};
