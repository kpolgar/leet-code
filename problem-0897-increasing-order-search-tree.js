/*897. Increasing Order Search Tree

Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
 

Constraints:

The number of nodes in the given tree will be between 1 and 100.
Each node will have a unique integer value from 0 to 1000.*/

/*STATS Runtime: 60 ms, faster than 63.88% of JavaScript online submissions for Increasing Order Search Tree.
Memory Usage: 33.9 MB, less than 32.57% of JavaScript online submissions for Increasing Order Search Tree.*/

var increasingBST = function(root) {
    let inOrder = function(node, array) {
        if (node.left) {
            inOrder(node.left, array)
        }
        array.push(node.val)
        if (node.right) {
            inOrder(node.right, array)
        }
        return array;
    }
   
    let array = []
    
    inOrder(root, array)
    
     let tree = new TreeNode(null, null, null)
     var curr = tree;
    
     for (let i = 0; i < array.length-1; i++) {
        curr.val = array[i];
        curr.left = null;
         
        curr.right = new TreeNode(null, null, null);
        curr = curr.right;
     }
    curr.val = array[array.length-1]
    return tree;
};
