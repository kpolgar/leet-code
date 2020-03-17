/*482. License Key Formatting
 
You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, format the string according to the rules described above.

Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:
Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
Note:
The length of string S will not exceed 12,000, and K is a positive integer.
String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
String S is non-empty.*/

/*STATS Runtime: 72 ms, faster than 60.50% of JavaScript online submissions for License Key Formatting.
Memory Usage: 41.1 MB, less than 71.43% of JavaScript online submissions for License Key Formatting.*/

var licenseKeyFormatting = function(S, K) {
    let a = S.replace(/-/g, "").toUpperCase();
    let remainder = a.length % K;
    if (remainder > 0) {
      var answer = [[a.slice(0,remainder)]]  
    } else {
        var answer = [];
    }    
    for (let i = remainder; i < a.length; i+=K) {
        answer.push([a.slice(i, i+K)])
    }
    return answer.join('-');
};

//Second Attempt
/*Stats Runtime: Runtime: 60 ms, faster than 94.51% of JavaScript online submissions for License Key Formatting.
Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for License Key Formatting.*/

var licenseKeyFormatting = function(S, K) {
   let clean = S.replace(/-/g, "").toUpperCase();
   let chunk = [];
   let length = clean.length;
  
  while (length > 0) {
    chunk.push(clean.substring(length - K, length));
    length-=K;
  } 
    return chunk.reverse().join('-')
};
