/*561. Array Partition I

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].*/

/*STATS Runtime: 112 ms, faster than 76.07% of JavaScript online submissions for Array Partition I.
Memory Usage: 39 MB, less than 55.56% of JavaScript online submissions for Array Partition I.*/

var arrayPairSum = function(nums) {
    nums.sort(function(a,b) {return a - b}); 
        let maxTotal = 0;
        for (let i = 0; i < nums.length; i += 2) {
            maxTotal += Math.min(nums[i], nums[i+1])
        }
     return maxTotal;
};
