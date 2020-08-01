/*538. Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13*/


/*STATS Runtime: 104 ms, faster than 68.42% of JavaScript online submissions for Convert BST to Greater Tree.
Memory Usage: 45.3 MB, less than 20.00% of JavaScript online submissions for Convert BST to Greater Tree.*/

var convertBST = function(root) {
    let sum = 0;
    function revOrder(node) {
        if (!node) {
            return 0;
        }
        revOrder(node.right)
        node.val += sum
        sum = node.val;
        revOrder(node.left)
    }
    revOrder(root);
    return root;
};
