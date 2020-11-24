/*541. Reverse String II

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]*/

/*STATS Runtime: 72 ms, faster than 98.11% of JavaScript online submissions for Reverse String II.
Memory Usage: 40.5 MB, less than 79.17% of JavaScript online submissions for Reverse String II.*/

var reverseStr = function(s, k) {
    s = s.split('')
    for (let i = 0; i < s.length; i += (2*k)) {
        let part = s.slice(i,i+k);
            let pointer = part.length-1
            for (let j = i; j < i + part.length; j++) {
                s[j] = part[pointer]
                pointer--
            }
    }
    return s.join('')
};
