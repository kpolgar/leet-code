/*1021. Remove Outermost Parentheses

A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
 

Note:

S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string*/

/*STATS Runtime: 72 ms, faster than 82.53% of JavaScript online submissions for Remove Outermost Parentheses.
Memory Usage: 37.2 MB, less than 80.68% of JavaScript online submissions for Remove Outermost Parentheses.*/

var removeOuterParentheses = function(S) {
    let sum = 0;
    let breakIndex = 0;
    let tempArr = []
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
           sum += 1
        }
        if (S[i] === ')') {
            sum += -1
        }
        if (sum === 0) {
            let temp = S.substring(breakIndex + 1, i);
            tempArr.push(temp)
            breakIndex = i+1
        }
    } 
    return tempArr.join('');
};
