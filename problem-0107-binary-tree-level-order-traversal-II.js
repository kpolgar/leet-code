/*107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]*/

/*STATS Runtime: 72 ms, faster than 86.24% of JavaScript online submissions for Binary Tree Level Order Traversal II.
Memory Usage: 38.6 MB, less than 5.10% of JavaScript online submissions for Binary Tree Level Order Traversal II.*/

var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    let arr = [root, 's'];
    let answer = [[]];
    while(arr.length > 1) {
        let node = arr.shift();
        if (node !== 's') {
            answer[answer.length-1].push(node.val)
           if(node.left) {
               arr.push(node.left)
           }
            if (node.right) {
                arr.push(node.right)
            }
        } else {
            arr.push('s');
            answer.push([])
        }
    } return answer.reverse()
};
