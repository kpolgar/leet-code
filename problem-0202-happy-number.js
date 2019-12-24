/*202. Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any
positive integer, replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay), or it
loops endlessly in a cycle which does not include 1. Those numbers for which
this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1*/
//we should maintain a hash table of sums that have been seen before so that we don't loop forever
//next, we need to split a number into its individual digits and square each and sum each, until the sum is 1

//My Solution
/*Stats Runtime: 56 ms, faster than 94.77% of JavaScript online submissions
for Happy Number. Memory Usage: 36.2 MB, less than 38.46% of JavaScript online
submissions for Happy Number. */
var isHappy = function(n) {
    let seen = {};
     while(n!==1 && !seen[n]) {
      seen[n] = true;
      n = n.toString().split('').map(num => Math.pow(num, 2)).reduce((accumulator, value) => accumulator + value);
      //console.log(n)
    }
    if (n===1) {
      return true;
    } else {
      return false
    }
  }

console.log(isHappy(18));
