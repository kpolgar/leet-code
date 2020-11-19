/*404. Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.*/

/*STATS Runtime: 80 ms, faster than 83.84% of JavaScript online submissions for Sum of Left Leaves.
Memory Usage: 40 MB, less than 66.92% of JavaScript online submissions for Sum of Left Leaves.*/

var sumOfLeftLeaves = function(root) {
    let leaves = 0

    function dfs(node) {
        if (!node) {
            return null
        }
        if (node.left) {
            if (!node.left.right && !node.left.left) {
                leaves += node.left.val
            }
            else {
                dfs(node.left)
            }
        }
        if (node.right) {
            dfs(node.right)
        }
    } 
    
    dfs(root)
    return leaves;
};
