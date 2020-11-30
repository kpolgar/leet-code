/*836. Rectangle Overlap

An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

 

Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false
Example 3:

Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false
 

Constraints:

rect1.length == 4
rect2.length == 4
-109 <= rec1[i], rec2[i] <= 109
rec1[0] <= rec1[2] and rec1[1] <= rec1[3]
rec2[0] <= rec2[2] and rec2[1] <= rec2[3]*/

/*STATS Runtime: 68 ms, faster than 95.19% of JavaScript online submissions for Rectangle Overlap.
Memory Usage: 38.5 MB, less than 39.04% of JavaScript online submissions for Rectangle Overlap.*/

var isRectangleOverlap = function(rec1, rec2) {
    let minX;
    let maxX;
    
    if (rec1[2] - rec1[0] === 0 || rec1[3] - rec1[1] === 0 || rec2[2] - rec2[0] === 0 || rec2[3] - rec2[1] === 0) {
        return false;
    }
    if (Math.min(rec1[0], rec2[0]) === rec1[0]) {
        minX = [...rec1]
        maxX = [...rec2]
    } else {
        minX = [...rec2]
        maxX = [...rec1]
    }
    
    let minY;
    let maxY;
    if (Math.min(rec1[1], rec2[1]) === rec1[1]) {
        minY = [...rec1]
        maxY = [...rec2]
    } else {
        minY = [...rec2]
        maxY = [...rec1]
    }
    
    if (minX[2] <= maxX[0]) {
        return false;
    }
    if (minY[3] <= maxY[1]) {
        return false;
    }
    return true;
};
