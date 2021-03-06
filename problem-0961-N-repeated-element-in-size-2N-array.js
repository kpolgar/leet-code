
/*961. N-Repeated Element in Size 2N Array
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:

Input: [1,2,3,3]
Output: 3
Example 2:

Input: [2,1,2,5,3,2]
Output: 2
Example 3:

Input: [5,1,5,2,5,3,5,4]
Output: 5
 

Note:

4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even*/

/*STATS Runtime: 56 ms, faster than 91.88% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions for N-Repeated Element in Size 2N Array.*/

var repeatedNTimes = function(A) {
    let map = {};
    for (let i = 0; i < A.length; i++) {
        if (!map[A[i]]) {
            map[A[i]] = 1;
        }
        else {
            return A[i]
        }
    }
};
