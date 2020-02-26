/*1122. Relative Sort Array
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
 

Constraints:

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
Each arr2[i] is distinct.
Each arr2[i] is in arr1.*/

/*STATS Runtime: 56 ms, faster than 80.12% of JavaScript online submissions for Relative Sort Array.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Relative Sort Array.*/

var relativeSortArray = function(arr1, arr2) {
    let difItems = [];
    let map = {};
    for (let i = 0; i < arr2.length; i++) {
            map[arr2[i]] = 1;
    }
    for (let j = 0; j < arr1.length; j++) {
        if (!map[arr1[j]]) {
            difItems.push(arr1[j])
        } else if (map[arr1[j]]) {
            map[arr1[j]]++
        }
    }
    let answer = [];
  for (let k = 0; k < arr2.length; k++) {
    for (let l = 0; l < map[arr2[k]]-1; l++) {
      answer.push(arr2[k])
    }
  }
    difItems.sort(function(a,b) {return a-b});
    return answer.concat(difItems)
};
