/*39. Combination Sum
Medium

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 

Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
Each element of candidate is unique.
1 <= target <= 500*/


/*STATS Runtime: 84 ms, faster than 89.01% of JavaScript online submissions for Combination Sum.
Memory Usage: 39.4 MB, less than 69.69% of JavaScript online submissions for Combination Sum.*/

var combinationSum = function(candidates, target, index=0, curr=[], combinations=[]) {
    //found a combination
    if (target === 0) {
        combinations.push(curr.slice());
        return;
    }
    //When we overshoot
    if (target < 0) {
        return;
    }
    //while there are still candidates to try
    if (index < candidates.length) {
        const value = candidates[index];
        curr.push(value);
        combinationSum(candidates, target - value, index, curr, combinations)
        curr.pop();
        combinationSum(candidates, target, index + 1, curr, combinations)
    }
    return combinations;
};
