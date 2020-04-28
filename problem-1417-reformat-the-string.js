/*1417. Reformat The String

Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

Example 1:

Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
Example 2:

Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.
Example 3:

Input: s = "1229857369"
Output: ""
Explanation: "1229857369" has only digits so we cannot separate them by characters.
Example 4:

Input: s = "covid2019"
Output: "c2o0v1i9d"
Example 5:

Input: s = "ab123"
Output: "1a2b3"
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and/or digits.*/

/* Runtime: 64 ms, faster than 93.96% of JavaScript online submissions for Reformat The String.
Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions for Reformat The String.*/

var reformat = function(s) {
    //creating number and letter arrays
    let numbers = [];
    let letters = [];
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            numbers.push(s[i])
        } else {
            letters.push(s[i])
        }
    }
    
    //checking if there are too many letters or too many numbers for separation
    if (Math.abs(numbers.length - letters.length) > 1) {
        return '';
    }
    //
    if (!numbers || !letters) {
        return s;
    }
    //
    let longer=[];
    let shorter = [];
    //finding the longer of the two
    if (Math.max(letters.length, numbers.length)  === letters.length) {
        longer = letters;
        shorter = numbers;
    } else {
        shorter = letters;
        longer = numbers;
    }
    //creating answer alternating between longer and shorter
    while (shorter.length || longer.length) {
       if (longer.length) {
            answer += longer.pop()
       }
        if (shorter.length) {
           answer += shorter.pop() 
        }   
    }
    return answer;
};
