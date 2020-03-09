/*697. Degree of an Array
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.*/

/*STATS Runtime: 72 ms, faster than 74.27% of JavaScript online submissions for Degree of an Array.
Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Degree of an Array.*/

var findShortestSubArray = function(nums) {
    let map = {};
    let mostF = 1;
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
            if (map[nums[i]] > mostF) {
                mostF = map[nums[i]]
            }
        } else {
            map[nums[i]] = 1
        }
    }
    //if each item is unique
    if (mostF === 1) {
        return 1;
    }
    let min = nums.length;
    for (let j = 0; j < nums.length; j++) {
        if (map[nums[j]] === mostF) {
            let first = nums.indexOf(nums[j]);
            let last = nums.lastIndexOf(nums[j]);
            min = Math.min((last - first + 1), min);
            map[nums[j]] = -1;
        }
    } return min;
};
