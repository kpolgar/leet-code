/*1854. Maximum Population Year

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.

 

Example 1:

Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
Example 2:

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation: 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.
 

Constraints:

1 <= logs.length <= 100
1950 <= birthi < deathi <= 2050
*/

/*STATS Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Maximum Population Year.
Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Maximum Population Year.*/

var maximumPopulation = function(logs) {
    let max = 0;
    let maxYear = 0
    let births = {}
    
    for (let i = 0; i < logs.length; i++) {
        let birthday = logs[i][0]
        let pop = 0
        if (!births[birthday]) {
            for (let j = 0; j < logs.length; j++) {
                if (logs[j][0] <= birthday && logs[j][1] > birthday) {
                    pop++
                }
            }
            births[birthday] = pop
            if (pop > max) {
                max = pop
                maxYear = birthday
            } if (pop === max) {
                if (birthday < maxYear) {
                    maxYear = birthday
                }
            }
        }
    } return maxYear
};
