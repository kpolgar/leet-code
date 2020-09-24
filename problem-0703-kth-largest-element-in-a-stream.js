/*703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8*/

/*STATS Runtime: 204 ms, faster than 71.97% of JavaScript online submissions for Kth Largest Element in a Stream.
Memory Usage: 45.5 MB, less than 92.20% of JavaScript online submissions for Kth Largest Element in a Stream.*/

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.data = nums.sort(function(a,b) {return b - a});
    }
    
    add(val) {
        if (this.data.length < 1) {
            this.data.push(val);
            return val;
        }
        for (let i = 0; i < this.data.length; i++) {
            if (val > this.data[i]) {
                this.data.splice(i, 0, val);
                break;
            }
            if (i === this.data.length-1) {
                this.data.push(val);
                break;
            }
        }
        
        return this.data[this.k-1]
    }
}
