/*102. Binary Tree Level Order Traversal
Medium

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]*/

//Solution 1 (Using string 's' to mark level end)
/*STATS Runtime: 64 ms, faster than 62.22% of JavaScript online submissions for Binary Tree Level Order Traversal.
Memory Usage: 37.9 MB, less than 5.02% of JavaScript online submissions for Binary Tree Level Order Traversal.*/

var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let array = [root, 's'];
    let answer = [[root.val]];
    
    while (array.length > 1) {
        let node = array.shift();
        if (node && node !== 's') {
            if (node.left) {
                array.push(node.left)
            }
            if (node.right) {
               array.push(node.right) 
            }    
        }
        else if (node && node === 's') {
            array.push('s')
            let limit = array.indexOf('s')
            answer.push([])
            for (let i = 0; i < limit; i++) {
                answer[answer.length-1].push(array[i].val)    
            }
        }
    } 
    return answer;
};

//Solution 2 Keeping Track of Level Size
/*STATS Runtime: 68 ms, faster than 53.61% of JavaScript online submissions for Binary Tree Level Order Traversal.
Memory Usage: 37.4 MB, less than 5.44% of JavaScript online submissions for Binary Tree Level Order Traversal.*/

var levelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let answer = [];
    
    while (queue.length) {
        const level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val)
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        answer.push(level)
    }
    
    return answer;
};
