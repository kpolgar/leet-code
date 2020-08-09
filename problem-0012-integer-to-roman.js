/*12. Integer to Roman
Medium

1123

2680

Add to List

Share
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.*/

/*STATS Runtime: 204 ms, faster than 34.69% of JavaScript online submissions for Integer to Roman.
Memory Usage: 46.3 MB, less than 6.96% of JavaScript online submissions for Integer to Roman.*/

var intToRoman = function(num) {
    let roman = '';
    let remainder = num;
    
    if (remainder >= 1000) {
        let temp = Math.floor(remainder / 1000)
        console.log(temp)
        for (let i = 0; i < temp; i++) {
            roman += 'M'
        }
        remainder = remainder % 1000
    }
    //special 1
    if (remainder >= 900) {
        roman+='CM'
        remainder = remainder % 900
    }
    
    if (remainder >= 500) {
        roman += 'D'
        remainder = remainder % 500
    }
    
    //Special 2
    if (remainder >= 400) {
        roman+='CD'
        remainder = remainder % 400
    }
    
    if (remainder >= 100) {
        let temp = Math.floor(remainder / 100)
        for (let i = 0; i < temp; i++) {
            roman += 'C'
        }
        remainder = remainder % 100
    }
    
    //Special 3
    if (remainder >= 90) {
        roman+='XC'
        remainder = remainder % 90
    }
    
    if (remainder >= 50) {
        roman += 'L'
        remainder = remainder % 50
    }
    
    //Special 4
    if (remainder >= 40) {
        roman+='XL'
        remainder = remainder % 40
    }
    
    if (remainder >= 10) {
        let temp = Math.floor(remainder / 10)
        for (let i = 0; i < temp; i++) {
            roman += 'X'
        }
        remainder = remainder % 10
    }
    
    //Special 5
    if (remainder >= 9) {
        roman+='IX'
        remainder = remainder % 9
    }
    
    if (remainder >= 5) {
        roman += 'V'
        remainder = remainder % 5
    }
    
    //Special 6
    if (remainder >= 4) {
        roman+='IV'
        remainder = remainder % 4
    }
    
    if (remainder >= 1) {
        let temp = Math.floor(remainder / 1)
        for (let i = 0; i < temp; i++) {
            roman += 'I'
        }
        remainder = remainder % 1
    }
    
    return roman;
    
};
