/*937. Reorder Data in Log Files

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.*/

/*STATS Runtime: 80 ms, faster than 87.67% of JavaScript online submissions for Reorder Data in Log Files.
Memory Usage: 38.7 MB, less than 92.61% of JavaScript online submissions for Reorder Data in Log Files.*/

var reorderLogFiles = function(logs) {
    let counter = 0
    let letters = []
    let numbers = []
  for (let i = 0; i < logs.length; i++) {
      if (counter >= logs.length) {
          break;
      }
      let curr = logs[i].split(' ')
      if (!isNaN(curr[1])) {
          curr = curr.join(' ')
          numbers.push(curr)
      } else {
          letters.push(curr)
      }
      counter++
  }
   let lengths = []
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i].join(' ')
    }
    letters.sort(function(a,b) {
        let x = a.indexOf(' ') + 1;
        let y = b.indexOf(' ') + 1;
        if (a.substring(x) === b.substring(y)) {
            return a > b ? 1 : -1;
        }
        else {
          return a.substring(x) > b.substring(y) ? 1 : -1
        }
    })
    
    
    return letters.concat(numbers)
};
