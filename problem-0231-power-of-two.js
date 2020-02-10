/*231. Power of Two
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false*/

/*STATS Runtime: 72 ms, faster than 75.26% of JavaScript online submissions for Power of Two.
Memory Usage: 35.5 MB, less than 53.85% of JavaScript online submissions for Power of Two.
*/

var isPowerOfTwo = function(n) {

    if(n===1) return true;
    while(true){
        if(n/2===1){
            return true;
        }else if(n/1!==0 && n%2===0){
            n=n/2;
        }else return false;
    }
    
};
