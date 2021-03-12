/*1763. Longest Nice Substring

A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.
Example 4:

Input: s = "dDzeE"
Output: "dD"
Explanation: Both "dD" and "eE" are the longest nice substrings.
As there are multiple longest nice substrings, return "dD" since it occurs earlier.
 

Constraints:

1 <= s.length <= 100
s consists of uppercase and lowercase English letters.*/

/*STATS Runtime: 180 ms, faster than 100.00% of JavaScript online submissions for Longest Nice Substring.
Memory Usage: 47.7 MB, less than 100.00% of JavaScript online submissions for Longest Nice Substring.*/

var longestNiceSubstring = function(s) {
    let ans = ''
    function checkPieces (piece) {
        let map = {}
        piece = piece.split('')
        for (let i = 0; i < piece.length; i++) {
            if (!map[piece[i]]) {
                map[piece[i]] = true
            }
        }
        let valid = true;
        for (let i = 0; i < piece.length; i++) {
            if (!map[piece[i].toLowerCase()] || !map[piece[i].toUpperCase()]) {
                valid = false;
                piece[i] = ','
            }
        }

        piece = piece.join('').split(',')
        console.log(piece)
        if (valid) {
            if (piece[0].length > ans.length) {
                ans = piece[0]
            }
        }
        else {
           for (let i = 0; i < piece.length; i++) {
                checkPieces(piece[i])
            } 
        }

    } 
    checkPieces(s)
    return ans  
};

//Without 'valid' variable:

var longestNiceSubstring = function(s) {
    let ans = ''
    function checkPieces (piece) {
        let map = {}
        piece = piece.split('')
        for (let i = 0; i < piece.length; i++) {
            if (!map[piece[i]]) {
                map[piece[i]] = true
            }
        }
        for (let i = 0; i < piece.length; i++) {
            if (!map[piece[i].toLowerCase()] || !map[piece[i].toUpperCase()]) {
                piece[i] = ','
            }
        }

        piece = piece.join('').split(',')
        console.log(piece)
        if (piece.length < 2) {
            if (piece[0].length > ans.length) {
                ans = piece[0]
            }
        }
        else {
           for (let i = 0; i < piece.length; i++) {
                checkPieces(piece[i])
            } 
        }

    } 
    checkPieces(s)
    return ans  
};
