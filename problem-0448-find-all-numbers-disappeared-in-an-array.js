/*448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]*/

//Naive Attempt

/*STATS Runtime: 6624 ms, faster than 15.13% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 44 MB, less than 25.00% of JavaScript online submissions for Find All Numbers Disappeared in an Array.*/

var findDisappearedNumbers = function(nums) {
    let max = nums.length;
    let list = [];
    for (let i = 1; i <= max; i++) {
        if (!nums.includes(i)) {
            list.push(i)
        }
    } return list;
};

//Second Attempt

/*STATS Runtime: 92 ms, faster than 93.77% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 44.1 MB, less than 25.00% of JavaScript online submissions for Find All Numbers Disappeared in an Array.*/

var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let j = Math.abs(nums[i]) -1;
        nums[j] = Math.abs(nums[j]) * -1
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    return result;
};
