/*1305. All Elements in Two Binary Search Trees
Medium

Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:

Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]
Example 3:

Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
Example 4:

Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]
Example 5:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].*/

/*Runtime: 188 ms, faster than 81.39% of JavaScript online submissions for All Elements in Two Binary Search Trees.
Memory Usage: 49.5 MB, less than 5.08% of JavaScript online submissions for All Elements in Two Binary Search Trees.*/

var getAllElements = function(root1, root2) {
    let arr1 = [];
    let arr2 = [];
    
    function dfs(node, arr) {
        if (!node) {
            return
        }
        if (node.left) {
            dfs(node.left, arr)
        }
        arr.push(node.val)
        if (node.right) {
            dfs(node.right, arr)
        }       
    }
    
    dfs(root1, arr1)
    dfs(root2, arr2)
    
    let joined = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while(joined.length < arr1.length + arr2.length) {
        if (pointer1 >= arr1.length) {
            joined.push(arr2[pointer2]);
            pointer2++
        }
        else if (pointer2 >= arr2.length) {
            joined.push(arr1[pointer1]);
            pointer1++
        }
        else if(arr1[pointer1] < arr2[pointer2]) {
            joined.push(arr1[pointer1]);
            pointer1++;
        } else {
            joined.push(arr2[pointer2]);
            pointer2++
        }
    } return joined;
};
