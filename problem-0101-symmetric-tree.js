/*101. Symmetric Tree
Easy

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.*/

//Iterative Solution

/*STATS Runtime: 68 ms, faster than 40.12% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 37.7 MB, less than 10.00% of JavaScript online submissions for Symmetric Tree.*/

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    let array = [root, 's'];         //[1,'s', 2, 2, 's']
    let values = [];
    
    while (array.length > 1) {
        let node = array.shift()
        if (node === 's') {
            array.push('s')
           for (let i = 0; i < values.length/2; i++) {
               if (values[i] !== values[values.length-1-i]) {
                   return false;
               }
           } 
           if ([...values].join('') !== [...values].reverse().join('')) {
                return false
            }
            values = [];
        } 
        else {      
            if (node.left) {
                array.push(node.left); 
                values.push(node.left.val)
            } 
            if (!node.left) {
                values.push('n')
            }
            
             if (node.right) {
                values.push(node.right.val)
                 array.push(node.right)
            } 
            if (!node.right) {
                values.push('n')
            }
        }
    }
    return true;  
};

//Recursive Solution
/*STATS Runtime: 64 ms, faster than 57.17% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 37.4 MB, less than 10.00% of JavaScript online submissions for Symmetric Tree.*/


let isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    return isMirror(root.left, root.right)
};

let isMirror = function(tree1, tree2) {
    if (tree1 === null || tree2 === null)  {
        return tree1 === tree2
    }  
    if (tree1.val !== tree2.val) {
        return false;
    }
    
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)  
}
