/*1582. Special Positions in a Binary Matrix

Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 

Example 1:

Input: mat = [[1,0,0],
              [0,0,1],
              [1,0,0]]
Output: 1
Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
Example 2:

Input: mat = [[1,0,0],
              [0,1,0],
              [0,0,1]]
Output: 3
Explanation: (0,0), (1,1) and (2,2) are special positions. 
Example 3:

Input: mat = [[0,0,0,1],
              [1,0,0,0],
              [0,1,1,0],
              [0,0,0,0]]
Output: 2
Example 4:

Input: mat = [[0,0,0,0,0],
              [1,0,0,0,0],
              [0,1,0,0,0],
              [0,0,1,0,0],
              [0,0,0,1,1]]
Output: 3
 

Constraints:

rows == mat.length
cols == mat[i].length
1 <= rows, cols <= 100
mat[i][j] is 0 or 1.
*/

/*STATS Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Special Positions in a Binary Matrix.
Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Special Positions in a Binary Matrix.*/

var numSpecial = function(mat) {
    let counter = 0;
    for (let i = 0; i < mat.length; i++) {
       if (mat[i].reduce(function(acc, curr){return acc + curr}, 0) === 1) {
           let j = mat[i].findIndex(num => num === 1)
           if (mat.reduce(function(acc, curr){return acc + curr[j]},0) === 1) { 
               counter++
            }
       } 
    }
    return counter;
};
