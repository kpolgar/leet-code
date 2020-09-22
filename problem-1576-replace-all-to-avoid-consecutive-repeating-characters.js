/*1576. Replace All ?'s to Avoid Consecutive Repeating Characters

Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

 

Example 1:

Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
Example 2:

Input: s = "ubv?w"
Output: "ubvaw"
Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
Example 3:

Input: s = "j?qg??b"
Output: "jaqgacb"
Example 4:

Input: s = "??yw?ipkj?"
Output: "acywaipkja"
 

Constraints:

1 <= s.length <= 100

s contains only lower case English letters and '?'.*/

/*STATS Runtime: 76 ms, faster than 82.61% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
Memory Usage: 38.4 MB, less than 23.91% of JavaScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.*/

var modifyString = function(s) {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            if (arr[i-1] !== 'a' && arr[i+1] !== 'a') {
                arr[i] = 'a'
            }
            else if (arr[i-1] !== 'b' && arr[i+1] !== 'b') {
                arr[i] = 'b'
            }
            else {
                arr[i] = 'c'
            }
            
        }
    } return arr.join('')
};
