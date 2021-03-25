/*144. Binary Tree Preorder Traversal
Medium

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?*/

/*STATS Runtime: 76 ms, faster than 81.58% of JavaScript online submissions for Binary Tree Preorder Traversal.
Memory Usage: 38.8 MB, less than 29.25% of JavaScript online submissions for Binary Tree Preorder Traversal.*/

var preorderTraversal = function(root) {
    let arr = [];
    let temp = [root]
    if (!root) {
            return []
        }
    while(temp.length) {
        let node = temp.pop()
        arr.push(node.val)
        if (node.right) {
            temp.push(node.right)
        }
        if (node.left) {
            temp.push(node.left)
        }
    }
    return arr;
};
