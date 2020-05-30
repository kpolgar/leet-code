/*172. Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.*/

/*STATS This approach fails as it cannot process large numbers*/

var trailingZeroes = function(n) {
    if (n===0) {
        return 0;
    }
    let product = n;
    while(n > 1) {
        product*=(n-1);
        n--;
    }
    console.log(product)
    let ans = product.toString()
    ans = ans.match(/[0]+$/)
    if (ans) {
        return ans[0].length;
    }
    return 0;
};

//The solution involves figuring out how many fives are in the number
/*STATS Runtime: 68 ms, faster than 46.12% of JavaScript online submissions for Factorial Trailing Zeroes.
Memory Usage: 36 MB, less than 25.00% of JavaScript online submissions for Factorial Trailing Zeroes.*/

var trailingZeroes = function(n) {
    let zeroes = 0;
    while (n >= 5) {
        zeroes+=Math.floor(n/5)
        n = Math.floor(n/5)
    }
    return zeroes
};
