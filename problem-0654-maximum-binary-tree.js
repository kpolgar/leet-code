/*654. Maximum Binary Tree
Medium

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].*/

/*STATS Runtime: 116 ms, faster than 71.90% of JavaScript online submissions for Maximum Binary Tree.
Memory Usage: 45.2 MB, less than 14.23% of JavaScript online submissions for Maximum Binary Tree.*/

var constructMaximumBinaryTree = function(nums) {
    
    
    function build (array) {
        if (array.length === 0) {
            return null;
        }
        let max = Math.max(...array);
        let index = array.indexOf(max);
        
        let head = new TreeNode(max)
        head.left = build(array.slice(0, index))
        head.right = build(array.slice(index+1))
        return head;
    } 
    
    return build(nums)
};
