/*1832. Check if the Sentence Is Pangram

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.*/

//Solution 1: Using Map

/*STATS Runtime: 80 ms, faster than 73.05% of JavaScript online submissions for Check if the Sentence Is Pangram.
Memory Usage: 40 MB, less than 30.60% of JavaScript online submissions for Check if the Sentence Is Pangram.*/

var checkIfPangram = function(sentence) {
    let map = {}
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for (let i = 0; i < sentence.length; i++) {
         if (!map[sentence[i]]) {
             map[sentence[i]] = true
         }
    }
    
    for (let i = 0; i < alphabet.length; i++) {
        if (!map[alphabet[i]]) {
            return false;
        }
    }
    
    return true;
};

/*Solution II: Using indexOf*/

/*STATS Runtime: 72 ms, faster than 97.01% of JavaScript online submissions for Check if the Sentence Is Pangram.
Memory Usage: 38.6 MB, less than 86.59% of JavaScript online submissions for Check if the Sentence Is Pangram.*/

var checkIfPangram = function(sentence) {
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    
    for (let i = 0; i < alphabet.length; i++) {
        if (sentence.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    
    return true;
};
