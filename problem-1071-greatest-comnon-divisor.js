/*1071. Greatest Common Divisor of Strings
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T
concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Note:

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] and str2[i] are English uppercase letters.*/
//My Solution
/*Stats
Runtime: 64 ms, faster than 47.62% of JavaScript online submissions for Greatest Common Divisor of Strings.
Memory Usage: 36.2 MB, less than 100.00% of JavaScript online submissions for Greatest Common Divisor of Strings.
*/
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
            return '';
         }
        
    if (str1 === str2) {
            return str1;
        };
    
    let longer = (str1.length > str2.length) ? str1 : str2;
    let shorterFixed = (str2.length) > str1. length ? str1 : str2;
    let shorter = shorterFixed;
  
    while(shorter.length) {
    if (longer.length % shorter.length === 0 && shorterFixed.length % shorter.length === 0) { //2
        let array = [];
        for (let i = 0; i < longer.length; i+=shorter.length) {
          let chunk = longer.slice(i, i+shorter.length);  
          array.push(chunk);  
        } 
        for (let j = 0; j < array.length; j++) {
            if (array[0] === array[j]) {
                return array[0]
            } else {
                if (shorter.length > 1) {
                  shorter = shorter.slice(0, -1);
                } else {
                  return ''
                }
            }
        }
    } else {
        if (shorter.length > 1) {
          shorter= shorter.slice(0, -1);
        } else {
          return ''
        }
      }
    }
    
    
};

console.log('answer',gcdOfStrings("ABABAB", "ABAB"))*/
