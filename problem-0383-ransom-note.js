/*383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true*/

//My Solution

/*STATS
Runtime: 88 ms, faster than 44.52% of JavaScript online submissions for Ransom Note.
Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions for Ransom Note.
*/

var canConstruct = function(ransomNote, magazine) {
  let map = {};  
  for(let i = 0; i < magazine.length; i++) {
        if (!map[magazine[i]]) {
          map[magazine[i]] = 1;
        } else {
          map[magazine[i]]++;
        }
    } 
  
  for (let j = 0; j < ransomNote.length; j++) {
    if (!map[ransomNote[j]]) {
      return false;
    } else {
      map[ransomNote[j]]--
    }
  } return true;
};
