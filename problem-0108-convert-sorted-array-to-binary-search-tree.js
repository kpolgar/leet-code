/*108. Convert Sorted Array to Binary Search Tree
Easy

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5*/

/*STATS Runtime: 72 ms, faster than 40.36% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 39.6 MB, less than 9.61% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.*/

var sortedArrayToBST = function(nums) {
    if (nums.length <= 0) {
        return null
    }
    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid])
    
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    
    return root
};
