/*1185. Day of the Week Given a date, return the corresponding day of the week
for that date.

The input is given as three integers representing the day, month and year
respectively.

Return the answer as one of the following values {"Sunday", "Monday",
"Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.*/
/*STATS
Success
Details 
Runtime: 44 ms, faster than 97.54% of JavaScript online submissions for Day of the Week.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Day of the Week.
*/

var dayOfTheWeek = function(day, month, year) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var d = new Date(year, month-1, day);
    
    let date = d.getDay();
    return days[date];
};
