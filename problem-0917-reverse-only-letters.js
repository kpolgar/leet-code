917. Reverse Only Letters Share Given a string S, return the "reversed" string
where all characters that are not a letter stay in the same place, and all
letters reverse their positions. Example 1:

Input: "ab-cd" Output: "dc-ba" Example 2:

Input: "a-bC-dEf-ghIj" Output: "j-Ih-gfE-dCba" Example 3:

Input: "Test1ng-Leet=code-Q!" Output: "Qedo1ct-eeLg=ntse-T!" Note:

S.length <= 100 33 <= S[i].ASCIIcode <= 122  S doesn't contain \ or " */
/*STATS Runtime: 56 ms, faster than 70.19% of JavaScript online submissions
for Reverse Only Letters. Memory Usage: 36.8 MB, less than 25.00% of
JavaScript online submissions for Reverse Only Letters. */

var reverseOnlyLetters = function(S) {
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (S.toLowerCase().charCodeAt(i) >= 97 && S.toLowerCase().charCodeAt(i) <= 122) {
                 stack.push(S[i])
        }
    }
    
    for (let j = 0; j < S.length; j++) {
        if (S.toLowerCase().charCodeAt(j) >= 97 && S.toLowerCase().charCodeAt(j) <= 122) {
            let y = stack.pop();
             S = S.split(''); 
            S[j] = y;
            S = S.join('')
            
        }
    } 
  return S;
    
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))
