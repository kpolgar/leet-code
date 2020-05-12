/*922. Sort Array By Parity II

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 

Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000*/

/*STATS Runtime: 100 ms, faster than 39.33% of JavaScript online submissions for Sort Array By Parity II.
Memory Usage: 41.8 MB, less than 9.09% of JavaScript online submissions for Sort Array By Parity II.*/

var sortArrayByParityII = function(A) {
    let evens = [];
    let odds = [];
    let answer = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            evens.push(A[i])
        } else {
            odds.push(A[i])
        }
    }
    
    while (evens.length || odds.length) {
        answer.push(evens.pop());
        answer.push(odds.pop());
    }
    
    return answer;
};

//Second Attempt

/*STATS Runtime: 92 ms, faster than 80.90% of JavaScript online submissions for Sort Array By Parity II.
Memory Usage: 40.4 MB, less than 27.27% of JavaScript online submissions for Sort Array By Parity II.*/

var sortArrayByParityII = function(A) {
    let evenPointer = 0
    let oddPointer = 1;
    let answer = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            answer[evenPointer] = A[i];
            evenPointer+=2;
        } else {
            answer[oddPointer] = A[i];
            oddPointer+=2;
        }
    }
    return answer;
};
