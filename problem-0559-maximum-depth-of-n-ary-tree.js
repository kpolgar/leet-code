/*559. Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: 3
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5
 

Constraints:

The depth of the n-ary tree is less than or equal to 1000.
The total number of nodes is between [0, 10^4].*/

//Using BFS (Iterative)
/*STATS Runtime: 72 ms, faster than 72.90% of JavaScript online submissions for Maximum Depth of N-ary Tree.
Memory Usage: 38.7 MB, less than 43.11% of JavaScript online submissions for Maximum Depth of N-ary Tree.*/

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let array = [root, 's'];
    let counter = 1;
    while (array.length > 1) {
        let curr = array.shift();
        if (curr !== 's') {
            array.push(...curr.children);    
        } else {
            array.push('s');
            counter++;
        }
    } return counter;
};

//Using DFS Preorder (Recursive)
/*STATS Runtime: 72 ms, faster than 72.90% of JavaScript online submissions for Maximum Depth of N-ary Tree.
Memory Usage: 38.9 MB, less than 39.44% of JavaScript online submissions for Maximum Depth of N-ary Tree.*/

var maxDepth = function(root) {

    let max = 0;
    
    const preOrder = (node, depth) => {
        if (!node) {
            return depth;
        }
        depth++;
        if (depth > max) {
            max = depth;
        }
        for (let i = 0; i < node.children.length; i++) {
            preOrder(node.children[i], depth)
        }  
    }
    preOrder(root, 0);
    return max;
};
