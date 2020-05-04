/*821. Shortest Distance to a Character

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.*/

/*STATS Runtime: 60 ms, faster than 93.38% of JavaScript online submissions for Shortest Distance to a Character.
Memory Usage: 35.9 MB, less than 33.33% of JavaScript online*/

var shortestToChar = function(S, C) {
    let chars = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            chars.push(i)
        }
    }
    let pointer1 = 0;
    let pointer2 = 1;
    let answer = []
   
    for (let i = 0; i < S.length; i++) {
        if (chars.length === 1) {
            answer.push(Math.abs(chars[pointer1]-i))
        }
        else {
           if (chars[pointer2] < i && chars[pointer2 + 1]) {
            pointer1++;
            pointer2++;
            }
            let min = Math.min(Math.abs(chars[pointer1]-i), Math.abs(chars[pointer2]-i))
            answer.push(min) 
        } 
    } 
    return answer;
};
