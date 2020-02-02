/*628. Maximum Product of Three Numbers
Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6
 

Example 2:

Input: [1,2,3,4]
Output: 24
 

Note:

The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.*/

/*Runtime: 96 ms, faster than 70.28% of JavaScript online submissions for Maximum Product of Three Numbers.
Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Maximum Product of Three Numbers.*/

var maximumProduct = function(nums) {
    nums.sort(function(a,b){return a - b});
    return Math.max( (nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3]), nums[0] * nums[1] * nums[nums.length-1])
};
