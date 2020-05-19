/*204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.*/

//Brute force solution

/*STATS: exceeds time limit*/
var countPrimes = function(n) {
    let counter = 0;
    for (let i = 2; i < n; i++) {
        if (primeCheck(i)) {
            counter++;
        }
    }
               
    function primeCheck(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            } 
        } return true;
    } 
    
    return counter
};

//Sieve of Eratosthenes

/*STATS Runtime: 164 ms, faster than 54.20% of JavaScript online submissions for Count Primes.
Memory Usage: 57.7 MB, less than 86.67% of JavaScript online submissions for Count Primes.*/

var countPrimes = function(n) {
    if (n < 2) {
        return 0;
    }
    let primes = new Array(n).fill(1); //initializing empty array with ones; ones represent prime numbers
    
    for (let i = 2; i*i < n; i++) {
        for (let j = i*i; j < n; j+=i) {
            primes[j] = 0; //marking composite numbers in array with zeroes
        }
    } 
    return primes.reduce((total, num) => total + num) - 2 //subtract 2 because 0 and 1 are not considered prime
};
