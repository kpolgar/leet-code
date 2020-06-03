/*230. Kth Smallest Element in a BST
Medium

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

 

Constraints:

The number of elements of the BST is between 1 to 10^4.
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.*/

/*STATS Runtime: 80 ms, faster than 56.42% of JavaScript online submissions for Kth Smallest Element in a BST.
Memory Usage: 41.3 MB, less than 9.09% of JavaScript online submissions for Kth Smallest Element in a BST.*/

var kthSmallest = function(root, k) {
    //We will use depth first search because we need in order traversal which sorts the numbers
    //as we traverse the tree, we push the values into an array called list
    //we can stop when the array reaches length equal to k
    return traverseInOrder(root, [])
   
    function traverseInOrder(node, list) {
        if (list.length >= k) return;
        if (node.left) {
            traverseInOrder(node.left, list);
        }
        list.push(node.val);
        if (node.right) {
            traverseInOrder(node.right, list);
        }
        return list[k-1];
  } 
};
