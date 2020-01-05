/*299. Bulls and Cows

You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.
*/
/*STATS
Runtime: 60 ms, faster than 90.69% of JavaScript online submissions for Bulls and Cows.
Memory Usage: 36.2 MB, less than 50.00% of JavaScript online submissions for Bulls and Cows.
*/
//My Solution

var getHint = function(secret, guess) {
    let map = {}
    let a = 0;
    let b = 0;
    for (let i = 0; i < guess.length; i++) {
      
      if (secret[i] === guess[i]) {
            a++;
      } else {
        if (!map[secret[i]]) {
        map[secret[i]] = 1;
      }
        else {
          map[secret[i]] = map[secret[i]] + 1
        }
      }
    } 
      for (let j = 0; j < guess.length; j++) {
        if (map[guess[j]] > 0 && guess[j] !== secret[j]) {
          b++;
          map[guess[j]] = map[guess[j]] - 1;
        }
      }
       
       return a + 'A' + b + 'B'
};
