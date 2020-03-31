/*977. Squares of a Sorted Array
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.*/

/*STATS Runtime: 120 ms, faster than 71.00% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 43.8 MB, less than 22.22% of JavaScript online submissions for Squares of a Sorted Array.*/

var sortedSquares = function(A) {
    return A.map((a) => Math.pow(a,2)).sort((a,b) => a-b)    
};
