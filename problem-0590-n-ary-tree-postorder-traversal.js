/*590. N-ary Tree Postorder Traversal
Easy

Given an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Follow up:

Recursive solution is trivial, could you do it iteratively?

Example 1:

Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]
Example 2:

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 

Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]*/

//Recursive Solution
/*STATS Runtime: 76 ms, faster than 77.37% of JavaScript online submissions for N-ary Tree Postorder Traversal.
Memory Usage: 39.6 MB, less than 30.88% of JavaScript online submissions for N-ary Tree Postorder Traversal.*/

var postorder = function(root) {
    let arr = [];
    function traversePost(node) {
        if (!node) {
                return;
            }
        for (let i = 0; i < node.children.length; i++){
            traversePost(node.children[i])
        }
        arr.push(node.val)
    }
    traversePost(root);
    return arr;
};

//Iterative Solution Using Reverse()

/*STATS Runtime: 84 ms, faster than 53.98% of JavaScript online submissions for N-ary Tree Postorder Traversal.
Memory Usage: 40.5 MB, less than 17.31% of JavaScript online submissions for N-ary Tree Postorder Traversal.*/

var postorder = function(root) {
    let arr = [root];
    let answer = [];
    while(arr.length) {
        let curr = arr.pop()
        if (curr) {
            answer.push(curr.val)
            arr.push(...curr.children)
        }
    }
    return answer.reverse();
};

//Iterative Solution Using Unshift
/*STATS Runtime: 76 ms, faster than 77.42% of JavaScript online submissions for N-ary Tree Postorder Traversal.
Memory Usage: 39.9 MB, less than 27.75% of JavaScript online submissions for N-ary Tree Postorder Traversal.*/

var postorder = function(root) {
    let arr = [root];
    let answer = [];
    while(arr.length) {
        let curr = arr.pop()
        if (curr) {
            answer.unshift(curr.val)
            arr.push(...curr.children)
        }
    }
    return answer;
};
