/*283. Move Zeroes Easy

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12] Output: [1,3,12,0,0] Note:

You must do this in-place without making a copy of the array. Minimize the
total number of operations.*/


//My accepted solution
/*Stats /*Runtime: 56 ms, faster than 94.98% of JavaScript online submissions
for Move Zeroes. Memory Usage: 35.9 MB, less than 29.79% of JavaScript online
submissions for Move Zeroes.*/


var moveZeroes = function(nums) {
    for (let i = nums.length; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        } 
    } return nums
};
