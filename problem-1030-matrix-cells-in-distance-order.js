/*1030. Matrix Cells in Distance Order

We are given a matrix with R rows and C columns has cells with integer coordinates (r, c), where 0 <= r < R and 0 <= c < C.

Additionally, we are given a cell in that matrix with coordinates (r0, c0).

Return the coordinates of all cells in the matrix, sorted by their distance from (r0, c0) from smallest distance to largest distance.  Here, the distance between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| + |c1 - c2|.  (You may return the answer in any order that satisfies this condition.)

 

Example 1:

Input: R = 1, C = 2, r0 = 0, c0 = 0
Output: [[0,0],[0,1]]
Explanation: The distances from (r0, c0) to other cells are: [0,1]
Example 2:

Input: R = 2, C = 2, r0 = 0, c0 = 1
Output: [[0,1],[0,0],[1,1],[1,0]]
Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
Example 3:

Input: R = 2, C = 3, r0 = 1, c0 = 2
Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
 

Note:

1 <= R <= 100
1 <= C <= 100
0 <= r0 < R
0 <= c0 < C*/

/*STATS Runtime: 132 ms, faster than 98.46% of JavaScript online submissions for Matrix Cells in Distance Order.
Memory Usage: 45.6 MB, less than 61.54% of JavaScript online submissions for Matrix Cells in Distance Order.*/

var allCellsDistOrder = function(R, C, r0, c0) {
    let dist = {};
    let maxDist = C + R;
    let manhattan;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            manhattan = Math.abs(r0 - i) + Math.abs(c0 - j);
            if (!dist[manhattan]) {
            dist[manhattan] = [[i,j]]
            } else {
                dist[manhattan].push([i,j])
            }
        }
    }
    let ans = [];
    for (let i = 0; i < maxDist; i++) {
        if (dist[i]) {
            ans.push(...dist[i])
        }
    }
    
    return ans;
};