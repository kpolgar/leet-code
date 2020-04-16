/*203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5*/

/*STATS Runtime: 68 ms, faster than 88.64% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 36.8 MB, less than 75.00% of JavaScript online submissions for Remove Linked List Elements.*/

var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    
    let prev = null;
    let current = head;
    
    while (current) {
        if (current.val === val && prev === null) {
            current = current.next
            head = current;
        }
       else if (current.val === val && prev !== null) {
            prev.next = current.next;
            current = current.next;
        }
        else {
            prev = current
            current = current.next
        }
        
    } return head
};
