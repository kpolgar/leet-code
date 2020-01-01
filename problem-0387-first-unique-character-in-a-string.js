/*387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.*/

/*STATS
Runtime: 88 ms, faster than 83.64% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 37.8 MB, less than 80.00% of JavaScript online submissions for First Unique Character in a String.
*/
var firstUniqChar = function(s) {
    let map = {};
  
    for (let i = 0; i < s.length; i++) {
      if(!map[s[i]]) {
        map[s[i]] = 1;
      } else {
        map[s[i]] = map[s[i]] + 1;
      }
    }
  
    for (let j = 0; j < s.length; j++) {
      if (map[s[j]] === 1) {
        return j;
      }
    } return -1;
};
