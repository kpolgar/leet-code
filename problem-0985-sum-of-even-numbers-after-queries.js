/*985. Sum of Even Numbers After Queries

We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

 

Example 1:

Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: 
At the beginning, the array is [1,2,3,4].
After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
1 <= queries.length <= 10000
-10000 <= queries[i][0] <= 10000
0 <= queries[i][1] < A.length*/

//Naive Approach: Nested Loops
/*STATS Runtime: 5644 ms, faster than 15.57% of JavaScript online submissions for Sum of Even Numbers After Queries.
Memory Usage: 45.5 MB, less than 12.58% of JavaScript online submissions for Sum of Even Numbers After Queries.*/

var sumEvenAfterQueries = function(A, queries) {
    let sum = []
    for (let i = 0; i < queries.length; i++) {
        A[queries[i][1]] += queries[i][0]
        
        let tempSum = 0;
    
        for (let i = 0; i < A.length; i++) {
            if (A[i] % 2 === 0) {
                tempSum += A[i]
            }  
        }
        sum.push(tempSum)
    }
    
    
    return sum;
};

//Optimized Attemp (Does not loop through A each time)

/*STATS Runtime: 116 ms, faster than 97.01% of JavaScript online submissions for Sum of Even Numbers After Queries.
Memory Usage: 44.2 MB, less than 87.43% of JavaScript online submissions for Sum of Even Numbers After Queries.*/

var sumEvenAfterQueries = function(A, queries) {
    let sum = []
    
    let tempSum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            tempSum += A[i]
        }  
    }
    
    for (let i = 0; i < queries.length; i++) {
        let index = queries[i][1]
        let value = queries[i][0]
        
        let oldValue = A[index]
        let newValue = oldValue + value
        if (oldValue % 2 === 0) { //if oldValue was even and factored into temp sum
            if (newValue % 2 === 0) { //new Value is still even
                tempSum += (newValue - oldValue)
            } else { //if now the value becomes odd
                tempSum -= oldValue
            }
        } else { //oldValue is odd and did not factor previously
            if (newValue % 2 === 0) { //if new value is now even
                tempSum += newValue
            }
        }
        A[index] += value;
        sum.push(tempSum)
    }
    return sum;
};
