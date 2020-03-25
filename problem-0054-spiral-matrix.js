/*54. Spiral Matrix
Medium

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]*/

/*STATS Runtime: 52 ms, faster than 71.69% of JavaScript online submissions for Spiral Matrix.
Memory Usage: 33.8 MB, less than 72.73% of JavaScript online submissions for Spiral Matrix.*/

var spiralOrder = function(matrix) {
    if(!matrix.length) {
        return [];
    }
    let answer = [];
    let startRow = 0;
    let endRow = matrix.length -1;
    let startColumn = 0;
    let endColumn = matrix[0].length - 1;
    
    while (startRow <= endRow && startColumn <= endColumn) {
        //top row
        for (let i = startColumn; i <= endColumn; i++) {
            answer.push(matrix[startRow][i]);
        }
        startRow++;
        //right row
        for (let i = startRow; i <= endRow; i++) {
            answer.push(matrix[i][endColumn])
        }
        endColumn--;
        
        if (startColumn <= endColumn && startRow <= endRow) {
        //bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            answer.push(matrix[endRow][i]);
        }
        endRow--;
        //left row
        for (let i = endRow; i >= startRow; i--) {
            answer.push(matrix[i][startColumn]);
        }
        startColumn++;
        }
    }
    return answer;
  
};

//[1  2  3  4]
//[5  6  7  8]
//[9 10 11 12]
