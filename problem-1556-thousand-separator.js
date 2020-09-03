/*1556. Thousand Separator

Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 

Example 1:

Input: n = 987
Output: "987"
Example 2:

Input: n = 1234
Output: "1.234"
Example 3:

Input: n = 123456789
Output: "123.456.789"
Example 4:

Input: n = 0
Output: "0"
 

Constraints:

0 <= n < 2^31*/

/*STATS Runtime: 76 ms, faster than 75.91% of JavaScript online submissions for Thousand Separator.
Memory Usage: 36.9 MB, less than 37.19% of JavaScript online submissions for Thousand Separator.*/

var thousandSeparator = function(n) {
    n = n.toString().split('')
    console.log(n.length)
    if (n.length <= 3 ) {
        return n.join('');
    } 
    for (let i = n.length-3; i > 0; i-=3) {
        n.splice(i,0,'.');  
    }
    return n.join('');
};

//Second Attempt

/*STATS Runtime: 76 ms, faster than 75.91% of JavaScript online submissions for Thousand Separator.
Memory Usage: 36.7 MB, less than 70.73% of JavaScript online submissions for Thousand Separator.*/

var thousandSeparator = function(n) {
    n = n.toString()
    if (n.length <= 3 ) {
        return n;
    }
    let start;
    n.length%3 === 0 ? start = 3: start = n.length%3;
    

    let ans = n.slice(0, start) + '.'
    console.log(ans)
    
    for (let i = start; i < n.length; i++) {
        if (!((i - start) % 3) && i !== start) {
            ans += '.'
        }
        ans += n[i]
        
    } return ans;
};
