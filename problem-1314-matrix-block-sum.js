/*1314. Matrix Block Sum
Medium

Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix.
 

Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]
Example 2:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2
Output: [[45,45,45],[45,45,45],[45,45,45]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n, k <= 100
1 <= mat[i][j] <= 100*/

/*STATS Runtime: 1028 ms, faster than 5.79% of JavaScript online submissions for Matrix Block Sum.
Memory Usage: 41.2 MB, less than 55.37% of JavaScript online submissions for Matrix Block Sum.*/

var matrixBlockSum = function(mat, K) {
    let ans = []
    for (let i = 0; i < mat.length; i++) {
        ans.push([])
        for (let j = 0; j < mat[0].length; j++) {
            ans[i].push(0)
        }
    }
    
    for (let i = 0; i < mat.length; i++) {
        
        for (let j = 0; j < mat[0].length; j++) {
            for (let k = i-K; k <= i+K; k++) {
                for (let l = j-K; l <= j+K; l++) {
                    if (k >= 0 && k < mat.length && l >= 0 && l < mat[0].length) {
                        ans[i][j] += mat[k][l]
                    }
                }
            }
        }
    }
    return ans
};
