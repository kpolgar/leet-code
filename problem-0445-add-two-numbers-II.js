/*445. Add Two Numbers II
Medium

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7*/

/*STATS Runtime: 132 ms, faster than 81.94% of JavaScript online submissions for Add Two Numbers II.
Memory Usage: 45.2 MB, less than 27.98% of JavaScript online submissions for Add Two Numbers II.
*/

var addTwoNumbers = function(l1, l2) {
    let list1 = [l1.val];
    let list2 = [l2.val];
    let node1 = l1
    let node2 = l2
    while (node1.next) {
        node1 = node1.next
        list1.push(node1.val)
    }
    while (node2.next) {
        node2 = node2.next
        list2.push(node2.val)
    }

    let sum= [];
    let index = 0
    let carry = 0
    while (index <= Math.max(list1.length-1, list2.length-1) || carry!==0) {
        let first;
        let second;
        if (list1.length-index -1>= 0) {
            first = list1[list1.length-index-1]
            //console.log(first, 'first')
        } else {
            first = 0
        }
        if (list2.length-index -1>= 0) {
            second = list2[list2.length-index-1]
           // console.log(second, 'second')
        } else {
            second = 0
        }
        let temp = first + second + carry
        carry = 0
        
        if (temp >= 10) {
            sum.unshift(temp % 10)
            carry = Math.floor(temp / 10)
        } else {
            sum.unshift(temp)
        }
        
        index++
    }

    let head = new ListNode(Number(sum[0]), null)
    let node = head;
    for (let i = 1; i < sum.length; i++) {
        let temp = new ListNode(Number(sum[i]), null)
        node.next = temp
        node = node.next
    }
    
    return head;
};
