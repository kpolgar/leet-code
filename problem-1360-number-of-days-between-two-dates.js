/*1360. Number of Days Between Two Dates

Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

 

Example 1:

Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1
Example 2:

Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.*/

/*STATS Runtime: 48 ms, faster than 94.65% of JavaScript online submissions for Number of Days Between Two Dates.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Number of Days Between Two Dates.*/

var daysBetweenDates = function(date1, date2) {
    let diff = Math.abs((new Date(date1)) - (new Date(date2)));
    return diff * (1/1000) * (1/60) * (1/60) * (1/24)
};
