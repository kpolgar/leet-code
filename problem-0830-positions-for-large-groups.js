/*830. Positions of Large Groups
In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

 

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Example 2:

Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
Example 3:

Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]*/

//My First Attempt:

/*Runtime: 68 ms, faster than 81.48% of JavaScript online submissions for Positions of Large Groups.
Memory Usage: 37.4 MB, less than 25.00% of JavaScript online submissions for Positions of Large Groups.
*/

var largeGroupPositions = function(S) {
    let arr = []
    let startIndex = 0
    let counter = 1
    
    for (let i = 1; i < S.length; i++) {
        if (S[i] === S[i-1]) {
            counter++
        }
      
        if (S[i] !== S[i-1] || !S[i+1]) {
            if (counter >= 3) {
                arr.push([startIndex, startIndex+counter-1])
            }
          counter = 1;
          startIndex = i
        }
    } return arr;
};

//Second Attempt

/*Runtime: 64 ms, faster than 93.52% of JavaScript online submissions for Positions of Large Groups.
Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for Positions of Large Groups.*/

var largeGroupPositions = function(S) {
    let arr = []
    let startIndex = 0
    
    for (let i = 1; i < S.length + 1; i++) {
      
        if (S[startIndex] !== S[i]) {
            if (i - startIndex >= 3) {
                arr.push([startIndex, i-1])
            }
          startIndex = i
        }
    } return arr;
};
