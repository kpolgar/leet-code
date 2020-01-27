/*720. Longest Word in Dictionary
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].*/

//Brute Force Solution
/*STATS
Runtime: 4060 ms, faster than 5.26% of JavaScript online submissions for Longest Word in Dictionary.
Memory Usage: 43.2 MB, less than 100.00% of JavaScript online submissions for Longest Word in Dictionary.
*/

var longestWord = function(words) {
    words.sort(function(a,b){return b.length - a.length});
    let possAns = [];
  
    for (let i = 0; i < words.length; i++) {
      let string = '';
      let foundAll = true;
      
      
      for (let j = 0; j < words[i].length; j++) {
        string = string + words[i][j];
        
        if (!words.slice(i).includes(string)) {
         foundAll = false;
          break;
       }
        
      } 
      
      if (foundAll || words[i].length === 1) {
        if (!possAns.length || possAns[0].length <= words[i].length) {
          possAns.push(words[i]);
          possAns.sort();
        } 
      }
    }  return possAns[0]
    
};

//Better Solution: 2nd Attempt Uses Hash Table

/*Runtime: 104 ms, faster than 60.16% of JavaScript online submissions for Longest Word in Dictionary.
Memory Usage: 39.4 MB, less than 100.00% of JavaScript online submissions for Longest Word in Dictionary.
*/

var longestWord = function(words) {
  //sorting words alphabetically
    words.sort();
    let result = '';
    let map = {}
    for (let i = 0; i < words.length; i++) {
      //we are entering words into our map if the previous substring exists or if the word is one
      //letter long, for example, if checking 'worl', we check if 'wor' is in map
      //it should be if its part of the list since thigns are alphabetically listed
      if (words[i].length === 1 || map[words[i].substring(0, words[i].length-1)] ) {
          map[words[i]] = true;
          //we need the longest word, so we only replace result if current word is longer
          if (words[i].length > result.length) {
              result = words[i]
          }
      }
    } 
  return result   
};
