/*598. Range Addition II

You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.

 

Example 1:


Input: m = 3, n = 3, ops = [[2,2],[3,3]]
Output: 4
Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
Example 2:

Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
Output: 4
Example 3:

Input: m = 3, n = 3, ops = []
Output: 9
 

Constraints:

1 <= m, n <= 4 * 104
1 <= ops.length <= 104
ops[i].length == 2
1 <= ai <= m
1 <= bi <= n*/

/*STATS Runtime: 80 ms, faster than 83.12% of JavaScript online submissions for Range Addition II.
Memory Usage: 40.9 MB, less than 24.68% of JavaScript online submissions for Range Addition II.*/

var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n
    let minRow = ops[0][0]
    let minCol = ops[0][1]
    for (let i = 1; i < ops.length; i++) {
        minRow = Math.min(minRow, ops[i][0])
        minCol = Math.min(minCol, ops[i][1])
    }
    return minRow * minCol
};
