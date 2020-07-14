/*1170. Compare Strings by Frequency of the Smallest Character

Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

 

Example 1:

Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
Example 2:

Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
Output: [1,2]
Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
 

Constraints:

1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
queries[i][j], words[i][j] are English lowercase letters.*/

//Naive Solution
/*STATS Runtime: 6324 ms, faster than 7.14% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
Memory Usage: 44 MB, less than 25.45% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.*/

var numSmallerByFrequency = function(queries, words) {
    let answer = []
    
    function freqCalc(w) {
        w = w.split('').sort()
        let num = 1;
        for (let i = 1; i < w.length; i++) {
            if (w[0] === w[i]) {
                num++
            }
        } return num;
    }
    
    for (let i = 0; i < queries.length; i++) {
        let qF = freqCalc(queries[i]);
        answer.push(0)
        
        for (let j = 0; j < words.length; j++) {
            let wF = freqCalc(words[j]);
            if (qF < wF) {
                answer[answer.length-1]++
            }
        }
    } return answer
};


//Better solution
/*STATS Runtime: 140 ms, faster than 51.79% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
Memory Usage: 37.9 MB, less than 96.36% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.*/

var numSmallerByFrequency = function(queries, words) {
   
    
    var current;
    var smallestLetter;
    var freq;
    
    
    var smallestCalc = function(str) {
        smallestLetter = 122; // corresponds with z
        freq = 0;
        for (var i = 0; i < str.length; i++) {
            current = str[i].charCodeAt();
            if (current < smallestLetter) {
                freq = 1;
                smallestLetter = current;
            } else if (current === smallestLetter) {
                freq++;
            }
        }
        
        return freq;
    };
    
    var smallestQueryF = new Array(queries.length);
    for (var i = 0; i < queries.length; i++) {
        smallestQueryF[i] = smallestCalc(queries[i]);
    }
    
    var result = new Array(queries.length).fill(0);
    var smalestWordF;
    for (var i = 0; i < words.length; i++) {
        smalestWordF = smallestCalc(words[i]);
        for (var j = 0; j < smallestQueryF.length; j++) {
            if (smallestQueryF[j] < smalestWordF) {
                result[j]++;
            }
        }
    }
    
    return result;
};
