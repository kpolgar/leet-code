/*1137. N-th Tribonacci Number

The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 

Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.*/

//iterative solution

/*STATS Runtime: 48 ms, faster than 85.51% of JavaScript online submissions for N-th Tribonacci Number.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for N-th Tribonacci Number.*/

var tribonacci = function(n) {
    let trib = [0, 1, 1];
    if (n < 3) {
        return trib[n];
    }
    for (let i = 3; i <= n; i++) {
        trib.push(trib[i-3] + trib[i-2] + trib[i-1])
    }
    return trib[n]
};

//Recursive memoized

/*STATS Runtime: 48 ms, faster than 85.51% of JavaScript online submissions for N-th Tribonacci Number.
Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for N-th Tribonacci Number.*/

var tribonacci = function(n) {
    if (n < 2) {
        return n;
    }
    if (n === 2) {
        return 1
    }
    
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1)
};

//0, 1, 1, 2, 4, 7, 13, 24 

let memoized = function(fn) {
    let cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

tribonacci = memoized(tribonacci)
