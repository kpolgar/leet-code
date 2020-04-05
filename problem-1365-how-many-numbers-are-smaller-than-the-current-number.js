/*1365. How Many Numbers Are Smaller Than the Current Number

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 

Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100*/

/*STATS Runtime: 76 ms, faster than 72.52% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.*/

var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums].sort(function(a,b) {return a-b})
    
    let map = {};
    let index = 0;
    map[sorted[0]] = 0;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i-1]) {
            map[sorted[i]] = index;
        }
        else if (sorted[i] > sorted[i-1]) {
            index++;
            map[sorted[i]] = i;
            index = i;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = map[nums[i]]
    }
    
    return nums;
};

