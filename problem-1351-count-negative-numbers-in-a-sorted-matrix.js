/*1351. Count Negative Numbers in a Sorted Matrix

Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
Example 3:

Input: grid = [[1,-1],[-1,-1]]
Output: 3
Example 4:

Input: grid = [[-1]]
Output: 1
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100*/

/*STATS Runtime: 48 ms, faster than 98.03% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.*/
var countNegatives = function(grid) {
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
            counter++;
            }
        }
       
    } return counter;
};

//Solution 2 Counting from the Back

/*STATS Runtime: 48 ms, faster than 98.03% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.*/

var countNegatives = function(grid) {
    let counter = 0;
    for (let i = grid.length-1; i >= 0; i--) {
        for (let j = grid[i].length-1; j >= 0; j--) {
            if (grid[i][j] < 0) {
            counter++;
            }
            if (grid[i][j] >= 0) {
                break;
            }
        }
       
    } return counter;
};
