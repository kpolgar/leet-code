/*24. Swap Nodes in Pairs
Medium

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100*/

/*STATS Runtime: 72 ms, faster than 91.92% of JavaScript online submissions for Swap Nodes in Pairs.
Memory Usage: 38.7 MB, less than 65.36% of JavaScript online submissions for Swap Nodes in Pairs.*/

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head
    }
   if (!head.next.next) {
       let second = head.next
       head.next = null
       second.next = head
       return second;
   }
   let pre = new ListNode(0, null)
   let first = head
   let second = head.next;
   let third = head.next.next
   let ans = pre
   while (true) {
       second.next = first;
       pre.next = second
       first.next = third
       if (!third || !third.next) {
           break;
       }
       pre = first
       first = third
       second = third.next
       third = third.next.next  
   }
   return ans.next;
};
