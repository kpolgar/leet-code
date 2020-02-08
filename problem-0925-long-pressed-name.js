/*925. Long Pressed Name
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true
Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.
 

Note:

name.length <= 1000
typed.length <= 1000
The characters of name and typed are lowercase letters.*/

/*STATS Runtime: 56 ms, faster than 75.15% of JavaScript online submissions for Long Pressed Name.
Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Long Pressed Name.*/

var isLongPressedName = function(name, typed) {
    let namePointer = 0
    let nameLength = name.length;
    for (let i = 0; i < typed.length; i++) {
      console.log(namePointer)
        if (name[namePointer] === typed[i]) {
            namePointer++;
            }
        if (name[namePointer-1] === typed[i]) {
            continue;
        } 
        else {
            return false;
        }
    } 
    if (namePointer >= nameLength) {
      console.log('namePointer')
        return true;
    } return false;
    
};
