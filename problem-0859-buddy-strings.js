/*859. Buddy Strings

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:

Input: A = "ab", B = "ba"
Output: true
Example 2:

Input: A = "ab", B = "ab"
Output: false
Example 3:

Input: A = "aa", B = "aa"
Output: true
Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false
 

Note:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.*/

/*STATS Runtime: 60 ms, faster than 80.10% of JavaScript online submissions for Buddy Strings.
Memory Usage: 36.4 MB, less than 25.00% of JavaScript online submissions for Buddy Strings.*/

var buddyStrings = function(A, B) {
    if (A === B) {
        let map = {}
        for (let i = 0; i < A.length; i++) {
            if (!map[A[i]]) {
                map[A[i]] = 1;
            } else {
                return true;
            }
        }
    }
    
    if (A.length !== B.length) {
        return false;
    }
    
    let diffs = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diffs.push(i)
        }
    }
    if (diffs.length !== 2) {
        return false;
    }
    //swap the different items in A
    let temp = A[diffs[0]]
    A = A.split('')
    A[diffs[0]] = A[diffs[1]]
    A[diffs[1]] = temp;
    A = A.join('')

    
    if (A[diffs[0]] === B[diffs[0]] && A[diffs[1]] === B[diffs[1]]) {
        return true;
    }
    return false;
};
