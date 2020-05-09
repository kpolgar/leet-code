/*1380. Lucky Numbers in a Matrix
Easy

Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
Example 2:

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
Example 3:

Input: matrix = [[7,8],[1,2]]
Output: [7]*/

/*STATS Runtime: 52 ms, faster than 97.56% of JavaScript online submissions for Lucky Numbers in a Matrix.
Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Lucky Numbers in a Matrix.*/

var luckyNumbers  = function(matrix) {
    let minArray = []
    
    for (let i = 0; i < matrix.length; i++) {
        let min = Infinity;
        let mindex = Infinity;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                mindex = j
                
            }
        } minArray.push([min, mindex])    
    }
    
    let answer = []
    for (let k = 0; k < minArray.length; k++) {
        let maximum = minArray[k][0]
        let maxIndex = minArray[k][1]
        let condition = true;
        for (let l = 0; l < matrix.length; l++) {
          if (maximum < matrix[l][maxIndex])   {
              condition = false;
          }
        }
        if (condition) {
            answer.push(maximum)
        }
    } return answer;
};
