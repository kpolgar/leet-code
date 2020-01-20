/*1207. Unique Number of Occurrences

Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/

/*Runtime: 60 ms, faster than 44.43% of JavaScript online submissions for Unique Number of Occurrences.
Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Unique Number of Occurrences.
*/

var uniqueOccurrences = function(arr) {
    let map = {};
      
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] = map[arr[i]] + 1
        }
    }
    
    let occ = Object.values(map);
    let mySet = new Set([...occ]);
    if (occ.length === mySet.size) {
      return true;
    } return false;  
};
