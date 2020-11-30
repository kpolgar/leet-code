/*783. Minimum Distance Between BST Nodes

Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/
*/

/*STATS Runtime: 72 ms, faster than 98.78% of JavaScript online submissions for Minimum Distance Between BST Nodes.
Memory Usage: 39.6 MB, less than 39.84% of JavaScript online submissions for Minimum Distance Between BST Nodes.*/

var minDiffInBST = function(root) {
    let min = Infinity;
    let arr = [-Infinity]
    
    function dfs(node) {
        if (!node) {
            return
        }
        if (node.left) {
            dfs(node.left)
        }
        
        arr.push(node.val)
        let diff = arr[arr.length-1] - arr[arr.length-2]
            if (diff < min) {
                min = diff
            }
        
        if (node.right) {
            dfs(node.right)
        }
    }
    dfs(root)
    return min;
};
