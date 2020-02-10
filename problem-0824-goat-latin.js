/*824. Goat Latin
A sentence S is given, composed of words separated by spaces. Each word
consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language
similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of
the word. For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter
and append it to the end, then add "ma". For example, the word "goat" becomes
"oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence,
starting with 1. For example, the first word gets "a" added to the end, the
second word gets "aa" added to the end and so on. Return the final sentence
representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 

Notes:

S contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= S.length <= 150.*/

/*STATS
Runtime: 56 ms, faster than 72.41% of JavaScript online submissions for Goat Latin.
Memory Usage: 35.6 MB, less than 33.33% of JavaScript online submissions for Goat Latin.*/

var toGoatLatin = function(S) {
    let string = S.split(' ');
    for (let i =0; i < string.length; i++) {
        if (string[i][0] === 'a' ||
            string[i][0] === 'e' ||
            string[i][0] === 'i' ||
            string[i][0] === 'o' ||
            string[i][0] === 'u' ||
            string[i][0] === 'A' ||
            string[i][0] === 'E' ||
            string[i][0] === 'I' ||
            string[i][0] === 'O' ||
            string[i][0] === 'U') {
            
            string[i] = string[i] + 'ma';
            for (let j = 0; j <= i; j++) {
                string[i] = string[i] + 'a'
            }
        } else {
          s = string[i].split('').splice(0, 1);
          string[i] = string[i].split('');
          string[i].splice(0, 1)
          string[i] = string[i].join('') + s + 'ma';
          for (let k = 0; k <= i; k++) {
                string[i] = string[i] + 'a'
            }
        }
    } return string.join(' ');
};

console.log(toGoatLatin("I speak Goat Latin"))
