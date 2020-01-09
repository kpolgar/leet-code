/*441. Arranging Coins
You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
*/
/*STATS
Runtime: 84 ms, faster than 81.21% of JavaScript online submissions for Arranging Coins.
Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for Arranging Coins.
*/

var arrangeCoins = function(n) {
    let row = 0;
    for (let i = 1; i <= n; i++) {
        if (n - i >= 0) {
            n = n - i;
            row++
        } 
    } return row;
    
};

//console.log(arrangeCoins(5))
