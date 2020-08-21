/*1332. Remove Palindromic Subsequences
Easy

211

441

Add to List

Share
Given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.

Return the minimum number of steps to make the given string empty.

A string is a subsequence of a given string, if it is generated by deleting some characters of a given string without changing its order.

A string is called palindrome if is one that reads the same backward as well as forward.

 

Example 1:

Input: s = "ababa"
Output: 1
Explanation: String is already palindrome
Example 2:

Input: s = "abb"
Output: 2
Explanation: "abb" -> "bb" -> "". 
Remove palindromic subsequence "a" then "bb".
Example 3:

Input: s = "baabb"
Output: 2
Explanation: "baabb" -> "b" -> "". 
Remove palindromic subsequence "baab" then "b".
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 1000
s only consists of letters 'a' and 'b'*/

//Explanation: there are 3 possibilities

//1. If string is empty, no steps needed; return 0.
//2. If string is palindrome, one step needed to remove whole string; return 1.
//3. Tricky part. Subsequence does not have to be consecutive. Remove all 'a''s in one step and remove all 'b's in another; return 2.

/*STATS Runtime: 72 ms, faster than 67.12% of JavaScript online submissions for Remove Palindromic Subsequences.
Memory Usage: 36.7 MB, less than 24.66% of JavaScript online submissions for Remove Palindromic Subsequences.*/

var removePalindromeSub = function(s) {
    let sSplit = s.split('');
    if (!s) {
        return 0;
    }
    else if (s === sSplit.reverse().join('')) {
        return 1;
    }
    else {
        return 2;
    }  
};
