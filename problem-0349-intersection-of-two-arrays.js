/*349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.*/

/*STATS Runtime: 48 ms, faster than 97.80% of JavaScript online submissions for Intersection of Two Arrays.
Memory Usage: 35.3 MB, less than 30.77% of JavaScript online submissions for Intersection of Two Arrays.*/

var intersection = function(nums1, nums2) {
    let map = {};
    let answer=[];
    for (let i = 0; i < nums1.length; i++) {
        if (!map[nums1[i]]) {
            map[nums1[i]] =true;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]]) {
            answer.push(nums2[i])
            map[nums2[i]] = 0;
        }
    }
    return answer;
};
