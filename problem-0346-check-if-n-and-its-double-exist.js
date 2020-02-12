/*346. Check If N and Its Double Exist
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
 

Constraints:

2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3*/

//First Attempt
/*STATS Runtime: 68 ms, faster than 17.51% of JavaScript online submissions for Check If N and Its Double Exist.
Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions for Check If N and Its Double Exist.*/
var checkIfExist = function(arr) {
    let map = {};
    let length = arr.length
    for (let i = 0; i < length; i++) {
        if(!map[arr[i]]) {
           map[arr[i]] = 1;
        } 
        else {
           map[arr[i]] = map[arr[i]] +1; 
        }
    }
    if (map[0] & map[0] === 1) {
      map[0] = false;
    }
    for (let i = 0; i < length; i++) {
        if (map[(arr[i]*2)]) { 
          return true;
        }
    } return false;
};

//Second attempt
/*STATS
Runtime: 52 ms, faster than 91.53% of JavaScript online submissions for Check If N and Its Double Exist.
Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Check If N and Its Double Exist.*/

var checkIfExist = function(arr) {
    let map = {};
    let length = arr.length
    for (let i = 0; i < length; i++) {
        if(!map[arr[i]]) {
          if (map[(arr[i]*2)] || map[(arr[i]/2)]) {
            return true;
          }
           map[arr[i]] = 1;
        } else if (arr[i] === 0) {
          if (map[arr[i]]) {
            return true;
          }
        }
        
    } return false;
};
