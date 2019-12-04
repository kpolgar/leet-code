//7. LeetCode Reverse Integer
/*Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.*/
//My code, first attempt

/*STATS
Runtime: 84 ms, faster than 28.80% of JavaScript online submissions for Reverse Integer.
Memory Usage: 36 MB, less than 35.42% of JavaScript online submissions for Reverse Integer.
*/

var reverse = function(x) {
   let negative = false;
   let arr = x.toString().split('')
   if (arr[0] === '-') {
     negative = true;
     arr.shift(arr[0]);
   }
    arr = arr.reverse().join('');
    arr = parseInt(arr);
  
    if (negative) {
      arr = arr * -1;
    }
    if (arr > 2147483647 || arr < -2147483647) {
        return 0;
    }
    return arr;
};

//Better Solution
/*Runtime: 76 ms, faster than 64.95% of JavaScript online submissions for Reverse Integer.
Memory Usage: 35.9 MB, less than 47.92% of JavaScript online submissions for Reverse Integer.*/

const reverse = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};
