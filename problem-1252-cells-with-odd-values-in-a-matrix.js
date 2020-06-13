/*1252. Cells with Odd Values in a Matrix

Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

 

Example 1:


Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
Example 2:


Input: n = 2, m = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.*/

/*STATS Runtime: 64 ms, faster than 57.34% of JavaScript online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 37.2 MB, less than 14.80% of JavaScript online submissions for Cells with Odd Values in a Matrix.*/

var oddCells = function(n, m, indices) {
    //initialize 2D array
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
        }
    }
    //increment cells
    for (let i = 0; i < indices.length; i++) {
        for(let j = 0; j<n; j++) {
            matrix[j][indices[i][1]]++
        }
        for (let k = 0; k<m; k++) {
           matrix[indices[i][0]][k]++; 
        }
    }
    let counter = 0;
    //adding # of cells with odd values
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] % 2 !== 0) {
                counter++;
            }
        }
    } return counter;
};
