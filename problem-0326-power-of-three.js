/*326. Power of Three
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
*/
//Loop Solution
 /*STATS
 Runtime: 224 ms, faster than 51.06% of JavaScript online submissions for Power of Three.
Memory Usage: 48.3 MB, less than 20.00% of JavaScript online submissions for Power of Three.
*/
var isPowerOfThree = function(num) {
    if(num===1) return true;
    if (num === 0) return false;
    while(true){
        if(num/3===1){
            return true;
        }
        else if(num%3===0){
            num=num/3;
        }else {
            return false;
        }
    }
};

//Take 2
/*STATS
Runtime: 232 ms, faster than 37.92% of JavaScript online submissions for Power of Three.
Memory Usage: 48.5 MB, less than 20.00% of JavaScript online submissions for Power of Three.*/
var isPowerOfThree = function(num) {
    if(num === 1) return true;
    let n = num.toString(3);
    if (n[0] !== '1') {
        return false
    }
    for (let i = 1; i < n.length; i++) {
        if (n[i] !== '0') {
            return false;
        }
    } return true;
};

//Take 3
/*STATS
Runtime: 196 ms, faster than 95.47% of JavaScript online submissions for Power of Three.
Memory Usage: 47.8 MB, less than 60.00% of JavaScript online submissions for Power of Three.*/

var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};
