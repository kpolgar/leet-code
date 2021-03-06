/*26. Remove Duplicates from Sorted Array
Easy

2740

5481

Add to List

Share
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}*/

/*STATS Runtime: 104 ms, faster than 52.59% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 38.8 MB, less than 80.13% of JavaScript online submissions for Remove Duplicates from Sorted Array.*/

var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

//Two Pointer

/*STATS Runtime: 80 ms, faster than 94.84% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 39.1 MB, less than 44.09% of JavaScript online submissions for Remove Duplicates from Sorted Array.*/

var removeDuplicates = function(nums) {
    if (!nums.length) return 0;
    
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast]
        }
    }
    return slow + 1;
};
