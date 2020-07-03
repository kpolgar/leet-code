/*1356. Sort Integers by The Number of 1 Bits

Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the sorted array.

Example 1:

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
Example 2:

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
Example 3:

Input: arr = [10000,10000]
Output: [10000,10000]
Example 4:

Input: arr = [2,3,5,7,11,13,17,19]
Output: [2,3,5,17,7,11,13,19]
Example 5:

Input: arr = [10,100,1000,10000]
Output: [10,100,10000,1000]
 

Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 10^4*/

/*STATS Runtime: 96 ms, faster than 62.07% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
Memory Usage: 42.7 MB, less than 7.37% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.*/

var sortByBits = function(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let binary = arr[i].toString(2)
        binary = binary.match(/1/g)
        binary = binary ? binary.length : 0;
        map[arr[i]] = binary;
    }
    return arr.sort((a, b) => map[a] - map[b] || a - b);
};

//Using Bitwise Operators
/*STATS Runtime: 84 ms, faster than 79.43% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
Memory Usage: 39 MB, less than 35.79% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.*/

var sortByBits = function(arr) {
  return arr.sort((a, b) => numBits(a) - numBits(b) || a - b);
};

const numBits = num => {
  let sum = 0;
  while (num) {
    sum += num & 1;
    num = num >> 1;
  }
  return sum;
};
