/*371. Sum of Two Integers
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1*/

/*STATS
Runtime: 44 ms, faster than 98.40% of JavaScript online submissions for Sum of Two Integers.
Memory Usage: 33.8 MB, less than 80.00% of JavaScript online submissions for Sum of Two Integers.
*/
var getSum = function(a, b) {
    while (b !== 0) { //to get this you must convert a and be to binar
        var carry = a & b; //returns 1 in each bit position for which both operands are 1s and 0s everywhere else; this is what you need to carry over
        a = a ^ b; //XOR operator returns a 1 in each bit position in which either but not both operands are 1s
        b = carry << 1; //shifts bits to the left shifting in 0s from the right; this loop runs until there is nothing left to carry over
    }
    return a;
};
