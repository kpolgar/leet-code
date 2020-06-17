/*287. Find the Duplicate Number
Medium

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.*/

//Using sorting (does not meet all problem constraints)
/*STATS Runtime: 76 ms, faster than 40.04% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 36.8 MB, less than 28.51% of JavaScript online submissions for Find the Duplicate Number.*/

var findDuplicate = function(nums) {
    let sorted = [...nums].sort(function(a,b){return a-b})
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i+1]) {
            return sorted[i]
        }
    }
};

//Using an Object (does not meet all problem constraints)
/*STATS Runtime: 64 ms, faster than 66.70% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 38.2 MB, less than 9.69% of JavaScript online submissions for Find the Duplicate Number.*/

var findDuplicate = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        }
        else {
            return nums[i]
        }
    }
};

/*STATS Runtime: 64 ms, faster than 67.92% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 36.4 MB, less than 46.71% of JavaScript online submissions for Find the Duplicate Number.*/

var findDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    
    while (true) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
        if (tortoise === hare) {
            break;
        }
    }  
    tortoise = nums[0]
        
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
        
    }
    return hare
};
