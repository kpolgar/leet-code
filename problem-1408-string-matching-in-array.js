/*1408. String Matching in an Array

Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

 

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".
Example 3:

Input: words = ["blue","green","bu"]
Output: []
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
It's guaranteed that words[i] will be unique.*/


/*STATS Runtime: 56 ms, faster than 86.89% of JavaScript online submissions for String Matching in an Array.
Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for String Matching in an Array.*/

var stringMatching = function(words) {
    words.sort(function(a,b){return a.length - b.length});
    let answer = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                answer.push(words[i]);
                break;
            }
        }
    } return answer;
};
