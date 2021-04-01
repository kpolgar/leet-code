/*419. Battleships in a Board
Medium

Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?*/

/*Runtime: 80 ms, faster than 78.24% of JavaScript online submissions for Battleships in a Board.
Memory Usage: 40.2 MB, less than 13.43% of JavaScript online submissions for Battleships in a Board.*/

var countBattleships = function(board) {
    let ships = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X') {
                ships++;
                board[i][j] = '.'
                let row;
                let col;
                //checking other elements in the same row
                 if (board[i][j+1] && board[i][j+1] === 'X') {
                    //change all adjacent x's to .'s
                    row = i
                    col = j + 1
                    while(board[row][col] && board[row][col] === 'X') {
                        board[row][col] = '.'
                        col++
                    }
                }
                if (board[i+1] && board[i+1][j] && board[i+1][j] === 'X') {
                    //change all adjacent x's to .'s
                    row = i + 1
                    col = j
                    while(board[row] && board[row][col] && board[row][col] === 'X') {
                        board[row][col] = '.'
                        row++
                    }
                }
            }
        }
    }
    return ships
};
