/*989. Add to Array-Form of Integer

For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

 

Example 1:

Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
Example 4:

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
 

Note：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0*/
/*STATS Runtime: 104 ms, faster than 88.30% of JavaScript online submissions for Add to Array-Form of Integer.
Memory Usage: 38.7 MB, less than 90.00% of JavaScript online submissions for Add to Array-Form of Integer.*/

var addToArrayForm = function(A, K) {
    K = K.toString();
    let i = A.length-1;
    let j = K.length-1;
    let aNumber;
    let kNumber;
    let carry = 0;
    while (j >= 0 || carry) {
      aNumber = (i >= 0) ? Number(A[i]) : 0;
      kNumber = (j >= 0) ? Number(K[j]) : 0;
      
      let sum = aNumber + kNumber + carry;
      carry = 0;
      if (sum >= 10) {
        if (i >= 0) {
          A[i] = sum % 10;
        } 
        else {
          A.unshift (sum % 10)
        }
        carry = Math.floor(sum / 10);
         i--;
         j--;
      }
      else {
        if (i >= 0) {
          A[i] = sum;
        }
        else {
          A.unshift(sum)
        }
        i--;
        j--;
      }
    } return A;
    
};

