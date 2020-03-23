/*665. Non-decreasing Array

Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
 

Constraints:

1 <= n <= 10 ^ 4
- 10 ^ 5 <= nums[i] <= 10 ^ 5*/

/*STATS Runtime: 60 ms, faster than 93.50% of JavaScript online submissions for Non-decreasing Array.
Memory Usage: 37.4 MB, less than 50.00% of JavaScript online submissions for Non-decreasing Array.*/

var checkPossibility = function(nums) {
    //we need the array to increase or stay the same as you move along
    let oneShot = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            if (oneShot) {
                if (!nums[i-1] || nums[i-1] <= nums[i + 1]) {
                    nums[i] = nums[i+1];
                } else if (nums[i] <= nums[i+2] || !nums[i+2]) {
                   nums[i+1] = nums[i]        
                } else {
                    return false;
                }
                oneShot = false;
            } else {
                return false;
            }
        }
    } return true;
};problem
