/*674. Longest Continuous Increasing Subsequence

Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
Note: Length of the array will not exceed 10,000.*/

/*STATS Runtime: 48 ms, faster than 95.63% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Longest Continuous Increasing Subsequence.*/

var findLengthOfLCIS = function(nums) {
    if (!nums.length || nums.length === 1) {
        return nums.length;
    }
    let longestL = 1
    let tempL = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            tempL++
            if (tempL > longestL) {
                longestL = tempL
            }
        }
        else {
            if (tempL > longestL) {
                longestL = tempL
            }
            tempL = 1;
        }
    } return longestL
};
