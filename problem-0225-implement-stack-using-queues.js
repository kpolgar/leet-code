/*225. Implement Stack using Queues

Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).*/


/*STATS Runtime: 48 ms, faster than 86.33% of JavaScript online submissions for Implement Stack using Queues.
Memory Usage: 33.8 MB, less than 75.00% of JavaScript online submissions for Implement Stack using Queues.*/

/**
 * Initialize your data structure here.
 */
class Queue {
    constructor() {
        this.data = [];
    }
    
    add(record) {
        this.data.unshift(record)
    }
    
    remove() {
        return this.data.pop();
    }
    
    peek() {
        return this.data[this.data.length-1]
    }
}

class MyStack {
    constructor() {
        this.first = new Queue();
        this.second = new Queue();
        this.topE;

    }
    push(x) {
        this.first.add(x)
        this.topE = x;
    }
    
    pop() {
        let last = this.topE;
        while(this.first.peek() && this.first.peek() !== last) {
            this.topE = this.first.peek()
            this.second.add(this.first.remove());
        }
        let temp = this.first;
        this.first = this.second;
        this.second = temp;
        return this.second.remove()
    }
    
    top() {
        return this.topE;
    }
    
    empty() {
        if (this.first.peek()) {
            return false;
        }; return true;
    }
}


//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */
