/*289. Game of Life
Medium

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?*/

/*STATS Runtime: 68 ms, faster than 96.61% of JavaScript online submissions for Game of Life.
Memory Usage: 36.5 MB, less than 71.80% of JavaScript online submissions for Game of Life.*/

var gameOfLife = function(board) {
    let dummy = [];
    
    for (let i = 0; i < board.length; i++) {
        dummy.push([...board[i]])
    }
    
    for (let i = 0; i < dummy.length; i++) {
        for (let j = 0; j < dummy[0].length; j++) {
            let alive = 0;
            let dead = 0;
            
            //one to the left
            if (dummy[i][j-1] === 0) {
                dead++
            }
            if (dummy[i][j-1] === 1) {
                alive++
            }
            //one to the right
            if (dummy[i][j+1] === 0) {
                dead++
            }
            if (dummy[i][j+1] === 1) {
                alive++
            }
            //one on top
            if (dummy[i-1] && dummy[i-1][j] === 0) {
                dead++
            }
            if (dummy[i-1] && dummy[i-1][j] === 1) {
                alive++
            }
            //one on bottom
            if (dummy[i+1] && dummy[i+1][j] === 0) {
                dead++
            }
            if (dummy[i+1] && dummy[i+1][j] === 1) {
                alive++
            }
            //top left
            if (dummy[i-1] && dummy[i-1][j-1] === 0) {
                dead++
            }
            if (dummy[i-1] && dummy[i-1][j-1] === 1) {
                alive++
            }
            //top right
            if (dummy[i-1] && dummy[i-1][j+1] === 0) {
                dead++
            }
            if (dummy[i-1] && dummy[i-1][j+1] === 1) {
                alive++
            }
            //bottom left
            if (dummy[i+1] && dummy[i+1][j-1] === 0) {
                dead++
            }
            if (dummy[i+1] && dummy[i+1][j-1] === 1) {
                alive++
            }
            //bottom right
            if (dummy[i+1] && dummy[i+1][j+1] === 0) {
                dead++
            }
            if (dummy[i+1] && dummy[i+1][j+1] === 1) {
                alive++
            }
            //checking current cell and its surroundings
            if (dummy[i][j] === 0) {
                if (alive === 3) {
                    board[i][j] = 1
                }
            } else {
                if (alive < 2) {
                    board[i][j] = 0
                }
                if (alive > 3) {
                    board[i][j] = 0
                }
            }
            
            
        }   
    }
    return board
    
};
