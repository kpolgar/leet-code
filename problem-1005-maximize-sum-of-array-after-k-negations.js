/*1005. Maximize Sum Of Array After K Negations

Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

 

Example 1:

Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].
Example 2:

Input: A = [3,-1,0,2], K = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
Example 3:

Input: A = [2,-3,-1,5,-4], K = 2
Output: 13
Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
 

Note:

1 <= A.length <= 10000
1 <= K <= 10000
-100 <= A[i] <= 100*/

/*STATS Runtime: 80 ms, faster than 95.71% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
Memory Usage: 39.1 MB, less than 87.14% of JavaScript online submissions for Maximize Sum Of Array After K Negations.*/

var largestSumAfterKNegations = function(A, K) {
    A.sort(function(a,b) {return a - b}) 
    
    let sum = A.reduce(function(a,b) {return a + b})
    
    //if 0 is the lowest number
    if (A[0] === 0) {
        return sum
    }
    
    else if (A[0] > 0) { //if all numbers are positive
        if (K % 2 === 0) { //if K is even
            return sum
        } else {
            return sum - A[0] - A[0]
        }
    }
    
    else { //if lowest numbers are negative 
        let index = 0
        
        while (A[index] && A[index] < 0 && K > 0) {
            sum += (Math.abs(A[index]) + Math.abs(A[index]))
            index++
            K--
        }
        if (K % 2 === 0) {
            return sum;
        } else {
            if (A[index] === undefined) {
                return sum - Math.abs(A[index-1]) - Math.abs(A[index-1])
            }
            return Math.max((sum - Math.abs(A[index-1]) - Math.abs(A[index-1])), (sum - Math.abs(A[index]) - Math.abs(A[index])))
        }
    }
};
