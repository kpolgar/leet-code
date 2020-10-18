/*1624. Largest Substring Between Two Equal Characters

Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
Example 4:

Input: s = "cabbac"
Output: 4
Explanation: The optimal substring here is "abba". Other non-optimal substrings include "bb" and "".
 

Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.*/

/*STATS Runtime: 100 ms, faster than 100.00% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
Memory Usage: 43.4 MB, less than 100.00% of JavaScript online submissions for Largest Substring Between Two Equal Characters.*/

var maxLengthBetweenEqualCharacters = function(s) {
    let map = {}
    let longest = -1
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = [i]
        } else {
            if (map[s[i]].length === 1) {
                map[s[i]].push(i)
                
            } else {
                map[s[i]].pop()
                map[s[i]].push(i)
            }
            if (map[s[i]][1] - map[s[i]][0] - 1 > longest) {
                    longest = map[s[i]][1] - map[s[i]][0] - 1
            }
        }
    } 
      return longest;
  };
