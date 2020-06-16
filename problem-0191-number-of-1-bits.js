/*191. Number of 1 Bits

Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

 

Example 1:

Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 

Note:

Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.*/

//Using bit mask
/*STATS Runtime: 72 ms, faster than 56.64% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 36.1 MB, less than 20.86% of JavaScript online submissions for Number of 1 Bits.*/

var hammingWeight = function(n) {
    let bits = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) {
            bits++;
        }
        mask <<= 1;
    }
    return bits;
};

//Bit Manipulation
/*STATS Runtime: 60 ms, faster than 92.68% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 35.9 MB, less than 25.61% of JavaScript online submissions for Number of 1 Bits.*/

var hammingWeight = function(n) {
    let sum = 0;
    while (n != 0) {
        sum++;
        n &= (n-1);
    }
    return sum;
};

//Using a for loop and toString
/*STATS Runtime: 68 ms, faster than 70.25% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 37.2 MB, less than 5.89% of JavaScript online submissions for Number of 1 Bits.*/

var hammingWeight = function(n) {
    let binary = n.toString(2)
    let counter = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            counter++;
        }
    } return counter;
};

//Using Reduce
/*Runtime: 68 ms, faster than 70.25% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 36.1 MB, less than 16.68% of JavaScript online submissions for Number of 1 Bits.*/

var hammingWeight = function(n) {
     return n.toString(2).split('').reduce((total, acc) => Number(total)+Number(acc))
};
