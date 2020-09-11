/*33. Search in Rotated Sorted Array
Medium

You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is guranteed to be rotated at some pivot.
-10^4 <= target <= 10^4*/

/*STATS Runtime: 68 ms, faster than 96.27% of JavaScript online submissions for Search in Rotated Sorted Array.
Memory Usage: 37 MB, less than 39.05% of JavaScript online submissions for Search in Rotated Sorted Array.*/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        }
          
        if (nums[left] <= nums[mid]) {  //means left side is sorted
            if (nums[left] <= target && target <= nums[mid]) { //means target is on the left
                right = mid - 1;
                mid = Math.floor((left + right)/2)
            } else { //target is on the right
                left = mid + 1
                mid = Math.floor((right + left)/2)
            }
        } else { //means right side is sorted
            if (nums[mid] <= target && target <= nums[right]) { //means target is on the right
                left = mid + 1
                mid = Math.floor((right + left)/2)
            } else { //means target is on the left
                right = mid - 1
                mid = Math.floor((right + left)/2)
            }
        }
        
    }
    if (nums[mid] === target) {
            return mid
    }
    else {
        return -1;
    }

};
