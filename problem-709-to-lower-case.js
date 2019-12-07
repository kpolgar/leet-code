/*709. To Lower Case
Implement function ToLowerCase() that has a string parameter str, and
returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

//My Solution
/*STATS
Runtime: 48 ms, faster than 87.16% of JavaScript online submissions for To Lower Case.
Memory Usage: 33.9 MB, less than 23.08% of JavaScript online submissions for To Lower Case.
Next challenges:*/
//My Solution 
var toLowerCase = function(str) {
    return str.toLowerCase()
};

//My Alternate Solution
/*STATS Runtime: 56 ms, faster than 34.84% of JavaScript online submissions
for To Lower Case. Memory Usage: 33.7 MB, less than 94.87% of JavaScript
online submissions for To Lower Case. */
var toLowerCase = function(str) {
     str=str.split('')
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
        let char = str[i].charCodeAt(0) + 32;
        char = String.fromCharCode(char)
        str[i] = char;
      } else {
        continue;
      } 
    } return str.join('')
};
