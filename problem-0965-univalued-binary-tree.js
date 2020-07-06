/*965. Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].*/

//Using BFS (Iterative)
/*STATS Runtime: 60 ms, faster than 80.24% of JavaScript online submissions for Univalued Binary Tree.
Memory Usage: 33.9 MB, less than 59.78% of JavaScript online submissions for Univalued Binary Tree.*/

var isUnivalTree = function(root) {
    if (!root) {
        return true;
    }
    let array = [root]
    let firstVal = root.val
    while(array.length) {
        let node = array.shift();
        if (firstVal !== node.val) {
            return false;
        }
        if (node.left) {
            array.push(node.left);
        }
        if (node.right) {
            array.push(node.right)
        }
    } return true;
};

//Using DFS Recursive
/*STATS Runtime: 64 ms, faster than 73.73% of JavaScript online submissions for Univalued Binary Tree.
Memory Usage: 33.7 MB, less than 93.36% of JavaScript online submissions for Univalued Binary Tree.*/

var isUnivalTree = function(root) {
    if (!root) {
        return true;
    }
   let condition = true;
    function bfs(node) {
      if (node.val !== root.val) {
          condition = false;
           return false;
       }
      if (node.left) {
          bfs(node.left)
      }  
      if (node.right) {
          bfs(node.right)
      } 
    }
    bfs(root)
    return condition;
};
