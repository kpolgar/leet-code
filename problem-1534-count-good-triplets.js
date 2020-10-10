/*1534. Count Good Triplets

Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.

Return the number of good triplets.

 

Example 1:

Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
Example 2:

Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
Output: 0
Explanation: No triplet satisfies all conditions.
 

Constraints:

3 <= arr.length <= 100
0 <= arr[i] <= 1000
0 <= a, b, c <= 1000*/

/*STATS Runtime: 80 ms, faster than 89.26% of JavaScript online submissions for Count Good Triplets.
Memory Usage: 41.9 MB, less than 5.19% of JavaScript online submissions for Count Good Triplets.*/

var countGoodTriplets = function(arr, a, b, c) {
    let prefix = []
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                prefix.push([i,j])
            }
        }
    }
    
    let count = 0;
    for (let i = 0; i < prefix.length; i++) {
        let first = arr[prefix[i][0]]
        let second = arr[prefix[i][1]]
        for (let j = prefix[i][1]+1; j < arr.length; j++) {
            if (Math.abs(second - arr[j]) <= b && Math.abs(first - arr[j]) <= c) {
                count++
            }
        }
    } return count;
};
