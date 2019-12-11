/*136. Single Number 
Given a non-empty array of integers, every element appears twice except for
one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it
without using extra memory?

Example 1:

Input: [2,2,1] Output: 1 Example 2:

Input: [4,1,2,1,2] Output: 4*/

//My Solution
/*STATS
Runtime: 80 ms, faster than 26.82% of JavaScript online submissions for Single
Number. Memory Usage: 36.4 MB, less than 57.69% of JavaScript online
submissions for Single Number.*/
var singleNumber = function(nums) {
  
  nums.sort(function(a, b){return a-b});
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1]){
      i++;
    } else {
      return nums[i]
    }
   }
};

console.log(singleNumber([4,1,1,2,2,3,4]))

//Another solution

/*STATS Runtime: 84 ms, faster than 24.83% of JavaScript online submissions for Single Number.
Memory Usage: 36.7 MB, less than 55.77% of JavaScript online submissions for Single Number.
*/
var singleNumber = function(nums) {
  
  nums.sort(function(a, b){return a-b});
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1] && nums[i] !== nums[i-1]){
      return nums[i];
    } 
   }
};
