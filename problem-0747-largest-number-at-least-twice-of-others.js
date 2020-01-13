/*747. Largest Number At Least Twice of Others
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 

Example 2:

Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 

Note:

nums will have a length in the range [1, 50].
Every nums[i] will be an integer in the range [0, 99].*/
//First Attempt
/*STATS
Runtime: 60 ms, faster than 58.51% of JavaScript online submissions for Largest Number At Least Twice of Others.
Memory Usage: 35.4 MB, less than 33.33% of JavaScript online submissions for Largest Number At Least Twice of Others.
*/

var dominantIndex = function(nums) {
    let map = {};
    if (nums.length === 1) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = i;  
    }
    
   nums.sort(function(a, b) {return a-b});
    if (nums[nums.length-1] >= (nums[nums.length-2]*2)) {
        return map[nums[nums.length-1]]
        }
    return -1;

};

//Second Attempt

/*Runtime: 56 ms, faster than 80.63% of JavaScript online submissions for Largest Number At Least Twice of Others.
Memory Usage: 34 MB, less than 33.33% of JavaScript online submissions for Largest Number At Least Twice of Others.*/

var dominantIndex = function(nums) {
    let max = -Infinity;
    let index;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }
    for (let j = 0; j < nums.length; j++) {
      
      if (j !== index) {
        if (max < (nums[j] * 2)) {
            return -1;
        }
      }
    }
    return index;
};

//Third Attempt

/*Runtime: 56 ms, faster than 80.63% of JavaScript online submissions for Largest Number At Least Twice of Others.
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Largest Number At Least Twice of Others.*/

var dominantIndex = function(nums) {
    let largestIndex = nums.indexOf(Math.max(...nums))
    let largestNum = Math.max(...nums)
    for(let i=0; i<nums.length; i++) {
        if(nums[i]*2 > largestNum && nums[i] != largestNum) {
            return -1
        }
    }
    return largestIndex
};
