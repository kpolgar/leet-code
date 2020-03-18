/*643. Maximum Average Subarray I

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].*/

//First Attempt
/*STATS Runtime: 92 ms, faster than 53.62% of JavaScript online submissions for Maximum Average Subarray I.
Memory Usage: 47 MB, less than 100.00% of JavaScript online submissions for Maximum Average Subarray I.*/

var findMaxAverage = function(nums, k) {
    let sums = [nums[0]];
    if (nums.length <= 1) {
        return nums[0]/k
    }
    for (let i = 1; i < nums.length; i++) {
        sums.push(sums[i-1] + nums[i]);
    }
   let max = sums[k-1] / k;
    for (let j = k; j < nums.length; j++) {
        let curr = sums[j] - sums[j - k]
        if (curr / k > max) {
            max = curr / k
        }
    } 
  return max; 
};

//Second Pass
/*STATS Runtime: 80 ms, faster than 93.24% of JavaScript online submissions for Maximum Average Subarray I.
Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions for Maximum Average Subarray I.*/

var findMaxAverage = function(nums, k) {
    let currentSum = nums.slice(0,k).reduce((acc, curr) => acc + curr, 0) 
    let max = currentSum/k
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum + nums[i] - nums[i-k]
        if (currentSum / k > max) {
            max = currentSum / k;
        }
    }
   
  return max; 
};
