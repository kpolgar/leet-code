/*111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.*/

/*STATS Runtime: 80 ms, faster than 65.76% of JavaScript online submissions for Minimum Depth of Binary Tree.
Memory Usage: 41.3 MB, less than 5.05% of JavaScript online submissions for Minimum Depth of Binary Tree.*/

var minDepth = function(root) {
    //checking if code is running on an empty root
    if (root === null) {
        return 0;
    }
    //Base case, checking if we are at a leaf node
    //Which by definition has no children
    if (root.left === null && root.right === null) {
        return 1;
    }
    //if left subtree is null, run the right subtree
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    //if right subtree is empty run the left subtree
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
//if both and left subtrees are NOT null we take minimum of the heights
    return Math.min( minDepth(root.left), minDepth(root.right) ) + 1;
};
