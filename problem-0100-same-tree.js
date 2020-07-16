/*100. Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false*/

//Using BFS
/*STATS Runtime: 68 ms, faster than 63.22% of JavaScript online submissions for Same Tree.
Memory Usage: 33.6 MB, less than 84.16% of JavaScript online submissions for Same Tree.*/

var isSameTree = function(p, q) {
    let arrP = [p];
    let arrQ = [q]
    
    while (arrP.length || arrQ.length) {
        let nodeP = arrP.shift();
        let nodeQ = arrQ.shift();
        if (nodeP && nodeQ) {
           if (nodeP.val !== nodeQ.val) {
            return false;
            } 
            arrP.push(nodeP.left);
            arrP.push(nodeP.right);
            arrQ.push(nodeQ.left); 
            arrQ.push(nodeQ.right); 
        } 
        if (nodeP && !nodeQ) {
            return false;
        }
        if (nodeQ && !nodeP) {
            return false;
        }         
    }
    return true;
};


//Using Recursion
/*STATS Runtime: 68 ms, faster than 63.22% of JavaScript online submissions for Same Tree.
Memory Usage: 33.7 MB, less than 60.78% of JavaScript online submissions for Same Tree.*/

var isSameTree = function(p, q) {
    if(!p && !q) {
        return true;
    } 
    if (!p || !q) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
    
}
