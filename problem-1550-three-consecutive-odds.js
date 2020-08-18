/*1550. Three Consecutive Odds
Easy

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000*/

 /*STATS Runtime: 64 ms, faster than 98.69% of JavaScript online submissions for Three Consecutive Odds.
Memory Usage: 36.1 MB, less than 94.77% of JavaScript online submissions for Three Consecutive Odds.*/

 var threeConsecutiveOdds = function(arr) {
    let oddInRow = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            oddInRow++
            if (oddInRow === 3) {
                return true;
            }
        } else {
            if (oddInRow > 0) {
                oddInRow = 0;
            }
        }
    }
    return false;
};
