/*852. Peak Index in a Mountain Array

Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.*/

/*STATS Runtime: 40 ms, faster than 99.56% of JavaScript online submissions for Peak Index in a Mountain Array.
Memory Usage: 35.1 MB, less than 50.00% of JavaScript online submissions for Peak Index in a Mountain Array.*/

var peakIndexInMountainArray = function(A) {
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[i-1]) {
            return i-1;
        }
    }
};
