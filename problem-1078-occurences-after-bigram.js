/*1078. Occurrences After Bigram

Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.

Example 1:

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
Example 2:

Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]
 
Note:

1 <= text.length <= 1000
text consists of space separated words, where each word consists of lowercase English letters.
1 <= first.length, second.length <= 10
first and second consist of lowercase English letters.*/
/*STATS Runtime: 52 ms, faster than 74.30% of JavaScript online submissions for Occurrences After Bigram.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Occurrences After Bigram.*/

var findOcurrences = function(text, first, second) {
    let answer = [];
    text = text.split(' ');
    for (let i = 0; i < text.length - 2; i ++) {
        if (text[i] === first && text[i+1] == second)  {
            answer.push(text[i+2])
        }
    } return answer;
};
