//1 Leet Code Two Sum

/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
//My Solution
/*STATS
Runtime: 108 ms, faster than 42.59% of JavaScript online submissions for Two Sum.
Memory Usage: 34.8 MB, less than 42.15% of JavaScript online submissions for Two Sum.
*/

var twoSum = function(nums, target) {
  let arr = [];
  let twoSum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = i+1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        arr.push(i, k);
        return arr;
      }
    }
  }
// O(n^2)

 //Solution Using Hash Table
  
 /*STATS
 Runtime: 56 ms, faster than 84.19% of JavaScript online submissions for Two Sum.
Memory Usage: 35.8 MB, less than 16.12% of JavaScript online submissions for Two Sum.
*/

var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const otherNumber = target - nums[i];

    if (otherNumber in map) {
      return [map[otherNumber], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
