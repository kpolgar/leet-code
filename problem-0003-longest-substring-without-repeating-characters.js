/*3. Longest Substring Without Repeating Characters
Medium

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/

//Solution 1 Brute Force
/*STATS Runtime: 556 ms, faster than 11.20% of JavaScript online submissions for Longest Substring Without Repeating Characters.
/*STATS */

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let map = {}
        let currentLength = 1;
        map[s[i]] = true;
        for (let j = i+1; j < s.length; j++) {
            if (!map[s[j]]) {
                map[s[j]] = true;
                currentLength++;
            } else {
                break;
            }
        }
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
};

//Solution 2 Sliding Window

/*STATS Runtime: 108 ms, faster than 77.20% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 43.5 MB, less than 21.88% of JavaScript online submissions for Longest Substring Without Repeating Characters.*/

var lengthOfLongestSubstring = function(s) {
    let map = {};
    let max = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    while(rightPointer < s.length){
         if(!map[s[rightPointer]]){
            map[s[rightPointer]] = true;
            rightPointer ++;
            max = Math.max(max, rightPointer - leftPointer);
         }
        else {
           map[s[leftPointer]] = null;
            leftPointer ++;
        }
    }
    return max;
};
