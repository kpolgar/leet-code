/*1640. Check Array Formation Through Concatenation

You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.

 

Example 1:

Input: arr = [85], pieces = [[85]]
Output: true
Example 2:

Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]
Example 3:

Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].
Example 4:

Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
Output: true
Explanation: Concatenate [91] then [4,64] then [78]
Example 5:

Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
Output: false
 

Constraints:

1 <= pieces.length <= arr.length <= 100
sum(pieces[i].length) == arr.length
1 <= pieces[i].length <= arr.length
1 <= arr[i], pieces[i][j] <= 100
The integers in arr are distinct.
The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).*/

 /*STATS Runtime: 68 ms, faster than 93.26% of JavaScript online submissions for Check Array Formation Through Concatenation.
Memory Usage: 38.9 MB, less than 23.60% of JavaScript online submissions for Check Array Formation Through Concatenation.*/

var canFormArray = function(arr, pieces) {
    let map = {}
    
    for (let i = 0; i < pieces.length; i++) {
        map[pieces[i][0]] = [pieces[i].length, i];
    }
    let pointer = 0;
    while (pointer !== arr.length) {
        if (map[arr[pointer]]) { //if the item is in the array is in the map
            let pieceLength = map[arr[pointer]][0]
            let pieceIndex = map[arr[pointer]][1]
            if (pieceLength === 1) { //if the length of the piece is 1
                pointer++
            }
            else if (pieceLength > 1) { //if the length of the piece is longer than 1 we need to check if the rest of the items in the piece match up
                for (let i = 0; i < pieces[pieceIndex].length; i++) {
                    if (pieces[pieceIndex][i] !== arr[pointer]) {
                        return false;
                    } else {
                        pointer++
                    }
                }
            }
        } else {
            return false;
        }
    }
    return true;
};
