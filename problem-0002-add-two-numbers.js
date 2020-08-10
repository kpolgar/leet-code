/*2. Add Two Numbers
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.*/

/*STATS Runtime: 120 ms, faster than 87.46% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 42.5 MB, less than 32.06% of JavaScript online submissions for Add Two Numbers.*/

var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(null, null)

    let node1 = l1
    let node2 = l2
    let node3 = l3
    let remainder = 0;
    let tempNode;
    while(node1 || node2) {
            let first = 0;
            let second = 0;
            if (node1) {
                first = node1.val;
            } 
            if (node2) {
                second = node2.val;
            } 
            let sum = first + second  + remainder;
            if (sum > 9) {
                node3.val = sum % 10
                remainder = Math.floor(sum / 10)
            } else {
                node3.val = sum;
                remainder = 0;
            }
            if (node1) {
             node1 = node1.next;   
            }
            if (node2) {
              node2 = node2.next;  
            }
            node3.next = new ListNode(null,null)
            tempNode = node3;
            node3 = node3.next;        
    }
    if (remainder) {
        tempNode.next = new ListNode(remainder,null)
    } else {
      tempNode.next = null;  
    }
    
    return l3;
};
