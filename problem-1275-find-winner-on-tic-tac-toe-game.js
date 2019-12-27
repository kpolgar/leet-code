/*
1275. Find Winner on a Tic Tac Toe Game

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player A always places "X" characters, while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

Example 1:

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: "A" wins, he always plays first.
"X  "    "X  "    "X  "    "X  "    "X  "
"   " -> "   " -> " X " -> " X " -> " X "
"   "    "O  "    "O  "    "OO "    "OOX"
Example 2:

Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
Output: "B"
Explanation: "B" wins.
"X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
"   " -> " O " -> " O " -> " O " -> "XO " -> "XO " 
"   "    "   "    "   "    "   "    "   "    "O  "
Example 3:

Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
Output: "Draw"
Explanation: The game ends in a draw since there are no moves to make.
"XXO"
"OOX"
"XOX"
Example 4:

Input: moves = [[0,0],[1,1]]
Output: "Pending"
Explanation: The game has not finished yet.
"X  "
" O "
"   "
Constraints:

1 <= moves.length <= 9
moves[i].length == 2
0 <= moves[i][j] <= 2
There are no repeated elements on moves.
moves follow the rules of tic tac toe.*/

/*STATS
Runtime: 56 ms, faster than 66.06% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Find Winner on a Tic Tac Toe Game.
*/

var tictactoe = function(moves) {
    let winners = [
      [['00'], ['01'], ['02']],
      [['10'], ['11'], ['12']],
      [['20'], ['21'], ['22']],
      [['00'], ['10'], ['20']],
      [['01'], ['11'], ['21']],
      [['02'], ['12'], ['22']],
      [['00'], ['11'], ['22']],
      [['02'], ['11'], ['20']]
    ];
    let A = [];
    let B = [];
  
    for (let i = 0; i < moves.length; i+=2) {
      if (moves[i]) {
        moves[i] = moves[i].join('');
        A.push(moves[i]);
        
      }
      if (moves[i+1]) {
        moves[i+1] = moves[i+1].join('');
        B.push(moves[i+1])
      }
    }
      console.log(A)
      console.log(B)

    if (
      A.includes(winners[0][0][0]) && A.includes(winners[0][1][0]) && A.includes(winners[0][2][0]) ||
      A.includes(winners[1][0][0]) && A.includes(winners[1][1][0]) && A.includes(winners[1][2][0]) ||
      A.includes(winners[2][0][0]) && A.includes(winners[2][1][0]) && A.includes(winners[2][2][0]) ||
      A.includes(winners[3][0][0]) && A.includes(winners[3][1][0]) && A.includes(winners[3][2][0]) ||
      A.includes(winners[4][0][0]) && A.includes(winners[4][1][0]) && A.includes(winners[4][2][0]) ||
      A.includes(winners[5][0][0]) && A.includes(winners[5][1][0]) && A.includes(winners[5][2][0]) ||
      A.includes(winners[6][0][0]) && A.includes(winners[6][1][0]) && A.includes(winners[6][2][0]) ||
      A.includes(winners[7][0][0]) && A.includes(winners[7][1][0]) && A.includes(winners[7][2][0])
      ) {
        return 'A'
      }
  
    if (
      B.includes(winners[0][0][0]) && B.includes(winners[0][1][0]) && B.includes(winners[0][2][0]) ||
      B.includes(winners[1][0][0]) && B.includes(winners[1][1][0]) && B.includes(winners[1][2][0]) ||
      B.includes(winners[2][0][0]) && B.includes(winners[2][1][0]) && B.includes(winners[2][2][0]) ||
      B.includes(winners[3][0][0]) && B.includes(winners[3][1][0]) && B.includes(winners[3][2][0]) ||
      B.includes(winners[4][0][0]) && B.includes(winners[4][1][0]) && B.includes(winners[4][2][0]) ||
      B.includes(winners[5][0][0]) && B.includes(winners[5][1][0]) && B.includes(winners[5][2][0]) ||
      B.includes(winners[6][0][0]) && B.includes(winners[6][1][0]) && B.includes(winners[6][2][0]) ||
      B.includes(winners[7][0][0]) && B.includes(winners[7][1][0]) && B.includes(winners[7][2][0])
      ) {
        return 'B'
      }
  
      if (moves.length < 9) {
        return 'Pending'
      }
      return 'Draw'
};
