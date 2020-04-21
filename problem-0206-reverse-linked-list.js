/*206. Reverse Linked List

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?*/

//Iterative Solution time complexity: O(n) and O(1)

/*STATS Runtime: Runtime: 52 ms, faster than 93.44% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 35.2 MB, less than 45.65% of JavaScript online submissions for Reverse Linked List.*/

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextNode = null;
    
    while (curr) {
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode
    }
    head = prev;
    return head;
}

//NULL 1->2->3->4->5->NULL

//Recursive Solution time complexity: O(n) and O(n) because there are O(n) call stacks

/*STATS Runtime: 56 ms, faster than 80.81% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 35.4 MB, less than 21.74% of JavaScript online submissions for Reverse Linked List.*/

reverseList = function(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
    
  let rev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return rev; 
}
