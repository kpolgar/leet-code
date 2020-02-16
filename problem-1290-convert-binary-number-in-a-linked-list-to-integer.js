/*1290. Convert Binary Number in a Linked List to Integer
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
Example 5:

Input: head = [0,0]
Output: 0
 

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.*/

/*Runtime: 48 ms, faster than 95.43% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.*/

var getDecimalValue = function(head) {
    let number = head.val.toString();
    let currentNode = head;
    while (currentNode.next) {
        currentNode = currentNode.next;
        number = number + currentNode.val.toString()
        
    } return parseInt(number,2);
};
