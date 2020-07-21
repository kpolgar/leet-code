/*1029. Two City Scheduling

There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 

Note:

1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000*/

/*STATS Runtime: 68 ms, faster than 74.74% of JavaScript online submissions for Two City Scheduling.
Memory Usage: 36.9 MB, less than 18.18% of JavaScript online submissions for Two City Scheduling.*/

var twoCitySchedCost = function(costs) {
    //sorting by the absolute value of the difference in cost for one
    //candidate to travel to city a vs. city b
    let sorted = [...costs].sort(function(a,b) {
         return Math.abs(b[0]-b[1]) - Math.abs(a[0]-a[1])
    })
    let aSpots = sorted.length/2;
    let bSpots = sorted.length/2
    let total = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (aSpots && (sorted[i][0]) < sorted[i][1]) {
            total+=sorted[i][0];
            aSpots--
        }
        else if (bSpots && (sorted[i][1]) < sorted[i][0]) {
            total+=sorted[i][1];
            bSpots--
        }
        else if (aSpots) {
            total+=sorted[i][0];
            aSpots--;
        }
        else if (bSpots) {
            total+=sorted[i][1];
            bSpots--;
        }
    } return total;
};
