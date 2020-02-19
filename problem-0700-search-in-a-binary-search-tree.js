/*700. Search in a Binary Search Tree

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2     
     / \   
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.*/

//Attempt 1: using Breadth for Search
/*STATS Runtime: 80 ms, faster than 67.79% of JavaScript online submissions for Search in a Binary Search Tree.
Memory Usage: 41.8 MB, less than 68.75% of JavaScript online submissions for Search in a Binary Search Tree.*/
var searchBST = function(root, val) {
    let currentNode = root;
    let queue = [];
    queue.push(currentNode);
    while (currentNode.val !== val && queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      } 
    }
    if (currentNode.val === val) {
            return currentNode
        }
    else {
     return null;   
    }
};

//Attempt 2; no real need to use breadth for search

/*STATS Runtime: 76 ms, faster than 84.73% of JavaScript online submissions for Search in a Binary Search Tree.
Memory Usage: 41.8 MB, less than 68.75% of JavaScript online submissions for Search in a Binary Search Tree.*/

var searchBST = function(root, val) {
    let currentNode = root;
    while (currentNode) {
        if (currentNode.val === val) {
            break;
        }
        else if (currentNode.val > val) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right
        }
    }
    return currentNode
};
