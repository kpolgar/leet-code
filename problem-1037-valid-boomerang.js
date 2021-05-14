/*1037. Valid Boomerang

Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight line.

 

Example 1:

Input: points = [[1,1],[2,3],[3,2]]
Output: true
Example 2:

Input: points = [[1,1],[2,2],[3,3]]
Output: false
 

Constraints:

points.length == 3
points[i].length == 2
0 <= xi, yi <= 100*/

/*STATS Runtime: 72 ms, faster than 96.55% of JavaScript online submissions for Valid Boomerang.
Memory Usage: 38.7 MB, less than 67.24% of JavaScript online submissions for Valid Boomerang.
*/

var isBoomerang = function(points) {
    
    let slope1 = Math.abs(points[1][1]-points[0][1]) / Math.abs(points[1][0] - points[0][0])
    let slope2 = Math.abs(points[2][1]-points[1][1]) / Math.abs(points[2][0] - points[1][0])
    let slope3 = Math.abs(points[2][1]-points[0][1]) / Math.abs(points[2][0] - points[0][0])
    const slopeSet = new Set()
    slopeSet.add(slope1)
    slopeSet.add(slope2)
    slopeSet.add(slope3)
    const pointSet = new Set()
    pointSet.add(points[0][0] + '.' + points[0][1]) 
    pointSet.add(points[1][0] + '.' + points[1][1])
    pointSet.add(points[2][0] + '.' + points[2][1])
    if (slopeSet.size < 2 || pointSet.size !== 3) {
        return false;
    }
    return true;
}
