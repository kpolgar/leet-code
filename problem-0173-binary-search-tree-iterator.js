/*173. Binary Search Tree Iterator
Medium

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

 

Example:



BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
 

Note:

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.*/

/*STATS Runtime: 128 ms, faster than 99.66% of JavaScript online submissions for Binary Search Tree Iterator.
Memory Usage: 50.4 MB, less than 39.69% of JavaScript online submissions for Binary Search Tree Iterator.*/

class BSTIterator {
    constructor(root) {
        this.order = this.getOrder(root)
        this.index = 0;
    }
    
    getOrder(root) {
        let array = []
        //depth first search in order
        function dfs(node) {
            if (!node) {
                return
            }
            if (node.left) {
                dfs(node.left)
            }
            array.push(node.val)
            if (node.right) {
                dfs(node.right)
            }
        }
        dfs(root)
        return array;
    }
    
    next () { 
        let ans = this.order[this.index]
        this.index++;
        return ans
    }
    
    hasNext() {
        if (this.order[this.index] !== undefined) {
            return true;
        } else {
            return false;
        }
    }
}
