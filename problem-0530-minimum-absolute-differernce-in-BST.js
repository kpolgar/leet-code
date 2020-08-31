/*530. Minimum Absolute Difference in BST

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 

Note:

There are at least two nodes in this BST.
This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/*/

/*STATS Runtime: 92 ms, faster than 78.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
Memory Usage: 42.5 MB, less than 37.00% of JavaScript online submissions for Minimum Absolute Difference in BST.*/

var getMinimumDifference = function(root) {
    let arr = [];
    function bfs(node) {
        if (node.left) {
                bfs(node.left)
            }
        
        arr.push(node.val)
        
        if (node.right) {
            bfs(node.right)
        }  
    }
    bfs(root);
    let minDiff = Infinity
    for (let i = 1; i < arr.length; i++) {        
        if ((arr[i] - arr[i-1]) < minDiff) {
                minDiff = (arr[i] - arr[i-1]);
        }
    }
    return minDiff;
};
