/*1399. Count Largest Group

Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
Example 3:

Input: n = 15
Output: 6
Example 4:

Input: n = 24
Output: 5
 

Constraints:

1 <= n <= 10^4*/

/*STATS Runtime: 84 ms, faster than 85.16% of JavaScript online submissions for Count Largest Group.
Memory Usage: 43.5 MB, less than 19.54% of JavaScript online submissions for Count Largest Group.*/

var countLargestGroup = function(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        let splitNum = i.toString().split('')
        let sum = splitNum.reduce(function(a,b){return Number(a) + Number(b)})
        if (arr[sum]) {
            arr[sum]++
        } else {
            arr[sum] = 1
        }
    }
    arr.sort(function(a,b){return b-a})
    let greatest = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            greatest++;
        } else {
            return greatest;
        }
    }
};
