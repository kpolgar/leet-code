/*155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.*/

/*STATS Runtime: 100 ms, faster than 84.72% of JavaScript online submissions for Min Stack.
Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions for Min Stack.*/

class MinStack {
    constructor() {
        this.data = [];
        this.min = [];
    }
    
    push(x) {
        this.data.push(x);
        if (this.min.length === 0 || x < this.min[this.min.length-1]) {
            this.min.push(x)
        } else {
            this.min.push(this.min[this.min.length-1])
        }
    }
    
    pop(x) {
        this.data.pop();
        this.min.pop();
        return;
    }
    
    top() {
        return this.data[this.data.length-1]
    }
    
    getMin() {
        return this.min[this.min.length-1]
    }
}
