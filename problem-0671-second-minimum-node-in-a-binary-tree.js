/*671. Second Minimum Node In a Binary Tree

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

 

 

Example 1:


Input: root = [2,2,5,null,null,5,7]
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.
Example 2:


Input: root = [2,2,2]
Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
 

Constraints:

The number of nodes in the tree is in the range [1, 25].
1 <= Node.val <= 231 - 1
root.val == min(root.left.val, root.right.val) for each internal node of the tree.*/

/*STATS Runtime: 68 ms, faster than 98.00% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
Memory Usage: 38.9 MB, less than 10.67% of JavaScript online submissions for Second Minimum Node In a Binary Tree.*/

var findSecondMinimumValue = function(root) {
    let arr = [root]
    let ans = [Infinity,Infinity]
    
    while(arr.length) {
        let node = arr.shift()
        if (node.left && node.right) {
            let min = Math.min(node.left.val, node.right.val)
            
            if (min < ans[0]) {
                ans.unshift(min)
                ans.pop()
            }
            
            else if (min < ans[1] && min !== ans[0]) {
                ans.pop()
                ans.push(min)
            }
            
            arr.push(node.left)
            arr.push(node.right)
            
        } else {
            let min = node.val
            if (min < ans[0]) {
                ans.unshift(min)
                ans.pop()
            }
            
            else if (min < ans[1] && min !== ans[0]) {
                ans.pop()
                ans.push(min)
            }
            
        }
    }
    if (ans[1] !== Infinity) {
        return ans[1]    
    }
    return -1  
};
