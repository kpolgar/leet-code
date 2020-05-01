/*748. Shortest Completing Word

Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

Example 1:
Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
Example 2:
Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
Output: "pest"
Explanation: There are 3 smallest length words that contains the letters "s".
We return the one that occurred first.
Note:
licensePlate will be a string with length in range [1, 7].
licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
words will have a length in the range [10, 1000].
Every words[i] will consist of lowercase letters, and have length in range [1, 15].*/

/*STATS Runtime: 72 ms, faster than 69.77% of JavaScript online submissions for Shortest Completing Word.
Memory Usage: 37.7 MB, less than 100.00% of JavaScript online submissions for Shortest Completing Word.*/

var shortestCompletingWord = function(licensePlate, words) {
   let matches = '';
  let wordsArr = [...words]
   let license = licensePlate.toLowerCase();
  for (let i = 0; i < wordsArr.length; i++) {
      for (let j = 0; j < license.length; j++) {
        var condition = true;
          if (isNaN(license[j])) {
            let index = wordsArr[i].toLowerCase().indexOf(license[j]);
            if (index >= 0) {
                wordsArr[i] = wordsArr[i].toLowerCase().replace(license[j], '')
            } else {
              condition = false;
              break;
            }
          }           
        }
      if (condition === true) {
        if (!matches.length) {
          matches = words[i]
        }
        else {
          if (matches.length > words[i].length) {
            matches = words[i]
          }
        }
      }
    }
    return matches;
};
