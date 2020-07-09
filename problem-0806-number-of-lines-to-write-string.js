/*806. Number of Lines To Write String

We are to write the letters of a given string S, from left to right into lines. Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line. We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line? Return your answer as an integer list of length 2.
 

Example :
Input: 
widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
Output: [3, 60]
Explanation: 
All letters have the same length of 10. To write all 26 letters,
we need two full lines and one line with 60 units.
Example :
Input: 
widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
Output: [2, 4]
Explanation: 
All letters except 'a' have the same length of 10, and 
"bbbcccdddaa" will cover 9 * 10 + 2 * 4 = 98 units.
For the last 'a', it is written on the second line because
there is only 2 units left in the first line.
So the answer is 2 lines, plus 4 units in the second line.
 

Note:

The length of S will be in the range [1, 1000].
S will only contain lowercase letters.
widths is an array of length 26.
widths[i] will be in the range of [2, 10].*/

//Using A Map of Letters
/*STATS Runtime: 64 ms, faster than 84.51% of JavaScript online submissions for Number of Lines To Write String.
Memory Usage: 36.4 MB, less than 16.00% of JavaScript online submissions for Number of Lines To Write String.*/

var numberOfLines = function(widths, S) {
    let map = {}
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (let i = 0; i < 26; i++) {
        map[alphabet[i]] = widths[i] 
    }
    let line = 1
    let total = 0;
    for (let i = 0; i < S.length; i++) {
       if ((total + map[S[i]]) <= 100) {
           total += map[S[i]]
       } else {
           line++;
           total = map[S[i]]
       }
    }
    return [line, total]   
};


//Using charCodeAt

/*STATS Runtime: 64 ms, faster than 84.51% of JavaScript online submissions for Number of Lines To Write String.
Memory Usage: 35.6 MB, less than 68.00% of JavaScript online submissions for Number of Lines To Write String.*/

var numberOfLines = function(widths, S) {
    let base = 'a'.charCodeAt(0);
    let line = 1
    let total = 0;
    for (let i = 0; i < S.length; i++) {
        let letterNum = widths[S.charCodeAt(i) - base]
       if ((total + letterNum) <= 100) {
           total += letterNum
       } else {
           line++;
           total = letterNum;
       }
    }
    return [line, total]   
};
