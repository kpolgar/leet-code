/*344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]*/
/*Runtime: 112 ms, faster than 80.02% of JavaScript online submissions for Reverse String.
Memory Usage: 46.5 MB, less than 100.00% of JavaScript online submissions for Reverse String.*/

//Attempt 1
var reverseString = function(s) {
    let length = Math.floor(s.length / 2);
    let j = s.length-1;
  for (let i = 0; i < length; i++) {
      let temp = s[i]
      s[i] = s[j];
      s[j] = temp;
      j--;
  }
  
    return s;
};

//Attempt 2 Built in javascript method

/*STATS Runtime: 108 ms, faster than 89.96% of JavaScript online submissions for Reverse String.
Memory Usage: 46.6 MB, less than 97.78% of JavaScript online submissions for Reverse String.*/

var reverseString = function(s) {
  s.reverse()  
};

//Attempt 3 similar to solution 1
/**STATS Runtime: 108 ms, faster than 89.96% of JavaScript online submissions for Reverse String.
Memory Usage: 46.6 MB, less than 97.78% of JavaScript online submissions for Reverse String./
var reverseString = function(s) {

  for (let leftIndex = 0, rightIndex = s.length - 1; leftIndex < rightIndex; leftIndex++, rightIndex--) {
    let temp = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = temp;
  }
};
