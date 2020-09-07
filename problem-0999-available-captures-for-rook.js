/*999. Available Captures for Rook
Easy

On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

 

Example 1:



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.
Example 2:



Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.
Example 3:



Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.
 

Note:

board.length == board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'*/

/*STATS Runtime: 64 ms, faster than 94.56% of JavaScript online submissions for Available Captures for Rook.
Memory Usage: 36.6 MB, less than 34.01% of JavaScript online submissions for Available Captures for Rook.*/

var numRookCaptures = function(board) {
    let row;
    let column;
    let captures = 0;
    for(let i = 0; i < board.length; i++) {
        let temp = board[i].findIndex(function(val){return val === 'R'})
        if (temp !== -1) {
            row = i,
            column = temp;
            break;
        }
    }
    //check left
    for (let i = column-1; i >= 0; i--) {
        if(board[row][i] === 'B') {
            break
        }
        if(board[row][i] === 'p') {
            captures++
            break
        }
    }
    //check right
    for (let i = column + 1; i < board[0].length; i++) {
        if(board[row][i] === 'B') {
            break
        }
        if(board[row][i] === 'p') {
            captures++
            break
        }
    }
    //check top
    for (let i = row-1; i >= 0; i--) {
        if(board[i][column] === 'B') {
            break
        }
        if(board[i][column] === 'p') {
            captures++
            break
        }
    }
    //check bottom
    for (let i = row + 1; i < board.length; i++) {
        if(board[i][column] === 'B') {
            break
        }
        if(board[i][column] === 'p') {
            captures++
            break
        }
    } 
    return captures
};
