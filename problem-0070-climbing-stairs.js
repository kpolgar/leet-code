/*70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step*/

/*STATS Runtime: 56 ms, faster than 56.50% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 33.1 MB, less than 86.33% of JavaScript online submissions for Climbing Stairs.*/

var climbStairs = function(n) {
    function stepCounter(stepsLeft, memoized) {
        if (stepsLeft === 0) {
            return 1;
        }
        if (stepsLeft < 0) {
            return 0;
        }
        if (memoized[stepsLeft]) {
            return memoized[stepsLeft]
        }
        //if none of the above conditions are met, we need to call our stepCounter recursively and save it to memoized
        memoized[stepsLeft] = stepCounter(stepsLeft-1, memoized) + stepCounter(stepsLeft-2, memoized)
        
        return memoized[stepsLeft]
    }
    return stepCounter(n, {});
};
