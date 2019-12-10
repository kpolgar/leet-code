/*1160. Find Words That Can Be Formed by Characters
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.*/
//My Solution

/*STATS Runtime: 624 ms, faster than 5.16% of JavaScript online submissions
for Find Words That Can Be Formed by Characters. Memory Usage: 86.8 MB, less
than 100.00% of JavaScript online submissions for Find Words That Can Be
Formed by Characters. */
var countCharacters = function(words, chars) {
    let counter = 0;
    let map = {};
    //pushing the characters into a hash table
    for(let i = 0; i < chars.length; i++) {
          if(!map[chars[i]]) {
            map[chars[i]] = 1;
        } else {
          map[chars[i]] = map[chars[i]]+1
        }
    }   
    for (let j = 0; j< words.length; j++) {
      let bool = true;
      let temp = {}
      for (let k = 0; k < words[j].length; k++) {
        if(!temp[words[j][k]]) {
            temp[words[j][k]] = 1;
        } else {
          temp[words[j][k]] = temp[words[j][k]]+1
        } 
        
        if (!map[words[j][k]] || temp[words[j][k]] > map[words[j][k]]) {
          bool = false;
        } 
      } if (bool) {
          counter = counter + words[j].length;
        }
    }   return counter;
};

//Regex Solution
/*STATS
Runtime: 604 ms, faster than 6.75% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
Memory Usage: 43.7 MB, less than 100.00% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
*/

var countCharacters = function(words, chars) {
  let counter = 0;  
  for (let i = 0; i < words.length; i++) {
      let bool = true;
      for (let j=0; j < words[i].length; j++) {
        let letter = words[i][j]
        let wordMatch = words[i].match(new RegExp (letter, 'g'));
        let charMatch = chars.match(new RegExp (letter, 'g'));
        if(!charMatch || wordMatch.length > charMatch.length ) {
          bool = false;
        }
        
      } if(bool) {
          counter = counter + words[i].length
        }
      
    } return counter;
};

console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))

//Using includes and replace
/*STATS
Runtime: 200 ms, faster than 49.39% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
Memory Usage: 44.5 MB, less than 100.00% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
*/
var countCharacters = function(words, chars) {
  let counter = 0;  
  for (let i = 0; i < words.length; i++) {
    let bool = true;
    let tempChars = chars
      for (let j=0; j < words[i].length; j++) {
        if(!tempChars.includes(words[i][j])) {
          bool=false;
        } else {
          tempChars = tempChars.replace(words[i][j], '')
        }
      } if (bool) {
        counter = counter + words[i].length;
      }
      
    } return counter;
};
