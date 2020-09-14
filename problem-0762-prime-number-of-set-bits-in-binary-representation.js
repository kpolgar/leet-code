/*762. Prime Number of Set Bits in Binary Representation

Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 1s present when written in binary. For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)

Example 1:

Input: L = 6, R = 10
Output: 4
Explanation:
6 -> 110 (2 set bits, 2 is prime)
7 -> 111 (3 set bits, 3 is prime)
9 -> 1001 (2 set bits , 2 is prime)
10->1010 (2 set bits , 2 is prime)
Example 2:

Input: L = 10, R = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)
Note:

L, R will be integers L <= R in the range [1, 10^6].
R - L will be at most 10000.*/

/*STATS Runtime: 380 ms, faster than 58.82% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
Memory Usage: 42.7 MB, less than 43.14% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.*/

var countPrimeSetBits = function(L, R) {
    
    function checkIfPrime(num) {
        if (num === 1) {return false}
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }
    let counter = 0;
    for (let i = L; i <= R; i++) {
        let binary = i.toString(2) + '';
        let setBits = binary.split('').reduce(function(acc, curr){
                return Number(acc) + Number(curr)
        }, 0)
        let prime = checkIfPrime(setBits)
        //console.log(binary, setBits, prime)
        if (prime) {
            counter++
        }
    }
    console.log(counter)
    return counter
};

//Solution 2 The only prime values that fit in the range are: 2, 3, 5, 7, 11, 13, 17, or 19

/*STATS Runtime: 392 ms, faster than 56.00% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
Memory Usage: 42 MB, less than 62.00% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.*/

var countPrimeSetBits = function(L, R) {
   
    let counter = 0;
    for (let i = L; i <= R; i++) {
        let binary = i.toString(2) + '';
        let setBits = binary.split('').reduce(function(acc, curr){
                return Number(acc) + Number(curr)
        }, 0)
        if (setBits === 2|| setBits === 3 || setBits === 5 || setBits === 7 || setBits === 11 || setBits === 13 || setBits === 17 || setBits === 19 ) {
            counter++;
        }  
    }
    return counter
};
