/*415. Add Strings

Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.*/

/*STATS Runtime: 88 ms, faster than 73.66% of JavaScript online submissions for Add Strings.
Memory Usage: 40.8 MB, less than 11.35% of JavaScript online submissions for Add Strings.*/

var addStrings = function(num1, num2) {
    let carry = 0
    let res = ''
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
      
      while(p1 >= 0 || p2 >= 0 || carry > 0) {
          let x1 = p1 >= 0 ? num1[p1] - '0' : 0
          let x2 = p2 >= 0 ? num2[p2] - '0': 0
          
          let sum = x1 + x2 + carry
          res = sum % 10 + res + ''
          carry = Math.floor(sum / 10)
          p1--;
          p2--;
      }
      return res
      
  };
