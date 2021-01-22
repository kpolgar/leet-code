/*382. Linked List Random Node
Medium

Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

 

Example 1:

Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
 

Constraints:

The number of nodes in the linked list will be in the range [1, 104]
-104 <= Node.val <= 104
At most 104 calls will be made to getRandom.
 

Follow up:

What if the linked list is extremely large and its length is unknown to you?
Could you solve this efficiently without using extra space?*/

/*STATS Runtime: 112 ms, faster than 92.14% of JavaScript online submissions for Linked List Random Node.
Memory Usage: 46.2 MB, less than 29.76% of JavaScript online submissions for Linked List Random Node.*/

class Solution {
    constructor(head) {
        this.head = head
        this.length = this.getLength(this.head)
    }
    
    getLength (head) {
        let l = 0
        let node = head
        while (node) {
            l++
            node = node.next
        }
        return l;
    }
    
    getRandom() {
        let random = Math.floor(Math.random() * this.length+1)
        if (random === 1) {
            return this.head.val
        }
        let node = this.head
        for (let i = 2; i <= random; i++) {
            node = node.next
        }
        return node.val
        
    }
}
