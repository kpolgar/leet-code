/*1839. Longest Substring Of All Vowels in Order
Medium

A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
 

Constraints:

1 <= word.length <= 5 * 105
word consists of characters 'a', 'e', 'i', 'o', and 'u'.*/

 /*STATS Runtime: 460 ms, faster than 6.10% of JavaScript online submissions for Longest Substring Of All Vowels in Order.
Memory Usage: 72.9 MB, less than 8.92% of JavaScript online submissions for Longest Substring Of All Vowels in Order.*/

//Solution 1: Using Includes

var longestBeautifulSubstring = function(word) {
    let longest = 0;

    let currString = word[0]
    
    for (let i = 1; i <= word.length; i++) {
         if (word[i] < word[i-1] || word[i] === undefined) { //reached end of possible valid substring, check validity
             
             if (currString.length >= longest) {
                  if (currString.includes("a") && currString.includes("e") && currString.includes("i") && currString.includes("o") && currString.includes("u")) { //check for vowels
                    longest = currString.length;
                  }
             } 
            currString = ''    
        } 
        currString += word[i]
    } return longest
}

//Solution 2: Using Set

/*STATSRuntime: 472 ms, faster than 5.63% of JavaScript online submissions for Longest Substring Of All Vowels in Order.
Memory Usage: 71.2 MB, less than 9.86% of JavaScript online submissions for Longest Substring Of All Vowels in Order.*/

var longestBeautifulSubstring = function(word) {
    let longest = 0;

    let currString = word[0]
    let currSet = new Set()
    currSet.add(word[0])
    
    for (let i = 1; i <= word.length; i++) {
         if (word[i] < word[i-1] || word[i] === undefined) { //reached end of possible valid substring, check validity
             
             if (currString.length >= longest) {
                  if (currSet.size === 5) { //check for vowels
                    longest = currString.length;
                  }
             } 
            currString = ''  
            currSet = new Set()
        } 
        currString += word[i]
        currSet.add(word[i])
    } return longest
}
