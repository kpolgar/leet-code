/*1609. Even Odd Tree
Medium

A binary tree is named Even-Odd if it meets the following conditions:

The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

 

Example 1:



Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
Output: true
Explanation: The node values on each level are:
Level 0: [1]
Level 1: [10,4]
Level 2: [3,7,9]
Level 3: [12,8,6,2]
Since levels 0 and 2 are all odd and increasing, and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.
Example 2:



Input: root = [5,4,2,3,3,7]
Output: false
Explanation: The node values on each level are:
Level 0: [5]
Level 1: [4,2]
Level 2: [3,3,7]
Node values in the level 2 must be in strictly increasing order, so the tree is not Even-Odd.
Example 3:



Input: root = [5,9,1,3,5,7]
Output: false
Explanation: Node values in the level 1 should be even integers.
Example 4:

Input: root = [1]
Output: true
Example 5:

Input: root = [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]
Output: true
 

Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 106*/

/*STATS Runtime: 264 ms, faster than 97.24% of JavaScript online submissions for Even Odd Tree.
Memory Usage: 76.1 MB, less than 5.12% of JavaScript online submissions for Even Odd Tree.*/

var isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }
    
    let arr = [root, 's']
    let evenLevel = true;
    let validTree = true;
    let prev = -Infinity
    
    while (arr.length > 1) {
        let node = arr.shift()        
        if (node !== 's') {
            //if we are on an even level: 0, 2, etc.
            if (evenLevel) {
                if (node.val <= prev || node.val % 2 === 0) {
                    console.log(node.val)
                    validTree = false; 
                    break;
                }
                prev = node.val
                if (node.left) {
                    arr.push(node.left)
                }
                if (node.right) {
                    arr.push(node.right)
                }   
            }
            //if we are on an odd level: 1, 3, etc.
            if (!evenLevel) {
                
                 if (node.val >= prev || node.val % 2 !== 0) {
                    validTree = false; 
                     console.log(node.val)
                    break;
                }
                prev = node.val
                if (node.left) {
                    arr.push(node.left)
                }
                if (node.right) {
                    arr.push(node.right)
                }   
            }
        }
        
        else {
            evenLevel = !evenLevel;
            if (evenLevel) {
                prev = -Infinity
            } else {
                prev = Infinity
            }
            arr.push('s')
        }
    }
    
    return validTree;
};