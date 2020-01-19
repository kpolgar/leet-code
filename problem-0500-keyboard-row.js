/*
500. Keyboard Row
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
 

Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/
/*Runtime: 60 ms, faster than 25.00% of JavaScript online submissions for Keyboard Row.
Memory Usage: 33.8 MB, less than 87.50% of JavaScript online submissions for Keyboard Row.
*/

var findWords = function(words) {
    let row1 = {
      q: true,
      w: true,
      e: true,
      r: true,
      t: true,
      y: true,
      u: true,
      i: true,
      o: true,
      p: true 
    };
    let row2 = {
      a: true,
      s: true, 
      d: true,
      f: true,
      g: true,
      h: true,
      j: true,
      k: true,
      l: true
    };
    
    let row3 = {
      z: true,
      x: true, 
      c: true, 
      v: true,
      b: true,
      n: true,
      m: true
    };
    
    let ansArr = []
    
    for (let i = 0; i < words.length; i++) {
       let condition1 = true;
        let condition2 = true;
        let condition3 = true;
       for (let j = 0; j < words[i].length; j++) {
           if (!row1[words[i][j].toLowerCase()]) {
             condition1 = false;
           }
         if (!row2[words[i][j].toLowerCase()]) {
             condition2 = false;
           }
         if (!row3[words[i][j].toLowerCase()]) {
             condition3 = false;
           }
       } if (condition1 || condition2 || condition3) {
         ansArr.push(words[i])
       }
       
    } 
    return ansArr;
};
