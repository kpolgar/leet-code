/*109. Convert Sorted List to Binary Search Tree

Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5*/

/*STATS Runtime: 88 ms, faster than 69.30% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.
Memory Usage: 42.1 MB, less than 10.81% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.*/

var sortedListToBST = function(head) {
    //function used to identify midpoint
    function findMid (head) {
        //searching for the midpoint of the linked list
       let slow = head;
       let fast = head;
       let prev = null;
       
        while(fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next
        }
        //detaching the portion of the list to the left of the element
        if (prev) {
            prev.next = null;
        }
         return slow;
    }
    
    function makeBST(head) {
        if (!head) {
            return null;
        }
        let mid = findMid(head)
        let node = new TreeNode(mid.val, null, null)
        if (head === mid) {
            return node;
        }
        node.left = makeBST(head);
        node.right = makeBST(mid.next);
        return node;
    }
    return makeBST(head)

};
