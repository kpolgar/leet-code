/*1784. Check if Binary String Has at Most One Segment of Ones

Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

 

Example 1:

Input: s = "1001"
Output: false
Explanation: The ones do not form a contiguous segment.
Example 2:

Input: s = "110"
Output: true
 

Constraints:

1 <= s.length <= 100
s[i]​​​​ is either '0' or '1'.
s[0] is '1'.*/

/*STATS Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.*/

var checkOnesSegment = function(s) {
    
    let onesAllowed = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' && !onesAllowed) {
            return false;
        }
        
        if (s[i] === '0') {
            onesAllowed = false
        }
    }
    
    return true;
};
