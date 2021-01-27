/*725. Split Linked List in Parts
Medium

Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

Return a List of ListNode's representing the linked list parts that are formed.

Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
Example 1:
Input:
root = [1, 2, 3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The input and each element of the output are ListNodes, not arrays.
For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3, and root.next.next.next = null.
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but it's string representation as a ListNode is [].
Example 2:
Input: 
root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
Note:

The length of root will be in the range [0, 1000].
Each value of a node in the input will be an integer in the range [0, 999].
k will be an integer in the range [1, 50].*/

/*STATS Runtime: 84 ms, faster than 85.51% of JavaScript online submissions for Split Linked List in Parts.
Memory Usage: 40.9 MB, less than 23.19% of JavaScript online submissions for Split Linked List in Parts.*/

var splitListToParts = function(root, k) {
    let length = 0
    
    //find the length of the linked list
    let node = root
    while (node) {
        length++
        node = node.next
    }
    
    //get the length that each segment needs to be
    let arr = new Array(k).fill(0)
    let num = 0
    while (num < length) {
        for (let i = 0; i < arr.length; i++) {
            arr[i]++
            num++
            if (num >= length) {
                break
            }
        }
    }

    let ans = []
    let end = root
    let beg = root
    for (let i = 0; i < arr.length; i++) {
        ans.push(beg)
        let piece = ans[ans.length-1]
        end = piece
        beg = piece

        for (let j = 0; j < arr[i]-1; j++) {
            //getting both pointers to the end of segment
            end = end.next
            beg = beg.next
        }
   
        if (beg) { 
            beg = beg.next
        }
        if (end) {
            end.next = null    
        }
          
    }
    return ans
};
