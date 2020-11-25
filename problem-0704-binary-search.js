/*704. Binary Search

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].*/

/*Runtime: 80 ms, faster than 77.86% of JavaScript online submissions for Binary Search.
Memory Usage: 42.3 MB, less than 64.85% of JavaScript online submissions for Binary Search.*/

var search = function(nums, target) {
    return nums.indexOf(target)
};

/*STATS Runtime: 76 ms, faster than 91.55% of JavaScript online submissions for Binary Search.
Memory Usage: 42.4 MB, less than 64.85% of JavaScript online submissions for Binary Search.*/

var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1
    while (start <= end) {
        let mid = Math.floor((start + end)/2)
        if (target === nums[mid]) {
            return mid 
        }
        else if (target < nums[mid]) {
            end = mid-1
        } else {
            start = mid+1
        }
    }
    return -1
};
