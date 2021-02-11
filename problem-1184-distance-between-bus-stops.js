/*1184. Distance Between Bus Stops

A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

 

Example 1:



Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
 

Example 2:



Input: distance = [1,2,3,4], start = 0, destination = 2
Output: 3
Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
 

Example 3:



Input: distance = [1,2,3,4], start = 0, destination = 3
Output: 4
Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.
 

Constraints:

1 <= n <= 10^4
distance.length == n
0 <= start, destination < n
0 <= distance[i] <= 10^4*/

/*STATS Runtime: 72 ms, faster than 94.39% of JavaScript online submissions for Distance Between Bus Stops.
Memory Usage: 38.7 MB, less than 50.47% of JavaScript online submissions for Distance Between Bus Stops.*/

var distanceBetweenBusStops = function(distance, start, destination) {
    let path1 = distance[start]
    let position;
    if (start !== distance.length -1) {
        position = start + 1
    } else {
        position = 0
    }
    
    while (position !== destination) {
        path1 += distance[position]
        if (position !== distance.length -1) {
        position++
             } else {
                position = 0
             }
    }
 
    
    let path2 = Math.abs(distance.reduce(function(a,b){return a + b})-path1)
    
    return Math.min (path1, path2)
    
    
 };
