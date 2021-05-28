/*1013. Partition Array Into Three Parts With Equal Sum

Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

 

Example 1:

Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

Constraints:

3 <= arr.length <= 5 * 104
-104 <= arr[i] <= 104*/

/*STATS Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
Memory Usage: 43.8 MB, less than 74.17% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.*/

var canThreePartsEqualSum = function(A) {
    let sum = A.reduce(function(a,b){return a + b})
    let tot = 0
    let parts = 0 
    for (let i = 0; i < A.length; i++) {
        tot += A[i]
        if (tot === sum/3) {
            parts++
            tot = 0
        }
    } return parts >= 3
};
