/*1051. Height Checker
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
Example 1:

Input: [1,1,4,2,1,3]
Output: 3
Explanation: 
Students with heights 4, 3 and the last 1 are not standing in the right positions.
 
Note:

1 <= heights.length <= 100
1 <= heights[i] <= 100*/

//My Solution
/*STATS
Runtime: 64 ms, faster than 49.45% of JavaScript online submissions for Height Checker.
Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Height Checker.
*/

var heightChecker = function(heights) {
  let heightsSorted = [...heights].sort(function(a, b) {return a - b});
  let counter = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== heightsSorted[i]) {
      counter = counter + 1
    }
  } return counter;
  
};
