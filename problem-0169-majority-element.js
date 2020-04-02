/*169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2*/

/*STATS Runtime: 60 ms, faster than 81.49% of JavaScript online submissions for Majority Element.
Memory Usage: 37.7 MB, less than 50.00% of JavaScript online submissions for Majority Element.*/

var majorityElement = function(nums) {
    let map = {};
    if (nums.length === 1) {
        return nums[0]
    }
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
            if (map[nums[i]] > (nums.length/2)) {
                return nums[i]
            }
        }
    } return -1;
};
