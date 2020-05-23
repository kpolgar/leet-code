/*94. Binary Tree Inorder Traversal
Medium

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?*/

//Recursive Solution

/*STATS Runtime: 60 ms, faster than 26.55% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 33.7 MB, less than 71.88% of JavaScript online submissions for Binary Tree Inorder Traversal.*/

var inorderTraversal = function(root, array=[]) {
    if (root && root.left) {
        inorderTraversal(root.left, array);
    }
    if (root && root.val) {
        array.push(root.val);
    }
    if (root && root.right) {
        inorderTraversal(root.right, array)
    }
    return array;
};

/*STATS Runtime: 68 ms, faster than 15.55% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 33.7 MB, less than 90.63% of JavaScript online submissions for Binary Tree Inorder Traversal.*/

var inorderTraversal = function(root) {
    let answer = [];
    let stack = []
    while (root || stack.length) {
        if (root) {
           stack.push(root)
           root = root.left; 
        } else {
            root = stack.pop();
            answer.push(root.val);
            root = root.right;
        }   
    }
    return answer;
};
