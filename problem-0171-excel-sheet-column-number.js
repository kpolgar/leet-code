/*171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701*/

//Using an Object with Letters as Keys
/*Runtime: 116 ms, faster than 11.45% of JavaScript online submissions for Excel Sheet Column Number.
Memory Usage: 42.5 MB, less than 6.67% of JavaScript online submissions for Excel Sheet Column Number.*/

var titleToNumber = function(s) {
    let letterValues = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, 
        P: 16, Q: 17, R: 18,S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    }
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            total += letterValues[s[i]] //this check could be eliminated because raising 26^0 is equal to 1
        } 
        else {
            total += (Math.pow(26, s.length-i-1)) * letterValues[s[i]];
        }   
        console.log('total',total)
    }
    return total;
};

//Using charCodeAt
/*STATSRuntime: 72 ms, faster than 72.56% of JavaScript online submissions for Excel Sheet Column Number.
Memory Usage: 36.1 MB, less than 60.00% of JavaScript online submissions for Excel Sheet Column Number.*/

var titleToNumber = function(s) {
   let column = 0; 
   for (let i = 0; i < s.length; i++) {
       column += (s.charCodeAt(i)-64) * Math.pow(26, s.length-i-1)
   }
    return column;
};



/*
A   1   = 1 * 26^0  
    
Z   26  = (26 * 26^0) 
AA  27  = (1 * 26^0 ) + (1 * 26^1)
.
.
.
AZ  52  = (26 * 26^0) + (1 * 26^1)
BA  53  = (1 * 26^0) + (2 * 26^1)
.
.
.
ZZ  702 = (26*26^0) + (26*26^1) 
.
.
.
AAA 703 = (1 * 26^0) + (1 * 26^1) + (1* 26^2)
*/    
