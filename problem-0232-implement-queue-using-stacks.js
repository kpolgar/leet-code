/*232. Implement Queue using Stacks

Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
*/

/*Stats Runtime: 48 ms, faster than 90.05% of JavaScript online submissions for Implement Queue using Stacks.
Memory Usage: 33.8 MB, less than 33.33% of JavaScript online submissions for Implement Queue using Stacks.*/

/**
 * Initialize your data structure here.
 */

class Stack {
  constructor() {
   this.data = [];
  }

  push(record) {
    this.data.push(record)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length-1];
  }
}

class MyQueue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }


/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
    push (record) {
        this.first.push(record)
    }

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
    pop () {
        while(this.first.peek()) {
                this.second.push(this.first.pop())
            }
            let record = this.second.pop();

            while(this.second.peek()) {
                this.first.push(this.second.pop())
            }
            return record;
    };

/**
 * Get the front element.
 * @return {number}
 */
    peek () {
        while(this.first.peek()) {
                this.second.push(this.first.pop())
            }
            let record = this.second.peek();

            while(this.second.peek()) {
                this.first.push(this.second.pop())
            }
            return record;
    };

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
    empty () {
        if (this.first.peek()) {
            return false;
        }
        return true;
    };
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

