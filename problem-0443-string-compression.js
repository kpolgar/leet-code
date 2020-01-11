/*443. String Compression
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

 
Follow up:
Could you solve it using only O(1) extra space?

 
Example 1:

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 

Example 2:

Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.
 

Example 3:

Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.
 

Note:

All characters have an ASCII value in [35, 126].
1 <= len(chars) <= 1000.
*/
/*STATS
Runtime: 60 ms, faster than 96.22% of JavaScript online submissions for String Compression.
Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for String Compression.
*/

var compress = function(chars) {
    let length = chars.length
    chars.push(chars[0]);
    let mult = 1;
    for (let i = 1; i < length; i++) {
        if (chars[i] !== chars[i-1]) {
            if (mult > 1) {
                mult = mult.toString().split("");
              for (let j = 0; j < mult.length; j++) {
                chars.push(mult[j])
              }
            }
            mult = 1;
            chars.push(chars[i]);
        } else {
            mult++;
        }
    } 
    if (mult > 1) {
        mult = mult.toString().split("");
        for (let k = 0; k < mult.length; k++) {
          chars.push(mult[k])
         }
    }
  chars.splice(0, length );
  return chars.length;
};
