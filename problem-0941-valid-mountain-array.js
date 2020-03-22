/*941. Valid Mountain Array
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

Example 1:

Input: [2,1]
Output: false
Example 2:

Input: [3,5,5]
Output: false
Example 3:

Input: [0,3,2,1]
Output: true
 

Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000 */

//Naive Solution: Using Sort

/*STATS Runtime: 96 ms, faster than 6.88% of JavaScript online submissions for Valid Mountain Array.
Memory Usage: 38.8 MB, less than 11.11% of JavaScript online submissions for Valid Mountain Array.*/

var validMountainArray = function(A) {
    if (A.length < 3) {
        return false;
    }
    
   let sorted = [...A].sort(function(a,b) {return b-a})
    
    let max = sorted[0];
    if (max === A[A.length-1] || max === A[0]) { 
        return false;
    }
    
   let increasing = true; 
    
   for (let i = 0; i < A.length; i++) {
       if (increasing) {
           if (A[i] === max) {
               increasing = false;
           }
           else if (A[i] === A[i+1] || A[i] > A[i+1]) {
                return false;
            } 
       }
       
       if (!increasing) {
           if (A[i] === A[i+1] || A[i] < A[i+1]) {
                return false;
            } 
       }
    } return true;       
}

//Second Attemps Without Using Sort

/*STATS Runtime: 48 ms, faster than 98.94% of JavaScript online submissions for Valid Mountain Array.
Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions for Valid Mountain Array.*/

var validMountainArray = function(A) {
    if (A.length < 3) {
        return false;
    }
     let i = 0;
     let length = A.length; 
    while (A[i] < A[i+1]) {
        i+=1
    }     
    if (i === 0 || i === length-1) { //making sure the peak is not at the very beginning or the very end
        return false;
    }
     while (A[i] > A[i+1]) {
        i+=1
    } 
   return i === length-1;       //checking that we continue decreasing for the rest of the array
} 
