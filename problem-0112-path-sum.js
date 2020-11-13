/*112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.*/

/*STATS Runtime: 80 ms, faster than 97.72% of JavaScript online submissions for Path Sum.
Memory Usage: 42.2 MB, less than 24.20% of JavaScript online submissions for Path Sum.*/

var hasPathSum = function(root, sum) {
    let condition = false;
    
    function findPaths(node, currSum) {
        if (!node) {
            return 
        }
        currSum += Number(node.val)
        if (!node.left && !node.right) {
            if (currSum === sum) {
                condition = true;
                return;
            }
        } 
        if (node.left) {
            findPaths(node.left, currSum)
        }  
        if (node.right) {
            findPaths(node.right, currSum)
        }    
    }
    findPaths(root, 0)
    return condition; 
};
