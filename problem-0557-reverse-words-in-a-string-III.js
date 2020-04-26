/*557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.*/

/*STATS Runtime: 76 ms, faster than 71.51% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 42.3 MB, less than 26.09% of JavaScript online submissions for Reverse Words in a String III.*/

var reverseWords = function(s) {
    let string = s.split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].split('').reverse().join('')
    } return string.join(' ');
};

/*STATS Runtime: 76 ms, faster than 71.51% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 41.3 MB, less than 95.65% of JavaScript online submissions for Reverse Words in a String III.*/


var reverseWords = function(s) {
    let string = s.split('').reverse().join('').split(' ');
    let reversed = []
    for (let i = string.length-1; i >= 0; i--) {
        reversed.push(string[i])
    }
    return reversed.join(' ');
};
