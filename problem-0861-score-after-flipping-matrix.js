/*861. Score After Flipping Matrix
Medium

We have a two dimensional matrix A where each value is 0 or 1.

A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score.

 

Example 1:

Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 

Note:

1 <= A.length <= 20
1 <= A[0].length <= 20
A[i][j] is 0 or 1.*/

/*STATS Runtime: 76 ms, faster than 92.59% of JavaScript online submissions for Score After Flipping Matrix.
Memory Usage: 38.5 MB, less than 87.04% of JavaScript online submissions for Score After Flipping Matrix.
*/

var matrixScore = function(A) {
    //take care of row flips
    for (let i = 0; i < A.length; i++) {
       if (A[i][0] === 0) {
            for (let j = 0; j < A[0].length; j++) {
               if (A[i][j] === 0) {
                  A[i][j] = 1 
               } else {
                   A[i][j] = 0
               }
                
            }
        }
    }

    //take care of column flips
    //we need to flip the row if there are more '0s' than '1s'

    for (let col = 1; col < A[0].length; col++) {
        let ones = 0
        for (let row = 0; row < A.length; row++) {
            if (A[row][col] === 1) {
              ones++   
            }
        }

        if (ones < (A.length / 2)) {
            
                for (let j = 0; j < A.length; j++) {
                    if (A[j][col] === 0) {
                        A[j][col] = 1    
                    } else {
                        A[j][col] = 0
                    }
                
            }
        }
    }
    let total = 0
    for (let i = 0; i < A.length; i++) {
        total += parseInt(A[i].join(''), 2)
    }
    return total
};
