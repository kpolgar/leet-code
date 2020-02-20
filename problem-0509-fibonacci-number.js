/*509. Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 
Note:

0 ≤ N ≤ 30.*/

/*STATS Runtime: 68 ms, faster than 40.88% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 34.3 MB, less than 27.27% of JavaScript online submissions for Fibonacci Number.*/

//Recursive Solution

var fib = function(N) { //O(2^n)
    if(N < 2) {
      return N;   
    } 
    return fib(N-1)+fib(N-2);
};

//Iterative Solution

/*STATS Runtime: 44 ms, faster than 98.11% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 33.8 MB, less than 90.91% of JavaScript online submissions for Fibonacci Number.*/

var fib = function(N) { //O(n)
  let fibArray = [0, 1];
  for (let i = 2; i < N + 1; i++) {
    fibArray.push(fibArray[i-2] + fibArray[i-1]);
  } 
  return fibArray[N]
} 
