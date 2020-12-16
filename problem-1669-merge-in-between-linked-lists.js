/*1669. Merge In Between Linked Lists
Medium

You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure incidate the result:


Build the result list and return its head.

 

Example 1:


Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
Example 2:


Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.
 

Constraints:

3 <= list1.length <= 104
1 <= a <= b < list1.length - 1
1 <= list2.length <= 104*/

/*STARuntime: 216 ms, faster than 90.34% of JavaScript online submissions for Merge In Between Linked Lists.
Memory Usage: 51.2 MB, less than 66.18% of JavaScript online submissions for Merge In Between Linked Lists.TS */

var mergeInBetween = function(list1, a, b, list2) {
    
    //first segment begins with list1 ends weth seg1End
    //second segment begins with list2 ends with seg2End
    //third segment begines with seg3
    let seg1End = null
    let seg3 = null
    let node = list1

    let counter = 0
    while(node !== null) {
        if (counter === a-1) {
            seg1End = node;
        }
        
        if (counter === b + 1) {
            seg3 = node;
        } 
        
        node = node.next
        counter++   
    }
    let seg2End = list2
    while (seg2End.next !== null) {
        seg2End = seg2End.next
    }
    seg1End.next = list2
    seg2End.next = seg3
    
    return list1
};
