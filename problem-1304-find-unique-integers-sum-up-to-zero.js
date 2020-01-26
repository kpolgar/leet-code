/*1304. Find N Unique Integers Sum up to Zero
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]*/

/*STATS
Runtime: 60 ms, faster than 65.90% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
*/

var sumZero = function(n) {
    const unique = [];
    //strategy is to find the halfway point
    //keep adding numbers and their negative counterparts so that sum during each loop is 0
    const halfNum = parseInt(n / 2);
    
    for (let i = 1; i <= halfNum; i++) {
        unique.push(i);
        unique.push(-i);
    }
    
    if (n % 2 !== 0) { //if the number is odd, you will be short a number, simply push 0
        unique.push(0);
    }
    
    return unique;
};
