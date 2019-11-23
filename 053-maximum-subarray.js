/*53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least
one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6 Explanation: [4,-1,2,1] has the
largest sum = 6. Follow up:

If you have figured out the O(n) solution, try coding another solution using
the divide and conquer approach, which is more subtle.*/

//My solution
/*STATS  Runtime: 56 ms, faster than 85.01% of JavaScript online submissions
for Maximum Subarray. Memory Usage: 35.2 MB, less than 74.07% of JavaScript
online submissions for Maximum Subarray.*/


var maxSubArray = function(nums) {    
    //setting the working total to 0
    let total = 0;
    //the current max is negative infinity, so really small
    let max = -Infinity
    //looping through nums array
    for (let i = 0; i < nums.length; i++) {
        //checking which is greater, the highest subarray to that index + this new element; or the new element itself
        total = Math.max((total + nums[i]), nums[i]);
        //setting the max to the greater number, total, or the max
        max = Math.max(total, max)
    } 
    return max;
    
};
