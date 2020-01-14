/*35. Search Insert Position
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/
//My Solution
/*STATS
Runtime: 52 ms, faster than 82.59% of JavaScript online submissions for Search Insert Position.
Memory Usage: 33.9 MB, less than 56.25% of JavaScript online submissions for Search Insert Position.
*/

var searchInsert = function(nums, target) {
     if (target < nums[0]) {
        return 0; 
    }
    if (target > nums[nums.length - 1]) {
        return nums.length; 
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (target > nums[i] && target < nums[i+1]) {
            return i + 1;
        }
    }
};
