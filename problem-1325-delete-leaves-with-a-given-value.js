/*1325. Delete Leaves With a Given Value
Medium

Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if it's parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you can't).

 

Example 1:



Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
Example 2:



Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]
Example 3:



Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
Example 4:

Input: root = [1,1,1], target = 1
Output: []
Example 5:

Input: root = [1,2,3], target = 1
Output: [1,2,3]
 

Constraints:

1 <= target <= 1000
The given binary tree will have between 1 and 3000 nodes.
Each node's value is between [1, 1000].*/

/*STATS Runtime: 92 ms, faster than 89.13% of JavaScript online submissions for Delete Leaves With a Given Value.
Memory Usage: 43.5 MB, less than 55.80% of JavaScript online submissions for Delete Leaves With a Given Value.*/

var removeLeafNodes = function(root, target) {
    let depth = 1
    let arr = [root, 's']
    //Use breadth first search to calculate depth of tree
    function bfs(node) {
        while(arr.length > 1) {
            let node = arr.shift()
            if (!node) {
                return
            }
            if (node !== 's') {
                if (node.left) {
                    arr.push(node.left)
                }
                if (node.right) {
                    arr.push(node.right)
                }
            }
            else {
                depth++
                arr.push('s')
            }
        }
    } 
    bfs(root)

    
    function dfs(node) {
        if (!node) {
            return;
        }
        
        if (node.left) {
            if (node.left.val === target && node.left.left === null && node.left.right === null) {
                node.left = null
            }
            else {
                dfs(node.left)
            }
        }
        if (node.right) {
            if (node.right.val === target && node.right.left === null && node.right.right === null) {
                node.right = null
            }
            else {
                dfs(node.right)
            }
        }
        
        //depth first search formula as many times as the depth of the tree and delete leaves that match target
        
    }
    
    for (let i = 0; i < depth; i++) {
         dfs(root)
    }
    if (!root.left && !root.right && root.val === target) {
        return null
    }
    return root
    
};
