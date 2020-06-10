/*22. Generate Parentheses
Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]*/

/*STATS Runtime: 60 ms, faster than 61.02% of JavaScript online submissions for Generate Parentheses.
Memory Usage: 36.5 MB, less than 28.37% of JavaScript online submissions for Generate Parentheses.*/

var generateParenthesis = function(n) {
    const answer = [];  
    
    let generateSolution = (leftP, rightP, string) => {
        if (leftP > rightP) {
        return
        }
        if (!leftP && !rightP) {
            answer.push(string)
        }
        if (leftP > 0) {
            generateSolution(leftP-1, rightP, string + "(")
        }
        if (rightP > 0) {
            generateSolution(leftP, rightP-1, string + ")")
        }
    }
    generateSolution(n,n,'');
    return answer;
    
};
