/*83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3*/

/*STATS Runtime: 60 ms, faster than 90.64% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 35.6 MB, less than 56.25% of JavaScript online submissions for Remove Duplicates from Sorted List.*/

var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (prev.val === curr.val) {
            prev.next = curr.next
            curr = curr.next
        } else {
            curr = curr.next;
            prev = prev.next;
        }
    } return head;
};
