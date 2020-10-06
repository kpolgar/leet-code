/*148. Sort List
Medium

Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105*/

/*STATS Runtime: 104 ms, faster than 95.02% of JavaScript online submissions for Sort List.
Memory Usage: 46.7 MB, less than 24.12% of JavaScript online submissions for Sort List.*/

var sortList = function(head) {
    
    function sList(node) {
        if (node === null || node.next === null) {
            return node;
        }
        let temp = node;
        let slow = node;
        let fast = node;

        while (fast !== null && fast.next !== null) { 
            temp = slow;
            slow = slow.next
            fast = fast.next.next

        }

        temp.next = null;

        let leftSide = sList(node)
        let rightSide =sList(slow)
        return merge(leftSide, rightSide)
    }
    
    function merge(l1, l2) {
        let sortedTemp = new ListNode(0)
        let curr = sortedTemp
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }
        if (l1 !== null) {
            curr.next = l1
            l1 = l1.next
        }
        
        if (l2 !== null) {
            curr.next = l2
            l2 = l2.next
        }
        
        return sortedTemp.next;
    } 
    
    return sList(head)
};
