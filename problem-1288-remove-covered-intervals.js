/*1288. Remove Covered Intervals
Medium

Given a list of intervals, remove all intervals that are covered by another interval in the list. Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 

Constraints:

1 <= intervals.length <= 1000
0 <= intervals[i][0] < intervals[i][1] <= 10^5
intervals[i] != intervals[j] for all i != j*/

/*STATS Runtime: 56 ms, faster than 95.35% of JavaScript online submissions for Remove Covered Intervals.
Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Remove Covered Intervals.*/

var removeCoveredIntervals = function(intervals) {
    let total= intervals.length;
    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < intervals.length; j++) {
            if (j !== i && intervals[j][0] <= intervals[i][0] && intervals[j][1] >= intervals[i][1]) {
                total--;
                intervals.splice(i, 1);
                i--;
                break;
            }
        }
    } return total;
};
