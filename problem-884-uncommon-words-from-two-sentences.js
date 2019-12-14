884. Uncommon Words from Two Sentences
We are given two sentences A and B.  (A sentence is a string of space
separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and
does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/
//My Solution

/*STATS
Runtime: 68 ms, faster than 13.69% of JavaScript online submissions for Uncommon Words from Two Sentences.
Memory Usage: 37.5 MB, less than 25.00% of JavaScript online submissions for Uncommon Words from Two Sentences.
*/
var uncommonFromSentences = function(A, B) {
    let uncommon = [];
    let joined = [...A.split(' '), ...B.split(' ')]
    let map = {};
      for (let i = 0; i < joined.length; i++) {
          if (!map[joined[i]]) {
              map[joined[i]] = 'unique'
              
          } else {
            map[joined[i]] = 'repeat'
          }
      } 
       for (let j = 0; j < joined.length; j++) {
         console.log(map[joined[j]])
          if (map[joined[j]] !== "repeat") {
            
            uncommon.push(joined[j]);
          }  
       } return uncommon;
    
};

//Second Attempts
/*STATS
Runtime: 56 ms, faster than 66.50% of JavaScript online submissions for Uncommon Words from Two Sentences.
Memory Usage: 34.9 MB, less than 50.00% of JavaScript online submissions for Uncommon Words from Two Sentences.
*/
var uncommonFromSentences = function(A, B) {
    let uncommon = [];
    let joined = A + ' ' + B
    joined = joined.split(' ')
    
    joined.sort()
    for (let i = joined.length-1; i >= 0; i--) {
     if (joined[i] !== joined[i-1] && joined[i] !== joined[i+1]) {
       uncommon.push(joined[i])
     } 
    } return uncommon;
    
};
