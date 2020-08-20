/*705. Design HashSet
Easy

503

86

Add to List

Share
Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet. 
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

Example:

MyHashSet hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)

Note:

All values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashSet library.*/

/*STATS Runtime: 176 ms, faster than 94.04% of JavaScript online submissions for Design HashSet.
Memory Usage: 45.5 MB, less than 41.57% of JavaScript online submissions for Design HashSet.*/

class MyHashSet {
    constructor() {
        this.size = 1000;
        this.data = new Array(this.size);
    }
    
    _hash(key) {
        return key % this.size;
    }
    
    add(key) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [key]
        } else {
            let curr = this.data[address];
            for (let i = 0; i < curr.length; i++) {
                if (curr[i] === key) {
                    return;
                }
            }
            this.data[address].push(key)
        }
    }
    
    remove(key) {
        let address = this._hash(key);
        if (this.data[address]) {
            let curr = this.data[address];
            for (let i = 0; i < curr.length; i++) {
                if (curr[i] === key) {
                    curr.splice(i,1)
                }
            }
        } else {
            return;
        }
    }
    
    contains(key) {
        let address = this._hash(key);
         if (this.data[address]) {
            let curr = this.data[address];
            for (let i = 0; i < curr.length; i++) {
                if (curr[i] === key) {
                    return true
                }
            }
             return false;
        } else {
            return false;
        }
    }
}
