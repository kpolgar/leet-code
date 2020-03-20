/*290. Word Pattern

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.*/

/*First Attempt*/
/*STATS Runtime: 52 ms, faster than 77.31% of JavaScript online submissions for Word Pattern.
Memory Usage: 33.7 MB, less than 90.91% of JavaScript online submissions for Word Pattern.*/

var wordPattern = function(pattern, str) {
    str = str.split(' ')
    if (pattern.length !== str.length) {
        return false;
    }
    let mapS = {};
    let mapP = {};
    let mapJ = {}
    for (let i = 0; i < str.length; i++) {
       if (!mapS[str[i]]) {
            mapS[str[i]] = 1
        } 
        if (mapS[str[i]]) {
            mapS[str[i]]++
        }
        
        if (!mapP[pattern[i]]) {
            mapP[pattern[i]] = 1
        } 
        if (mapP[pattern[i]]) {
            mapP[pattern[i]]++
        }
    }
        
    for (let j = 0; j < str.length; j++) {
        if (!mapJ[pattern[j]]) {
            mapJ[pattern[j]] = str[j]
        }
        if (mapJ[pattern[j]]) {
                if (mapJ[pattern[j]] !== str[j] || mapP[pattern[j]] !== mapS[str[j]]) {
                return false;
            }
        }
    } return true;
    
};

/*Second Attempt*/

/*STATS Runtime: 44 ms, faster than 97.27% of JavaScript online submissions for Word Pattern.
Memory Usage: 33.8 MB, less than 81.82% of JavaScript online submissions for Word Pattern.*/

var wordPattern = function(pattern, str) {
    str = str.split(' ')
    if (pattern.length !== str.length) {
        return false;
    }
    let mapJ = {}
    let mapZ = {};
        
    for (let j = 0; j < str.length; j++) {
        if (!mapJ[pattern[j]] && !mapZ[str[j]]) {
            mapJ[pattern[j]] = str[j];
            mapZ[str[j]] = 1;
        }
        else {
                if (mapJ[pattern[j]] !== str[j] ) {
                return false;
            }
        }
    } return true;
    
};
