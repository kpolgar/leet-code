/*451. Sort Characters By Frequency
Medium

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.*/

/*STATS Runtime: 104 ms, faster than 56.93% of JavaScript online submissions for Sort Characters By Frequency.
Memory Usage: 45.3 MB, less than 55.47% of JavaScript online submissions for Sort Characters By Frequency.*/

var frequencySort = function(s) {
    let map = {}
    
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }
    let arr = []
    for (const char in map) {
        arr.push([char, map[char]])
    }
    arr.sort(function(a,b) {return b[1] - a[1]})
    let ans = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            ans += arr[i][0]
        }
    }
    return ans;
};
