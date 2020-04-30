/*485. Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000*/

/*STATS Runtime: 64 ms, faster than 74.14% of JavaScript online submissions for Max Consecutive Ones.
Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Max Consecutive Ones.*/

var findMaxConsecutiveOnes = function(nums) {
  let counter = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++
            if (counter > max) {
                max = counter
            }
        } else {
            counter = 0;
        }
    } return max;
};
