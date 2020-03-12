 /*744. Find Smallest Letter Greater Than Target

Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"
Note:
letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter.*/

/*STATS Runtime: 56 ms, faster than 95.14% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 37.6 MB, less than 16.67% of JavaScript online submissions for Find Smallest Letter Greater Than Target.*/

//using charCodeAt()
var nextGreatestLetter = function(letters, target) {
    target = target.charCodeAt(0);
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > target) {
            return letters[i];
        }
    } return letters[0]
};

/*STATS Runtime: 52 ms, faster than 99.60% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
Memory Usage: 36.9 MB, less than 16.67% of JavaScript online submissions for Find Smallest Letter Greater Than Target.*/

//not using charCodeAt

var nextGreatestLetter = function(letters, target) {
    
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            return letters[i];
        }
    } return letters[0]
};
