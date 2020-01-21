/*1281. Subtract the Product and Sum of Digits of an Integer
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
 
Constraints:

1 <= n <= 10^5
*/
/*STATS
Runtime: 56 ms, faster than 59.80% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
*/

var subtractProductAndSum = function(n) {
    //setting initial values: 1 makes sense for multiplication, 0 makes sense for addition
    let product = 1;
    let sum = 0;
    //changing the number into a digit
    let nString = n.toString();
    for (let i = 0; i < nString.length; i++) {
        //we keep multiplying and adding on the digits
        product *= nString[i];
        sum += Number(nString[i]);
    }    
    //returning the difference
    return product - sum;
    
};
