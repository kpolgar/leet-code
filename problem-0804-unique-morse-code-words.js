/*804. Unique Morse Code Words
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transfomations, "--...-." and "--...--.".
Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.*/
//Naive Solution
/*STATS
Runtime: 64 ms, faster than 47.13% of JavaScript online submissions for Unique Morse Code Words.
Memory Usage: 37.4 MB, less than 11.11% of JavaScript online submissions for Unique Morse Code Words.
*/
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
   
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
   
          let code = words[i].charCodeAt(j);
            if (code >= 97 && code <= 122) {
              words[i] = words[i].split('');
                words[i][j] = morse[code-97]
                words[i]=words[i].join('')
            }
        }
    } 
  
    let map = {}
    let counter = 0;
    for (let k = 0; k < words.length; k++) {
      if (!map[words[k]]) {
        map[words[k]] = true;
        counter ++
      }
    } return counter;
    
};
