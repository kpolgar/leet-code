/*739. Daily Temperatures
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].*/

/*STATS
Runtime: 3372 ms, faster than 5.10% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 76.5 MB, less than 11.11% of JavaScript online submissions for Daily Temperatures.
*/

var dailyTemperatures = function(T) {
    //nested loops
    let days = [];
    for (let i = 0; i < T.length; i++) {
        let currentTemp = T[i];
        let index = T.slice(i, T.length).findIndex(temp => currentTemp < temp);
        if(index === -1) {
          index = 0;
        }
      days.push(index);
    } return days;
};
