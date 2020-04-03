/*242. Valid Anagram

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?*/

//Solution 1

/*Runtime: 64 ms, faster than 89.52% of JavaScript online submissions for Valid Anagram.
Memory Usage: 35.8 MB, less than 93.88% of JavaScript online submissions for Valid Anagram.*/

function isAnagram(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false
  }

  let map = {};

  for (let i = 0; i < stringA.length; i++) {
    if (!map[stringA[i]]) {
      map[stringA[i]] = 1;
    } else {
      map[stringA[i]]++
    }
  }

  for (let j = 0; j < stringB.length; j++) {
    if (map[stringB[j]]) {
      map[stringB[j]]--
    }
    else {
      return false;
    }
  }
  return true;
}

//Solution 2
/*Runtime: 104 ms, faster than 29.30% of JavaScript online submissions for Valid Anagram.
Memory Usage: 38.3 MB, less than 30.61% of JavaScript online submissions for Valid Anagram.*/

var isAnagram = function(s, t) {
   return s.split('').sort().join('') === t.split('').sort().join('');
};

