/*706. Design HashMap
Easy

920

111

Add to List

Share
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.*/

/*STATS Runtime: 200 ms, faster than 79.44% of JavaScript online submissions for Design HashMap.
Memory Usage: 46.6 MB, less than 51.68% of JavaScript online submissions for Design HashMap.*/

class MyHashMap {
    constructor() {
        this.size = 1000;
        this.data = new Array(this.size);
    }
    
    _hash(key) {
        return key % this.size;
    }
    
    put(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = [[key, value]]
        } else {
            let bucket = this.data[address]
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                   this.data[address][i] = [key,value]; 
                    return
                }
            }
            this.data[address].push([key, value])
        }
    }
    
    get(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            return -1;
        } else {
            let bucket = this.data[address]
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1]
                }
            } return -1;
            
        }
    }
    
    remove(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            return;
        } else {
            let bucket = this.data[address]
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i,1)
                }
            }
        }
    }
}
