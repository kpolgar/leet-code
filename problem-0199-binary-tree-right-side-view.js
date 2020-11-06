/*199. Binary Tree Right Side View
Medium

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---*/

/*Runtime: 84 ms, faster than 66.24% of JavaScript online submissions for Binary Tree Right Side View.
Memory Usage: 40 MB, less than 18.23% of JavaScript online submissions for Binary Tree Right Side View.*/

var rightSideView = function(root) {
    let arr = [root, 's'];
    let ans = []
    if (!root) {
        return [];
    }
    while (arr.length > 1) {
        let node = arr.shift()
        if (node !== 's') {
            if (arr[0] === 's') {
                ans.push(node.val)
            }
            if (node.left) {
                arr.push(node.left)
            } 
            if (node.right) {
                arr.push(node.right)
            }
        }
        else {
            arr.push('s')
        }
    }
    return ans;  
};
