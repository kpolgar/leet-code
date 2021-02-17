/*653. Two Sum IV - Input is a BST

Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

 

Example 1:


Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
Example 2:


Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
Example 3:

Input: root = [2,1,3], k = 4
Output: true
Example 4:

Input: root = [2,1,3], k = 1
Output: false
Example 5:

Input: root = [2,1,3], k = 3
Output: true
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-104 <= Node.val <= 104
root is guaranteed to be a valid binary search tree.
-105 <= k <= 105*/

/*STATS Runtime: 116 ms, faster than 73.03% of JavaScript online submissions for Two Sum IV - Input is a BST.
Memory Usage: 48.8 MB, less than 17.05% of JavaScript online submissions for Two Sum IV - Input is a BST.*/

var findTarget = function(root, k) {
    let map = {}
    let condition = false;
    function dfs(node) {
        if (!node) {
            return
        }
        if (node.left) {
            dfs(node.left)
        }
        if (node.right) {
            dfs(node.right)
        }
        if (map[k - node.val]) {
          condition = true;
            return
        }
        if (!map[k - node.val]) {
            map[node.val] = true
        } 
    }
    
    dfs(root);
    return condition;
};
