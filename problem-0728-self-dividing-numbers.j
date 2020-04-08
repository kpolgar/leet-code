/*728. Self Dividing Numbers
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.*/


/*STATS Runtime: 64 ms, faster than 43.30% of JavaScript online submissions for Self Dividing Numbers.
Memory Usage: 38.4 MB, less than 7.69% of JavaScript online submissions for Self Dividing Numbers.*/

var selfDividingNumbers = function(left, right) {
    let answer=[];
    let valid = true;
    for (let i = left; i <= right; i++) {
        let digits = splitToDigit(i);
        for (let j = 0; j< digits.length; j++) {
            if (digits[j] === 0 || i % digits[j] !== 0 ) {
                valid = false;
                break
            }
        } if (valid) {
            answer.push(i)
        } valid = true;
    } return answer;
};

//Attempt 2

/*STATS Runtime: 52 ms, faster than 95.54% of JavaScript online submissions for Self Dividing Numbers.
Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Self Dividing Numbers*/

var selfDividingNumbers = function(left, right) {
    let r;
    let d;
    const answer = [];

    for (let i=left; i<=right; i++) { //looping through the numbers
      d=i;
      r=i%10; //the remainder after dividing by 10
      while (r && !(i%r)) { //while remainder is not 0
        d=Math.floor(d/10);
        r=d%10;
      }
      if (d===0) {
          answer.push(i);
      }
    }
    return answer;
};
