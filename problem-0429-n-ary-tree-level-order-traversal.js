/*429. N-ary Tree Level Order Traversal
Medium

Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 

Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 104]*/

/*STATS Runtime: 92 ms, faster than 94.81% of JavaScript online submissions for N-ary Tree Level Order Traversal.
Memory Usage: 43.6 MB, less than 30.80% of JavaScript online submissions for N-ary Tree Level Order Traversal.*/

var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let arr = [root, 's']
    let ans = []
    let temp = []
    while (arr.length > 1) {
        let node = arr.shift()
        if (node === 's') {
            ans.push([...temp])
            temp = []
            arr.push('s')
        } else {
            temp.push(node.val)
            arr.push(...node.children)
        }   
    }
    ans.push([...temp])
    return ans;
};
