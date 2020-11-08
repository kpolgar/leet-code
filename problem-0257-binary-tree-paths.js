/*257. Binary Tree Paths
Easy

2116

119

Add to List

Share
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3*/

/*STATS Runtime: 72 ms, faster than 98.46% of JavaScript online submissions for Binary Tree Paths.
Memory Usage: 40.1 MB, less than 16.67% of JavaScript online submissions for Binary Tree Paths.*/

var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    let ans = []
    function dfs(node, path) {
        if (!node.left && !node.right) {
            ans.push(path + node.val)
        }  
        if (node.left) {
            dfs(node.left, path + node.val + '->')
        }
        if (node.right) {
            dfs(node.right, path + node.val + '->')
        }
    }
    
    dfs(root, '')
    return ans;
};
