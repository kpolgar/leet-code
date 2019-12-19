/*350. Intersection of Two Arrays II Given two arrays, write a function to
compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2,2] Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [4,9] Note:

Each element in the result should appear as many times as it shows in both
arrays. The result can be in any order. Follow up:

What if the given array is already sorted? How would you optimize your
algorithm? What if nums1's size is small compared to nums2's size? Which
algorithm is better? What if elements of nums2 are stored on disk, and the
memory is limited such that you cannot load all elements into the memory at
once?*/ 

//My Solution
/*STATS
Runtime: 60 ms, faster than 68.54% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 35.3 MB, less than 62.96% of JavaScript online submissions for Intersection of Two Arrays II.
*/
var intersect = function(nums1, nums2) {
    let answer = [];

    if (nums1.length > nums2.length) {
        var shorter = nums2;
        var longer = nums1;
    } else {
        var shorter = nums1;
        var longer = nums2;
    }

    
        let map = {};
        for (let i = 0; i < longer.length; i++) {
        if (!map[longer[i]]) {
            map[longer[i]] = 1;
            } else {
            map[longer[i]] = map[longer[i]] + 1;
            }
        } 

    for (let j = 0; j < shorter.length; j++) {
        if (map[shorter[j]] && map[shorter[j]] > 0) {
            answer.push(shorter[j]);
            map[shorter[j]] = map[shorter[j]] - 1;    
        }
    } return answer;
};

console.log(intersect([1,2,2,1], [2,2]))
