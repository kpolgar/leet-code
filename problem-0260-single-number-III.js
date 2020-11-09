/*260. Single Number III
Medium

Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

 

Example 1:

Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
Example 2:

Input: nums = [-1,0]
Output: [-1,0]
Example 3:

Input: nums = [0,1]
Output: [1,0]
 

Constraints:

1 <= nums.length <= 30000
 Each integer in nums will appear twice, only two integers will appear once.*/

 /*STATS Runtime: 80 ms, faster than 87.69% of JavaScript online submissions for Single Number III.
Memory Usage: 41.2 MB, less than 14.87% of JavaScript online submissions for Single Number III.*/

//With Extra Space

var singleNumber = function(nums) {
    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === 1) {
            ans.push(nums[i]) 
        }
    }
    
    return ans;
};


//Using xor

/*STATS Runtime: 76 ms, faster than 92.31% of JavaScript online submissions for Single Number III.
Memory Usage: 39.5 MB, less than 14.87% of JavaScript online submissions for Single Number III.*/

var singleNumber = function(nums) {
    let xor = nums[0]
    for (let i = 1; i < nums.length; i++) {
        xor ^= nums[i]
    }
    let pos = xor.toString(2).length - 1;
    
    let xor2 = 0
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] >> pos & 1) == 0) {
            xor2 ^= nums[i]
        }
    }
    
    return [xor2, xor2 ^ xor]
};
