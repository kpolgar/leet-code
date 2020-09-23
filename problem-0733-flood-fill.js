/*733. Flood Fill
Easy

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].*/

/*STATS Runtime: 88 ms, faster than 89.70% of JavaScript online submissions for Flood Fill.
Memory Usage: 39.1 MB, less than 91.58% of JavaScript online submissions for Flood Fill.*/

var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc]
    if (oldColor === newColor) {
        return image
    }
    function dfs(row, col, image) {
        //base case
        if (image[row][col] !== oldColor) {
            return;
        }
        
        image[row][col] = newColor
        //checking pixel on left
        if (image[row] !== undefined && image[row][col-1] !== undefined) {
            dfs (row, col-1, image)
        }
        //checking pixel on right
        if (image[row] !== undefined && image[row][col+1] !== undefined) {
            dfs (row, col+1, image)
        }
        //checking pixel on top
        if (image[row-1] !== undefined && image[row-1][col] !== undefined) {
            dfs (row-1, col, image)
        }
        //checking pixel on bottom
        if (image[row+1] !== undefined && image[row+1][col] !== undefined) {
            dfs (row+1, col, image)
        }
        
    }
    
    dfs(sr, sc, image)
    return image;
};
