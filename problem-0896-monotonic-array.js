/*896. Monotonic Array
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.
Example 1:

Input: [1,2,2,3]
Output: true
Example 2:

Input: [6,5,4,4]
Output: true
Example 3:

Input: [1,3,2]
Output: false
Example 4:

Input: [1,2,4,5]
Output: true
Example 5:

Input: [1,1,1]
Output: true
 

Note:

1 <= A.length <= 50000
-100000 <= A[i] <= 100000
*/
//My Solution
/*STATS
Runtime: 68 ms, faster than 92.15% of JavaScript online submissions for Monotonic Array.
Memory Usage: 40.6 MB, less than 60.00% of JavaScript online submissions for Monotonic Array.
*/
var isMonotonic = function(A) {
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < A[i+1]) {
            decreasing = false;
        }
        if (A[i] > A[i+1]) {
            increasing = false;
        }
    }
    if (increasing || decreasing) {
        return true;
    }
    return false;
};

console.log(isMonotonic([6,5,4,4]))

