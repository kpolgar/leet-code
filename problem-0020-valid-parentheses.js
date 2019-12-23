//20. Valid Parentheses
/*Easy
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true*/

//My Answer
/*STATS: Runtime: 48 ms, faster than 95.05% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 34.3 MB, less than 36.67% of JavaScript online submissions for Valid Parentheses.*/
var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    
  for (var c of cArr) {
        
        if (c === '[') {
          stack.push(']');
        }
        
        else if (c === '{') {
        stack.push('}');
        }
      
        else if (c === '(') {
          stack.push(')');
        }
    
        else if (c === stack[stack.length-1]) {
          stack.pop();
        }
       
        else if (stack.length === 0 || c !== stack[stack.length-1]) {
          return false;
       }
      
    }
    
    if (stack.length === 0) {
      return true;
    }
    return false;
};
