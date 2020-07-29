/*78. Subsets
Medium

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]*/

/*STATS Runtime: 80 ms, faster than 55.16% of JavaScript online submissions for Subsets.
Memory Usage: 37.5 MB, less than 50.00% of JavaScript online submissions for Subsets.*/

var subsets = function(nums) {
    let answer = [];
    function findSubset (temp, leftover) {
        answer.push(temp)
        for (let i = 0; i < leftover.length; i++) {
            findSubset(temp.concat(leftover[i]), leftover.slice(i+1))
        }   
    }
    findSubset([], nums)    
    return answer;
};
