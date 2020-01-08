/*409. Longest Palindrome
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/*STATS
Runtime: 60 ms, faster than 75.69% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 35.3 MB, less than 80.00% of JavaScript online submissions for Longest Palindrome.
*/

var longestPalindrome = function(s) {
    let singles = 0;
    let doubles = 0;
    let sorted = s.split('').sort();
    for (let i =0; i < s.length; i++) {
        if (sorted[i] === sorted[i+1]) {
            doubles++;
            i++;
        } else {
            singles++;
        }
    }
    
    if (singles > 1) {
        singles = 1;
    } 
    return (doubles *2) + singles
};
