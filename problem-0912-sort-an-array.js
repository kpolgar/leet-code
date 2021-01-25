/*912. Sort an Array
Medium

Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 

Constraints:

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000*/

/*STATS Runtime: 108 ms, faster than 87.22% of JavaScript online submissions for Sort an Array.
Memory Usage: 44.7 MB, less than 44.68% of JavaScript online submissions for Sort an Array.*/

var sortArray = function(nums) {
    return nums.sort(function(a,b){return a-b})
}
