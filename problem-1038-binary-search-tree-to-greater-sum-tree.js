/*1038. Binary Search Tree to Greater Sum Tree
Medium

Given the root of a binary search tree with distinct values, modify it so that every node has a new value equal to the sum of the values of the original tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:



Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 

Constraints:

The number of nodes in the tree is between 1 and 100.
Each node will have value between 0 and 100.
The given tree is a binary search tree.
Note: This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/*/


/*STATS Runtime: 68 ms, faster than 81.28% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
Memory Usage: 36.8 MB, less than 8.33% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.*/

var bstToGst = function(root) {
    function traverseInOrder(node, list) {
        if (node.left) {
            traverseInOrder(node.left, list)
        }
            list.push(node.val);
        if (node.right) {
            traverseInOrder(node.right, list);
        }
        return list;
    }
    
     let array = traverseInOrder(root, [])
     
     function fixTree(node) {
         if (node.left) {
             fixTree(node.left)
         }
         let sum = 0;
         for (let i = 0; i < array.length; i++) {
           if (array[i] >= node.val) {
               sum += array[i]
           }  
         }
         node.val = sum;
         
         if (node.right) {
             fixTree(node.right)
         }
     }
    
    fixTree(root);
    return root;
};
