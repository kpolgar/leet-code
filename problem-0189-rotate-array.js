/*189. Rotate Array
Easy
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?*/

//First Attempt
/*STATS
Runtime: 116 ms, faster than 10.54% of JavaScript online submissions for Rotate Array.
Memory Usage: 35.6 MB, less than 26.32% of JavaScript online submissions for Rotate Array.*/

var rotate = function(nums, k) {
    
  while(k > 0) {
    let x = nums.pop(nums[nums.length-1]);
    nums.unshift(x);
    k--
  } return nums
};

//Second Attemp
/*STATS
Runtime: 80 ms, faster than 60.19% of JavaScript online submissions for Rotate Array.
Memory Usage: 35.2 MB, less than 84.21% of JavaScript online submissions for Rotate Array.
*/

var rotate2 = function(nums, k) {
  let newArr = []; 
  
   let removed = nums.splice((nums.length - k), k);
   nums.unshift(...removed)
   return nums
};

//Third solution
/*STATS
Runtime: 140 ms, faster than 9.05% of JavaScript online submissions for Rotate Array.
Memory Usage: 35.3 MB, less than 73.68% of JavaScript online submissions for Rotate Array.
*/

var rotate3 = function(nums, k) {
  let len = nums.length
  k = k % len
  while (k-- > 0) {
    nums.unshift(nums.pop())
  }  
}
*/
