/*680. Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.*/

/*STATS Runtime: 72 ms, faster than 97.28% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 43 MB, less than 25.00% of JavaScript online submissions for Valid Palindrome II.*/

var validPalindrome = function(s) {
    if (s.length === 1) {
        return true;
    }
    
    let left = 0;
    let right = s.length - 1;
    
    function isValid(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l += 1;
            r -= 1;
        }
        return true;
    }
    
    while (left < right) {
        if (s[left] !== s[right]) {
            
            if (isValid(left + 1, right)) {
            return true;
            }
        
            if (isValid(left, right - 1)) {
                return true;
            }
        
            return false;
                        
        }
        left += 1;
       right -= 1;
        
    }
    
    return true;
};
