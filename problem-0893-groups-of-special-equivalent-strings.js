/*893. Groups of Special-Equivalent Strings

You are given an array A of strings.

A move onto S consists of swapping any two even indexed characters of S, or any two odd indexed characters of S.

Two strings S and T are special-equivalent if after any number of moves onto S, S == T.

For example, S = "zzxy" and T = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz" that swap S[0] and S[2], then S[1] and S[3].

Now, a group of special-equivalent strings from A is a non-empty subset of A such that:

Every pair of strings in the group are special equivalent, and;
The group is the largest size possible (ie., there isn't a string S not in the group such that S is special equivalent to every string in the group)
Return the number of groups of special-equivalent strings from A.

 
Example 1:

Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
Output: 3
Explanation: 
One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings are all pairwise special equivalent to these.

The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in particular, "zzxy" is not special equivalent to "zzyx".
Example 2:

Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
 

Note:

1 <= A.length <= 1000
1 <= A[i].length <= 20
All A[i] have the same length.
All A[i] consist of only lowercase letters.
*/

/*STATS Runtime: 88 ms, faster than 71.43% of JavaScript online submissions for Groups of Special-Equivalent Strings.
Memory Usage: 44.8 MB, less than 16.67% of JavaScript online submissions for Groups of Special-Equivalent Strings.*/

var numSpecialEquivGroups = function(A) {
    
    let sorted = new Array(A.length)
    for (let i = 0; i < sorted.length; i++) {
        sorted[i] = []
    }
    let odd = [];
    let even = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (j % 2) {
                odd += A[i][j]
                
            } else {
                even += A[i][j]
            }
        }
        if (odd.length > 1) {
           odd = odd.split('').sort().join('') 
        }
        if (even.length > 1) {
            even = even.split('').sort().join('')   
        }
        let max = Math.max(odd.length, even.length)
        for (let k = 0; k < max; k++) {
            sorted[i]+= odd[k]
            sorted[i]+=even[k]
        }
        odd = '';
        even = '';
    }

    let groups = {};
    let numGroups = 0
    for (let i = 0; i < sorted.length; i++) {
        if (!groups[sorted[i]]) {
            groups[sorted[i]] = 1
            numGroups++
        } 
        else if (groups[sorted[i]] === 1) {
            groups[sorted[i]]++
        }
    }
    return numGroups
};
