/*572. Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
 

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.*/

/*STATS Runtime: 96 ms, faster than 95.72% of JavaScript online submissions for Subtree of Another Tree.
Memory Usage: 45.5 MB, less than 21.18% of JavaScript online submissions for Subtree of Another Tree.*/

var isSubtree = function(s, t) {
    
    function preorder(node) {
         if (node === null) {
             return 'null'
         }
        
        return '#' + node.val + ' ' + preorder(node.left) + preorder(node.right)
     }
     
    function isSubtree(s, t) {
        let tree1 = preorder(s)
        let tree2 = preorder(t)
        return tree1.indexOf(tree2) >= 0
    }
  
     return isSubtree(s,t)
 };
