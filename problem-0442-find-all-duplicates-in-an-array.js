/*442. Find All Duplicates in an Array
Medium

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]*/

/*STATS Runtime: 116 ms, faster than 71.03% of JavaScript online submissions for Find All Duplicates in an Array.
Memory Usage: 49.3 MB, less than 43.45% of JavaScript online submissions for Find All Duplicates in an Array.*/

//Naive solutiob using extra space
var findDuplicates = function(nums) {
    let map = {}
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true
        } else {
            ans.push(nums[i])
        }
    } return ans
};


//Using the array itself as an object/map because we are given: an array of integers, 1 ≤ a[i] ≤ n (n = size of array) 

/*STATS Runtime: 112 ms, faster than 79.89% of JavaScript online submissions for Find All Duplicates in an Array.
Memory Usage: 46.2 MB, less than 89.95% of JavaScript online submissions for Find All Duplicates in an Array.*/

var findDuplicates = function(nums) {
    let doubles = []
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) -1
      if (nums[index] < 0) {
          doubles.push(Math.abs(nums[i]))
      } else {
        nums[index] = nums[index] * -1    
      }  
      
    } 
    return doubles
};
