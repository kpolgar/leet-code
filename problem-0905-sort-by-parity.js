/*905. Sort Array By Parity
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition. 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000*/

/*STATS Runtime: 84 ms, faster than 34.52% of JavaScript online submissions for Sort Array By Parity.
Memory Usage: 37.6 MB, less than 8.00% of JavaScript online submissions for Sort Array By Parity.*/

 var sortArrayByParity = function(A) {
    let end = A.length;
    let curr = 0;
    while(curr < end) {
       if (A[curr] === 1 || A[curr] % 2 !== 0) {
          let temp = A.splice(curr,1);
          A.push(temp[0])
          end--
       } else {
         curr++;
       }
    } return A;
};

//Second Attempt

/*STATS Runtime: 72 ms, faster than 90.48% of JavaScript online submissions for Sort Array By Parity.
Memory Usage: 37.6 MB, less than 8.00% of JavaScript online submissions for Sort Array By Parity.*/

var sortArrayByParity = function(A) {
    let answerE=[];
    let answerO=[];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0 || A[i] === 0 && A[i] !== 1) {
            answerE.push(A[i])
        } else {
            answerO.push(A[i])
        }
    } 
    answerE.push(...answerO)
    
    return answerE
};
