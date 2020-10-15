/*1302. Deepest Leaves Sum
Medium

Given a binary tree, return the sum of values of its deepest leaves.
 

Example 1:



Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
 

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.*/

/*STATS Runtime: 104 ms, faster than 79.61% of JavaScript online submissions for Deepest Leaves Sum.
Memory Usage: 48.8 MB, less than 21.17% of JavaScript online submissions for Deepest Leaves Sum.*/

var deepestLeavesSum = function(root) {
    
    if (!root) {
        return 0;
    }
    let arr = [root, 's'];
    let levelSum = root.val;
    
    while(arr.length > 1) {
        let node = arr.shift()
        levelSum += node.val
        if (node !== 's') {
            if (node.left) {
                arr.push(node.left)
            }
            if (node.right) {
                arr.push(node.right)
            }
        } else {
            arr.push('s');
            levelSum = 0;
        }   
    }
    
    return levelSum;
};
