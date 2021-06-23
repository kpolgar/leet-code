/*119. Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?*/

/*STATS Runtime: 72 ms, faster than 89.84% of JavaScript online submissions for Pascal's Triangle II.
Memory Usage: 38.7 MB, less than 29.13% of JavaScript online submissions for Pascal's Triangle II.*/

var getRow = function(rowIndex) {
    let triangle = [[1], [1,1]]
    for (let i = 2; i <= rowIndex; i++) {
      let curr = [1]
      for (let j = 1; j < i; j++) {
          curr.push(triangle[i-1][j-1] + triangle[i-1][j])
      }
        curr.push(1)
        triangle.push(curr)
    }  
    return triangle[rowIndex]
};
