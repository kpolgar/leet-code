/*1079. Letter Tile Possibilities
Medium

You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: tiles = "AAABBC"
Output: 188
Example 3:

Input: tiles = "V"
Output: 1
 

Constraints:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.
*/

/*STATS Runtime: 84 ms, faster than 92.11% of JavaScript online submissions for Letter Tile Possibilities.
Memory Usage: 43.9 MB, less than 71.05% of JavaScript online submissions for Letter Tile Possibilities.*/


var numTilePossibilities = function(tiles) {
    
    let len = tiles.length;
    let visited = [];
    for (let i = 0; i < len; i++) {
        visited[i] = 0;
    }
    let set = new Set();
    
    function dfs(s){
        
        for (let i=0; i < len; i++){
            if (visited[i]==0){
                let temp = s + tiles[i];
                set.add(temp);
                visited[i] = 1;
                dfs(temp);
                visited[i] = 0;
            }
        }
    }
    dfs('');
    return set.size ;
    
};
