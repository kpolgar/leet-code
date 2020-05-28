/*28. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().*/

//Using indexOf()
/*STATS Runtime: 60 ms, faster than 51.84% of JavaScript online submissions for Implement strStr().
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Implement strStr().*/

var strStr = function(haystack, needle) { 
    return haystack.indexOf(needle)
};

//Using a For Loop
/*STATS Runtime: 64 ms, faster than 39.48% of JavaScript online submissions for Implement strStr().
Memory Usage: 38.3 MB, less than 7.14% of JavaScript online submissions for Implement strStr().*/

var strStr = function(haystack, needle) { 
    let l = needle.length;
    if (l === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack.substring(i, i+l)) {
            return i;
        }
    }
    return -1;
};
