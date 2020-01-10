/*342. Power of Four
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
*/

/*STATS
Runtime: 76 ms, faster than 46.15% of JavaScript online submissions for Power of Four.
Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Power of Four.
*/

var isPowerOfFour = function(num) {
    if(num===1) return true;
    while(true){
        if(num/4===1){
            return true;
        }else if(num/1!==0 && num%4===0){
            num=num/4;
        }else return false;
    }
};
