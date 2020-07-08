/*226. Invert Binary Tree
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.*/

//Iterative Using Breadth First Search
/*STATS Runtime: 56 ms, faster than 95.40% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 33.1 MB, less than 98.78% of JavaScript online submissions for Invert Binary Tree.*/

var invertTree = function(root) {
    if (!root) {
        return root;
    }
    let arr = [root]
    
   while (arr.length) {
       let node = arr.shift();
           let temp = node.left;
           node.left = node.right;
           node.right = temp
           if (node.left) {
               arr.push(node.left);
           }
           if (node.right) {
             arr.push(node.right)
           } 
   } 
    return root;
};

//Recursive
/*STATS Runtime: 60 ms, faster than 90.93% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 34 MB, less than 5.47% of JavaScript online submissions for Invert Binary Tree.*/

var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
}
