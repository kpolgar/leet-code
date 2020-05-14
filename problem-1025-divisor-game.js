/*1025. Divisor Game

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < N and N % x == 0.
Replacing the number N on the chalkboard with N - x.
Also, if a player cannot make a move, they lose the game.

Return True if and only if Alice wins the game, assuming both players play optimally.

 

Example 1:

Input: 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.
Example 2:

Input: 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
 

Note:

1 <= N <= 1000*/

/*STATS Runtime: 52 ms, faster than 76.71% of JavaScript online submissions for Divisor Game.
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Divisor Game.*/

/*Explanation: whoever ends up with 2 wins. If N is even, Alice will win. If N is odd, Bob will win. Whoever ends up with 2 will then pick the x=1.  2-1= 1. The new N is 1. This person wins. The next person has no more moves */

var divisorGame = function(N) {
    return N % 2 === 0;
};
