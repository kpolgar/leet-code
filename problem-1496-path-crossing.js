/*1496. Path Crossing

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.

 

Example 1:



Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:



Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
 

Constraints:

1 <= path.length <= 10^4
path will only consist of characters in {'N', 'S', 'E', 'W}*/

/*STATS Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Path Crossing.
Memory Usage: 37.4 MB, less than 28.23% of JavaScript online submissions for Path Crossing.*/

var isPathCrossing = function(path) {
    path = path.split('')
    let visited = {
        '00': true
    }
    
    let x = 0;
    let y = 0;
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') {
            y++
        }
        if (path[i] === 'S') {
            y--
        }
        if (path[i] === 'E') {
            x++
        }
        if (path[i] === 'W') {
            x--
        }
        let coord = (x + '' + y)
        if (visited[coord]) {
            return true;
        } else {
            visited[coord] = true
        }
    }
    return false;
};
