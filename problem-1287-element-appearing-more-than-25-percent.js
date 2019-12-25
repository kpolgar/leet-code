/*1287. Element Appearing More Than 25% In Sorted Array
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
 

Constraints:

1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5
*/
/*STATS
Runtime: 48 ms, faster than 97.14% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
*/

var findSpecialInteger = function(arr) {
    let threshold = arr.length * 0.25;
    
    let counter = 1;
      if (arr.length === 1) {
        return arr[0]; 
      }
      for (let i = 1; i < arr.length; i++) {
        if (arr[i]  === arr[i - 1]) {
            counter++;
        } else {
          counter = 1;
        }  
        if (counter > threshold) {
          return arr[i];
        }
      }
};
