/*1812. Determine Color of a Chessboard Square

You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

 

Example 1:

Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
Example 2:

Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
Example 3:

Input: coordinates = "c7"
Output: false
 

Constraints:

coordinates.length == 2
'a' <= coordinates[0] <= 'h'
'1' <= coordinates[1] <= '8'*/

/*STATS Runtime: 72 ms, faster than 94.55% of JavaScript online submissions for Determine Color of a Chessboard Square.
Memory Usage: 38.4 MB, less than 73.64% of JavaScript online submissions for Determine Color of a Chessboard Square.*/

var squareIsWhite = function(coordinates) {
    
    let map = {
        a: 1,
        b: 2,
        c: 1,
        d: 2,
        e: 1,
        f: 2,
        g: 1,
        h: 2
    }
    
    if (map[coordinates[0]] % 2 === 0) {
        if (coordinates[1] % 2 === 0) {
            return false;
        } else {
            return true
        }
    } else {
        if (coordinates[1] % 2 !== 0) {
            return false
        } else {
            return true   
        }
    }
};
