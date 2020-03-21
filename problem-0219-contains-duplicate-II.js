/*219. Contains Duplicate II

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false*/

//Naive solution; nested loops O(n^2)

/*STATS Runtime: 5104 ms, faster than 5.20% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions for Contains Duplicate II.*/

var containsNearbyDuplicate = function(nums, k) {    
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j <i+1+k; j++) {
            if (nums[i] === nums[j]) { 
             return true;
            }
        }
    } return false;
};

//Using Hash Map Single Pass O(n)

/*STATS Runtime: 56 ms, faster than 96.98% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 42.5 MB, less than 31.58% of JavaScript online submissions for Contains Duplicate II.*/

var containsNearbyDuplicate = function(nums, k) {    
    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]] && map[nums[i]] !== 0) {
            map[nums[i]] = i;
        }
      
        else {
            if (i - map[nums[i]] <= k) {
                return true;
            }
          map[nums[i]] = i;
        }
    }
    
    return false;
};
