/*110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.*/

/*STATS Runtime: 84 ms, faster than 78.85% of JavaScript online submissions for Balanced Binary Tree.
Memory Usage: 41.2 MB, less than 8.97% of JavaScript online submissions for Balanced Binary Tree.*/

var isBalanced = function(root) {
    
    function dfs(node) {
        if (!node) {
            return 0;
        }
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) {
            return Infinity;
        }
        return Math.max(left, right);
    }
    
    if (dfs(root) === Infinity) {
        return false;
    } else {
        return true;
    }
};
