/*1161. Maximum Level Sum of a Binary Tree
Medium

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

 

Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105*/

/*STATS Runtime: 196 ms, faster than 79.04% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
Memory Usage: 56 MB, less than 98.80% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.*/

var maxLevelSum = function(root) {
    let level = 1
    let arr = [root, 's']
    let sum = 0
    let maxSum = -Infinity
    let maxLevel = 1
    
    while (arr.length > 1) {
        let node = arr.shift()
        if (node !== 's') {
            sum += node.val
            if (node.left) {
                arr.push(node.left)
            }
            if (node.right) {
                arr.push(node.right)
            }            
        }
        
        else {
            arr.push('s')
            if (sum > maxSum) {
                maxSum = sum
                maxLevel = level
            }
            sum = 0; 
            level++
        }
        
    }
    if (sum > maxSum) {
        maxSum = sum
        maxLevel = level
    }
    return maxLevel
};
