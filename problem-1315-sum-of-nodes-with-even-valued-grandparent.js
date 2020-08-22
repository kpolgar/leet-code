/*1315. Sum of Nodes with Even-Valued Grandparent
Medium

Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

Example 1:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.*/

/*STATS Runtime: 100 ms, faster than 85.64% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
Memory Usage: 47.4 MB, less than 20.17% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.*/

var sumEvenGrandparent = function(root) {
    function sumEvens(node, grandEven, parEven) {
        if (!node) {
            return 0;
        }
        let isEven;
        if (node.val % 2 === 0) {
            isEven = true;
        }
        else {
            isEven = false; 
        }
        let left = sumEvens(node.left, parEven, isEven);
        let right = sumEvens(node.right, parEven, isEven);
        if (grandEven) {
            return left + right + node.val
        } else {
            return left + right + 0
        }
    }
    return sumEvens(root, false, false)
};