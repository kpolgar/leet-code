/*103. Binary Tree Zigzag Level Order Traversal
Medium

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]*/

/*STATS Runtime: 72 ms, faster than 62.11% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
Memory Usage: 38.2 MB, less than 5.17% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.*/

var zigzagLevelOrder = function(root) {
    //if tree is empty
    if (!root) {
        return [];
    }
    //using bfs
    let level = 'odd'
    //marker 's' helps keep track of the end of a level and the start of a new one
    let arr = [root, 's'];
    let answer = [[]];
    while(arr.length > 1) {
        let node = arr.shift();
        if (node !== 's') {
            answer[answer.length-1].push(node.val)
            if (node.left) {
                arr.push(node.left);    
            }
            if (node.right) {
                arr.push(node.right);    
            }    
        }
        else {
            //when we hit the end of a level, we check if the level is even or odd
            //if level is even, we reverse the values of that level only
            arr.push('s')
            console.log(level)
            if (level === 'odd') {
                level = 'even';
            } else if (level === 'even') {
                answer[answer.length-1] = answer[answer.length-1].reverse()
                level = 'odd'
            } 
            answer.push([])
        }
    }
    //if the tree has an even last level, we need still need to reverse the last level
    if (level === 'even') {
        answer[answer.length-1] = answer[answer.length-1].reverse()
    }
    return answer;
};
