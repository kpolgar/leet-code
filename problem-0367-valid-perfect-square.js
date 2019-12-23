/*367. Valid Perfect Square
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*/

/*STATS
Runtime: 52 ms, faster than 81.87% of JavaScript online submissions for Valid Perfect Square.
Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Valid Perfect Square.
*/

var isPerfectSquare = function(num) {
    let root = Math.sqrt(num);
    console.log(root)
  if (root === Math.floor(root)) {
      return true;
  } return false;
};

//Other Solution
/*STATS
Runtime: 52 ms, faster than 81.87% of JavaScript online submissions for Valid Perfect Square.
Memory Usage: 33.8 MB, less than 75.00% of JavaScript online submissions for Valid Perfect Square.
*/
var isPerfectSquare = function(num) {
    return Number.isInteger(Math.sqrt(num))
}
