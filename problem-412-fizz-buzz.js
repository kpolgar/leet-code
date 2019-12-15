/*412. Fizz Buzz
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and
for the multiples of five output “Buzz”. For numbers which are multiples of
both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]*/

/*STATS
Runtime: 64 ms, faster than 63.83% of JavaScript online submissions for Fizz Buzz.
Memory Usage: 37.3 MB, less than 70.00% of JavaScript online submissions for Fizz Buzz.
*/

var fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            answer.push('Fizz')
        }
        else if (i % 5 === 0) {
            answer.push('Buzz');
        }
        else {
            answer.push(i.toString())
        } 
    } return answer;
};
