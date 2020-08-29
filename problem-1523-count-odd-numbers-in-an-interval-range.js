/*1523. Count Odd Numbers in an Interval Range

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9*/

//Solution 1
/*STATS Runtime: 940 ms, faster than 38.84% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
Memory Usage: 36.9 MB, less than 5.78% of JavaScript online submissions for Count Odd Numbers in an Interval Range.*/

var countOdds = function(low, high) {
    let start = low % 2 ? low : low+1;
    let counter = 0;
    for (let i = start; i <= high; i+=2) {
        counter++;
    }
    return counter;
};

//Second Attempt

/*STATS Runtime: 64 ms, faster than 99.17% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
Memory Usage: 36.7 MB, less than 19.28% of JavaScript online submissions for Count Odd Numbers in an Interval Range.*/

var countOdds = function(low, high) {
    let startOdd = low % 2 ? true : false;
    let endOdd = high % 2 ? true : false;
    
    if (startOdd && endOdd) {
        return (high - low + 2) / 2
    }
    else if (startOdd || endOdd) {
        return Math.floor((high - low + 2) / 2)
    } else {
        return (high-low) / 2
    }
    
};
