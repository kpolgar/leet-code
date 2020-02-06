/*771. Jewels and Stones 
You're given strings J representing the types of
stones that are jewels, and S representing the stones you have.  Each
character in S is a type of stone you have.  You want to know how many of the
stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are
letters. Letters are case sensitive, so "a" is considered a different type of
stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb" Output: 3 Example 2:

Input: J = "z", S = "ZZ" Output: 0 Note:

S and J will consist of letters and have length at most 50. The characters in
J are distinct.*/

//My Solution with Regex
/*STATS Runtime: 56 ms, faster than 80.72% of JavaScript online submissions
for Jewels and Stones. Memory Usage: 34.1 MB, less than 55.22% of JavaScript
online submissions for Jewels and Stones. */

var numJewelsInStones = function(J, S) { 
  let jewels = new RegExp('\[' + J + '\]', 'g'); 
  let match = S.match(jewels);
  if(match) {
    return match.length;
  } else {
      return 0;
  }
};

//My Solution with Two Loops
/*STATS
Runtime: 52 ms, faster than 92.71% of JavaScript online submissions for Jewels
and Stones. Memory Usage: 35.1 MB, less than 11.94% of JavaScript online
submissions for Jewels and Stones. */

var numJewelsInStones = function(J, S) {
  let counter = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        counter++
      }
    }
  } return counter
};
