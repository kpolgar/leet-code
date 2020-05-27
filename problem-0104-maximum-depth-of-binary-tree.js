/*104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.*/

/*STATS Runtime: 68 ms, faster than 39.07% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 38.7 MB, less than 6.25% of JavaScript online submissions for Maximum Depth of Binary Tree..*/

/Recursive Solution/

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left,right) + 1;
}; 

//Iterative Solution

/*STATS Runtime: 60 ms, faster than 81.61% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 38.7 MB, less than 6.25% of JavaScript online submissions for Maximum Depth of Binary Tree.*/

var maxDepth = function(root) {
    let q = [];    
    let height = 0;
    if (root) {
        q.push(root);
    }
    
    while (q.length !== 0) {
        let newQ = [];
        while (q.length !== 0) {
            let curr = q.pop();
            
            if (curr.left) {
                newQ.push(curr.left);
            }
            if (curr.right) {
                newQ.push(curr.right);
            }
        }
        
        q = newQ;
        height++;
    }
    
    return height;
}
