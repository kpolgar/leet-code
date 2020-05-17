/*69. Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.*/

/*STATS Runtime: 76 ms, faster than 55.90% of JavaScript online submissions for Sqrt(x).
Memory Usage: 35.6 MB, less than 72.22% of JavaScript online submissions for Sqrt(x).*/

var mySqrt = function(x) {
  return Math.floor(Math.sqrt(x)) 
};

//Second Attempt

/*STATS Runtime: 96 ms, faster than 25.04% of JavaScript online submissions for Sqrt(x).
Memory Usage: 35.8 MB, less than 36.11% of JavaScript online submissions for Sqrt(x).*/

var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let counter = 2; 
    
    while (counter * counter <= x) {
        counter++
    }
    return counter-1;
};

//Third Attempt: Binary Search

/*STATS Runtime: 76 ms, faster than 55.90% of JavaScript online submissions for Sqrt(x).
Memory Usage: 35.6 MB, less than 72.22% of JavaScript online submissions for Sqrt(x).*/

var mySqrt = function(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let start = 0; 
    let end = x/2;
    let mid;
    let ans;
    
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (mid * mid === x) {
            return mid;
        }
        else if (mid * mid < x) {
            start = mid + 1;
            ans = mid
        }
        else {
            end = mid-1
        }
    }
    return ans;
};
