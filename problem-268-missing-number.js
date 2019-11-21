/*268. Missing Number
Easy
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?*/

//Solution #1
/*STATS
Runtime: 100 ms, faster than 15.51% of JavaScript online submissions for Missing Number.
Memory Usage: 37.3 MB, less than 31.43% of JavaScript online submissions for Missing Number.*/

var missingNumber = function(nums) {
    nums.sort(function(a, b){return a-b});
    if (nums[0] !== 0) {
      return 0;
    }
    for (let i=0; i < nums.length; i++) {
        if(nums[i + 1] !== nums[i] + 1 ) {
            return nums[i] + 1
        }
    }
};
//time complexity: O(nlgn); the loop is O(n) sort is (O(nlgn))
//space complexity; O(1)

//Solution 2 With a hash table/javascript object
/*STATS
Runtime: 64 ms, faster than 61.98% of JavaScript online submissions for Missing Number.
Memory Usage: 37.3 MB, less than 28.57% of JavaScript online submissions for Missing Number.
*/
var missingNumber = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        map[item] = true;
    }
    
    for (var i=0; i < nums.length + 1; i++) {
        if(!map[i]) {
            return i
        }
    } 
}; //time complexity; O{n}
//space complexity O(n)

//Solution 3 Gauss' Formula
/*STATS
Runtime: 60 ms, faster than 79.44% of JavaScript online submissions for Missing Number.
Memory Usage: 35.9 MB, less than 85.71% of JavaScript online submissions for Missing Number.
*/

var missingNumber = function(nums) {
    let sum = nums.length * (nums.length + 1) / 2;
    let result = sum - (nums.reduce((a, b) => a + b))
    return result
};

//Time complexity: O(n)
//Space complexity O(1)
