/*234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?*/

/*Runtime: 68 ms, faster than 38.75% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 45.8 MB, less than 20.00% of JavaScript online submissions for Palindrome Linked List.*/

var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }
    let node = head;
    let vals=[];
    while (node) {
        vals.push(node.val)
        node = node.next;
    }

    return vals.join('') === [...vals].reverse().join('')
    
};

/*Runtime: 60 ms, faster than 81.37% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Palindrome Linked List.*/

//Optimization
//Find the midpoint by using a slow and a fast pointer
//Reverse the second half of the linked list
//Compare the first half to the second half reversed

var isPalindrome = function(head) {
    let slow = head
    let fast = head
    
    while (fast && fast.next != null) {
        slow = slow.next
        fast = fast.next
        fast = fast.next
    }

    let reverse = null
    
    while (slow != null) {  
        let temp = slow.next 
        slow.next = reverse
        reverse = slow
        slow = temp
    }
    
    let p1 = head
    let p2R = reverse
    
    while (p1 != null && p2R != null) {
        if (p1.val != p2R.val) {
            return false
        }
        p1 = p1.next
        p2R = p2R.next
    }
    
    return true
}; 
