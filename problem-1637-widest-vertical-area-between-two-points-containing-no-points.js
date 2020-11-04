/**1637. Widest Vertical Area Between Two Points Containing No Points
Medium

Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.

 

Example 1:

​
Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.
Example 2:

Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3
 

Constraints:

n == points.length
2 <= n <= 105
points[i].length == 2
0 <= xi, yi <= 109/

/*Runtime: 192 ms, faster than 84.34% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
Memory Usage: 68.7 MB, less than 6.02% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.*/

var maxWidthOfVerticalArea = function(points) {
    if (points.length < 3) {
        return Math.abs(points[1][0] - points[0][0])
    }
    let x = new Set()
    for (let i = 0; i < points.length; i++) {
        x.add(points[i][0])
    }
    let xArr = [...x].sort(function(a,b){return a - b})
    
    if (xArr.length === 2) {
        return Math.abs(points[1][0] - points[0][0])
    }
    else if (xArr.length < 2) {
        return -1
    }
    
    else {
        let max = 0;
        for (let i = 1; i < xArr.length; i++) {
            if (xArr[i]- xArr[i-1] > max) {
                max = xArr[i]- xArr[i-1]
            }
        } return max;
    } 
};
