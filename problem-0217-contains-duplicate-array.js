/*217. Contains Duplicate Easy

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the
array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1] Output: true Example 2:

Input: [1,2,3,4] Output: false Example 3:

Input: [1,1,1,3,3,4,3,2,4,2] Output: true*/ //My solution /*STATS Runtime: 96
/*ms, faster than 22.67% of JavaScript online submissions for Contains
Duplicate. Memory Usage: 38.7 MB, less than 88.24% of JavaScript online
submissions for Contains Duplicate. */

var containsDuplicate = function(nums) {
    nums = nums.sort()
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
        return true
      }
    } return false;
};
