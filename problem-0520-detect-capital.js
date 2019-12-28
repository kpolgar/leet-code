/*520. Detect Capital

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 

Example 1:

Input: "USA"
Output: True
 

Example 2:

Input: "FlaG"
Output: False
 

Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/
/*STATS
Runtime: 60 ms, faster than 80.12% of JavaScript online submissions for Detect Capital.
Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Detect Capital.
*/
var detectCapitalUse = function(word) {
    if (word.toLowerCase() === word) {
        return true;
    }
    if (word.toUpperCase() === word) {
        return true;
    }
    if (word.substring(1).toLowerCase() === word.substring(1)) {
        return true;
    }
    return false;
};
