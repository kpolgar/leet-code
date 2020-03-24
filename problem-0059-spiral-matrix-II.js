/*59. Spiral Matrix II
Medium

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]*/

/*STATS Runtime: 52 ms, faster than 86.00% of JavaScript online submissions for Spiral Matrix II.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix II.*/

var generateMatrix = function(n) {
      let startRow = 0;
  let endRow = n-1;
  let startColumn = 0;
  let endColumn = n-1;
  let counter = 1;
  let answer = [];
  //Making array of correct number of empty arrays
  for (let i = 0; i < n; i++) {
    answer.push([]);
  }
  
  while (counter <= Math.pow(n,2)) {
    //top row
  for (let j = startColumn; j <= endColumn; j++) {
    answer[startRow][j] = counter;
    counter++;
  } 
  startRow++;
   //right column
    for (let k = startRow; k <= endRow; k++) {
      answer[k][endColumn] = counter;
      counter++;
    }
    endColumn--;
    //bottom row
    for (let l = endColumn; l >= startColumn; l--) {
      answer[endRow][l] = counter;
      counter++
    }
    endRow--;
   //left column
    for (let m = endRow; m >= startRow; m--) {
      answer[m][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
    return answer;
};
