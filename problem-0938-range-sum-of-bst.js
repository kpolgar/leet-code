/*938. Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

 

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
 

Note:

The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.*/

/*STATS Runtime: 292 ms, faster than 37.93% of JavaScript online submissions for Range Sum of BST.
Memory Usage: 66.3 MB, less than 77.08% of JavaScript online submissions for Range Sum of BST.*/

var rangeSumBST = function(root, L, R) {
    function traverseInOrder(node, list) {
        if (node.left) {
            traverseInOrder(node.left, list)
        }
        if (node.val >= L && node.val <= R) {
            list.push(node.val);
        }
        if (node.right) {
            traverseInOrder(node.right, list);
        }
        return list.reduce((total, acc) => total + acc, 0);
    }
    
     return traverseInOrder(root, [])
    
};
