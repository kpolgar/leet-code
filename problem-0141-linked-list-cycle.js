/*141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.*/

/*STATS Runtime: 60 ms, faster than 88.86% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 36.4 MB, less than 93.75% of JavaScript online submissions for Linked List Cycle.*/

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head.next.next;
    
    while (slow && fast) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        if (fast.next && fast.next.next) {
            fast = fast.next.next;
        } else {
            return false;
        }
    }
    return false;
};
