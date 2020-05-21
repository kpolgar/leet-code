/*49. Group Anagrams
Medium

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.*/

/*Runtime: 136 ms, faster than 68.90% of JavaScript online submissions for Group Anagrams.
Memory Usage: 45.1 MB, less than 60.87% of JavaScript online submissions for Group Anagrams.*/

var groupAnagrams = function(strs) {
    let answer = [];
    
    let map = {}
    
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('') 
        if (!map[sorted]) {
            map[sorted] = [strs[i]]
        } else {
            map[sorted].push(strs[i])
        }
    }
   
    return Object.values(map);
};

//Solution without Sort

/*STATS Runtime: 116 ms, faster than 95.96% of JavaScript online submissions for Group Anagrams.
Memory Usage: 44.9 MB, less than 73.91% of JavaScript online submissions for Group Anagrams.*/

var groupAnagrams = function(strs) {
    let answer = [];
    
    let map = {}
    let primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]
    for (let i = 0; i < strs.length; i++) {
        let processed = strs[i].split('').reduce(function(total, char){return total * primes[char.charCodeAt()-97]}, 1)
        if (!map[processed]) {
            map[processed] = [strs[i]]
        } else {
            map[processed].push(strs[i])
        }
    }
   
    return Object.values(map);
};
