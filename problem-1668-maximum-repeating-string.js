/*1668. Maximum Repeating Substring

For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.

 

Example 1:

Input: sequence = "ababc", word = "ab"
Output: 2
Explanation: "abab" is a substring in "ababc".
Example 2:

Input: sequence = "ababc", word = "ba"
Output: 1
Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
Example 3:

Input: sequence = "ababc", word = "ac"
Output: 0
Explanation: "ac" is not a substring in "ababc". 
 

Constraints:

1 <= sequence.length <= 100
1 <= word.length <= 100
sequence and word contains only lowercase English letters.*/

/*STATS Runtime: 76 ms, faster than 89.87% of JavaScript online submissions for Maximum Repeating Substring.
Memory Usage: 38.9 MB, less than 31.01% of JavaScript online submissions for Maximum Repeating Substring.*/

var maxRepeating = function(sequence, word) {
    let max = 0
    let multiple = ''
    let regex = new RegExp(word,"g");
    
    while(true) {
        multiple += word
        let regex = sequence.match(multiple)
        if (regex && regex.length) {
            max++
        } else {
            break
        }
    }
    return max
};
