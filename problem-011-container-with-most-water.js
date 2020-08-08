/*11. Container With Most Water
Medium

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 
Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49*/

/*STATS Runtime: 76 ms, faster than 73.49% of JavaScript online submissions for Container With Most Water.
Memory Usage: 37.6 MB, less than 34.11% of JavaScript online submissions for Container With Most Water.*/

var maxArea = function(height) {
    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = height.length-1;
    
    while (leftPointer < rightPointer) {
        let shorter = Math.min(height[leftPointer], height[rightPointer]);
        
        maxArea =  Math.max(((rightPointer - leftPointer) * shorter), maxArea);
        
        if (height[leftPointer] === shorter) {
            leftPointer++;
        } else {
            rightPointer--
        }
    }
    return maxArea;  
};
