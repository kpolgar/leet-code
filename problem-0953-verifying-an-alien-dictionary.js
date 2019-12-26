/*953. Verifying an Alien Dictionary
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:n-

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 
Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.*/

/*STATS
Runtime: 60 ms, faster than 50.19% of JavaScript online submissions for Verifying an Alien Dictionary.
Memory Usage: 35.3 MB, less than 50.00% of JavaScript online submissions for Verifying an Alien Dictionary.
*/

var isAlienSorted = function(words, order) {
    let map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    for (let j = 0; j < words.length-1; j++) {
        let word1 = words[j];
        let word2 = words[j + 1];
        let length = Math.min(word1.length, word2.length);
        for (let k = 0; k < length; k++) {
            if (map[word1[k]] < map[word2[k]]) {
              k=length
              
            }
            else if (map[word1[k]] > map[word2[k]]) {
                  console.log(word1[k], word2[k])
                    return false;
                }
             else {
                if (word1.length > word2.length) {
                    return false
                }
            }
        }
    } return true;

};

console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
