/*763. Partition Labels
Medium

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
*/

/*STATS Runtime: 84 ms, faster than 68.45% of JavaScript online submissions for Partition Labels.
Memory Usage: 39.5 MB, less than 7.27% of JavaScript online submissions for Partition Labels.
*/

var partitionLabels = function(S) {
    let answer = []
    let end = 0
    let start = 0
        for (let i = 0; i < S.length; i++) {
            if (S.lastIndexOf(S[i]) > end) {
                end = S.lastIndexOf(S[i])
            }
            
            if (end === i) {
                answer.push(end - start + 1)
                start = end + 1
                end = end + 1
            }
        }
    return answer
};
