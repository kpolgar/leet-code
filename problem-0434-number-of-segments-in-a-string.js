/*434. Number of Segments in a String

You are given a string s, return the number of segments in the string. 

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
Example 3:

Input: s = "love live! mu'sic forever"
Output: 4
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 300
s consists of lower-case and upper-case English letters, digits or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.*/

/*STATS Runtime: 68 ms, faster than 90.55% of JavaScript online submissions for Number of Segments in a String.
Memory Usage: 38.4 MB, less than 5.47% of JavaScript online submissions for Number of Segments in a String.*/

var countSegments = function(s) {
    let segments = 0;
    if (!s.length) {
        return segments
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (!s[i-1] || s[i-1] === ' ') {
                segments++
            }
        }
    } return segments
};

//Solution 2 Using a Regex

/*STATS Runtime: 68 ms, faster than 90.55% of JavaScript online submissions for Number of Segments in a String.
Memory Usage: 38.6 MB, less than 5.47% of JavaScript online submissions for Number of Segments in a String.*/

const countSegments = function(s) {
    if (s.trim() === "") return 0
    return s.match(/[^\s]+/g).length
}
