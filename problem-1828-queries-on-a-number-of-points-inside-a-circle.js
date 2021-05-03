
/*1828. Queries on Number of Points Inside a Circle
Medium

You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

Return an array answer, where answer[j] is the answer to the jth query.

 

Example 1:


Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
Output: [3,2,2]
Explanation: The points and circles are shown above.
queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.
Example 2:


Input: points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
Output: [2,3,2,4]
Explanation: The points and circles are shown above.
queries[0] is green, queries[1] is red, queries[2] is blue, and queries[3] is purple.
 

Constraints:

1 <= points.length <= 500
points[i].length == 2
0 <= x​​​​​​i, y​​​​​​i <= 500
1 <= queries.length <= 500
queries[j].length == 3
0 <= xj, yj <= 500
1 <= rj <= 500
All coordinates are integers.*/

/*STATS Runtime: 120 ms, faster than 84.43% of JavaScript online submissions for Queries on Number of Points Inside a Circle.
Memory Usage: 40.8 MB, less than 73.11% of JavaScript online submissions for Queries on Number of Points Inside a Circle.*/

var countPoints = function(points, queries) {
    let answer = []
    //need to calculate the distance of each point to the center of the circle, that distance
    //must be less than or equal to the radius
    //that distance is the hypotenuse of a right triangle, the height is change in y, the bottom is
    //change in x
    //c = √(a² + b²)
    
    for (let i = 0; i < queries.length; i++) {
        let nums = 0
        for (let j = 0; j < points.length; j++) {
            let length = Math.sqrt(Math.pow((Math.abs(queries[i][0]-points[j][0])), 2) + Math.pow((Math.abs(queries[i][1]-points[j][1])), 2))
            //console.log(length)
            if (length <= queries[i][2]) {
                nums++
            }
        }
        answer.push(nums)
    }
    return answer;
};
