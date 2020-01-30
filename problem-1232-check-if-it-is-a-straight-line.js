/*1232. Check If It Is a Straight Line

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 
Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.*/
/*Runtime: 56 ms, faster than 69.35% of JavaScript online submissions for Check If It Is a Straight Line.
Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Check If It Is a Straight Line.*/

var checkStraightLine = function(coordinates) {
    let slope = (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);
    
    for (let i = 2; i < coordinates.length; i++) {
        if ( (coordinates[i][1] - coordinates[i-1][1]) /
    (coordinates[i][0] - coordinates[i-1][0]) !== slope) {  
          return false;
        }
    } return true;
};
