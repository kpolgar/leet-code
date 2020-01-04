 /*414. Third Maximum Number
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/
//My Solution
/*STATS
Runtime: 76 ms, faster than 29.04% of JavaScript online submissions for Third Maximum Number.
Memory Usage: 35.8 MB, less than 75.00% of JavaScript online submissions for Third Maximum Number.
*/

var thirdMax = function(nums) {
    let rank = 1;
    nums.sort(function(a,b) {return b - a});
    
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i-1]) {
                rank++; 
                if (rank === 3) {
                    return nums[i]
                }
            }
        } return nums[0]
};
