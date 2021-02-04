/*453. Minimum Moves to Equal Array Elements

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]*/

/*STATS Runtime: 84 ms, faster than 86.23% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
Memory Usage: 42 MB, less than 65.94% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
*/

var minMoves = function(nums) {
    let min = Math.min(...nums)
    let sum = nums.reduce(function(x,y){return x + y})
    return sum - (nums.length * min)
};
