/*1636. Sort Array by Increasing Frequency

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

 

Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
 

Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100*/

/*STATS Runtime: 156 ms, faster than 100.00% of JavaScript online submissions for Sort Array by Increasing Frequency.
Memory Usage: 46.5 MB, less than 100.00% of JavaScript online submissions for Sort Array by Increasing Frequency.*/

var frequencySort = function(nums) {
    nums.sort(function(a,b) {return b-a})
     
     let freqMap = {}
     
     let pointer = 0
     for (let i = 1; i <= nums.length; i++) {
         let sames = ''
         if (nums[i] !== nums[i-1]) {
             sames = nums.slice(pointer, i)
             pointer = i
         } 
         if (sames) {
             if (!freqMap[sames.length]) {
                 freqMap[sames.length] = [sames]
             } else {
                 freqMap[sames.length].push(sames)
             }
         }
     }
     let answer = []
     
     for (let i = 1; i < nums.length+1; i++) {
         if (freqMap[i]) {
             for (let j = 0; j < freqMap[i].length; j++) {
                 answer.push(...freqMap[i][j])
             }
         }
     } return answer;
 };
