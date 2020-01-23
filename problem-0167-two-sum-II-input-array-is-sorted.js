/*167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.*/
/*Runtime: 52 ms, faster than 92.22% of JavaScript online submissions for Two Sum II - Input array is sorted.
Memory Usage: 35.3 MB, less than 26.09% of JavaScript online submissions for Two Sum II - Input array is sorted.*/

var twoSum = function(numbers, target) {
    let first = 0;
    let second = numbers.length - 1
     while (first !== second) {
         if (numbers[first] + numbers[second] === target) {
             return [first+1, second+1]
         }
         else if (numbers[first] + numbers[second] > target) {
             second--
         }
         else {
             first++
         }
     } 
};
