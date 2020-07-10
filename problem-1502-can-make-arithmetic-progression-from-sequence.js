/*1502. Can Make Arithmetic Progression From Sequence

Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

Example 1:

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
Example 2:

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
 

Constraints:

2 <= arr.length <= 1000
-10^6 <= arr[i] <= 10^6*/

/*STATS Runtime: 68 ms, faster than 93.65% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.*/

var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a,b){return a-b})
    let diff = arr[1] - arr[0]
    for (let i = 1; i < arr.length-1; i++) {
        if ((arr[i+1] - arr[i]) !== diff) {
            return false;
        }
    }
    return true;
};
