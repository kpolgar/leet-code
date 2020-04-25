/*1002. Find Common Characters

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter*/

/*STATS Runtime: 60 ms, faster than 94.61% of JavaScript online submissions for Find Common Characters.
Memory Usage: 38.5 MB, less than 28.57% of JavaScript online submissions for Find Common Characters.*/

var commonChars = function(A) {
    let answer = [];
    for (let i = 0; i < A[0].length; i++) {
        let matched = true;
        for (let j = 1; j < A.length; j++) {
            let occ = A[j].indexOf(A[0][i]);
            if (occ !== -1) { 
                A[j] = A[j].replace(A[j][occ], '')
            } else {
                matched = false;
                break;
            }
        } if (matched) {
            answer.push(A[0][i])
        }
    } 
    return answer;
};
