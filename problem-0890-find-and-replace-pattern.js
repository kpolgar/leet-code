/*890. Find and Replace Pattern
Medium

You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.
 

Note:

1 <= words.length <= 50
1 <= pattern.length = words[i].length <= 20*/

/*STATS Runtime: 80 ms, faster than 87.41% of JavaScript online submissions for Find and Replace Pattern.
Memory Usage: 41.1 MB, less than 38.46% of JavaScript online submissions for Find and Replace Pattern.
*/

var findAndReplacePattern = function(words, pattern) {
    let answer = []
    for (let i = 0; i < words.length; i++) {
        let map1 = {}
        let map2 = {}
        let condition = true;
        for (let j = 0; j < words[i].length; j++) {
            let letter1 = words[i][j]
            let letter2 = pattern[j]
            if (!map1[letter1]) {
                map1[letter1] = letter2
            }
            if (!map2[letter2]) {
                map2[letter2] = letter1
            }
            if (map1[letter1] !== letter2 || map2[letter2] !== letter1) {
                condition = false
                break
            }   
        }
        if (condition) {
            answer.push(words[i])
        }
    }
    return answer
};
