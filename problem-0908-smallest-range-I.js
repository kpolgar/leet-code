/*908. Smallest Range I

Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
Example 3:

Input: A = [1,3,6], K = 3
Output: 0
Explanation: B = [3,3,3] or B = [4,4,4]
 

Note:

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000*/

//First Attempt Using Sort
/*STATS Runtime: 76 ms, faster than 32.97% of JavaScript online submissions for Smallest Range I.
Memory Usage: 37.5 MB, less than 22.50% of JavaScript online submissions for Smallest Range I.*/

var smallestRangeI = function(A, K) {
    if (A.length < 2) {
        return 0;
    }
    let sorted = A.sort(function(a,b){return a-b})
    
    if (sorted[sorted.length-1] - sorted[0] <= (2 *K)) {
        return 0
    }
    else {
        return (sorted[sorted.length-1] - K) - (sorted[0] + K)
    }
};

//Second Attempt Using Math.max & Math.min
/*Runtime: 64 ms, faster than 71.43% of JavaScript online submissions for Smallest Range I.
Memory Usage: 34.8 MB, less than 97.50% of JavaScript online submissions for Smallest Range I.*/

var smallestRangeI = function(A, K) {
  let minDiff = Math.max(...A) - Math.min(...A) - (2 * K)
  return Math.max(0, minDiff);
};
