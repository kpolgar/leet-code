/*637. Average of Levels in Binary Tree
Easy

1357

168

Add to List

Share
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.*/

/*STATS Runtime: 80 ms, faster than 97.94% of JavaScript online submissions for Average of Levels in Binary Tree.
Memory Usage: 42.4 MB, less than 18.11% of JavaScript online submissions for Average of Levels in Binary Tree.*/

var averageOfLevels = function(root) {
    if (!root) return 0;
    
    let arr = [root, 's'];
    let ans = [];
    let total = 0;
    let divisor = 0;
    while (arr.length > 1) {
        let node = arr.shift()
        if (node !== 's') {
            total+=node.val;
            divisor++;
            
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }
        else {
            arr.push('s');
            ans.push(total/divisor);
            total = 0; 
            divisor = 0;
        }
    }
    ans.push(total/divisor)
    return ans;
};
