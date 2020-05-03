/*976. Largest Perimeter Triangle

Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.

 

Example 1:

Input: [2,1,2]
Output: 5
Example 2:

Input: [1,2,1]
Output: 0
Example 3:

Input: [3,2,3,4]
Output: 10
Example 4:

Input: [3,6,2,3]
Output: 8
 

Note:

3 <= A.length <= 10000
1 <= A[i] <= 10^6
Accepted
29.1K
Submissions
50.7K
Seen this question in a real interview before?*/

/*STATS Runtime: 80 ms, faster than 97.73% of JavaScript online submissions for Largest Perimeter Triangle.
Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Largest Perimeter Triangle.*/

var largestPerimeter = function(A) {
    let sorted = A.sort(function(a,b){return b-a}) 
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < sorted[i+1] + sorted[i+2]) {
            return sorted[i] + sorted[i+1] + sorted[i+2];  
        }
    }
    
    return 0;
};
