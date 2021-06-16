/*1861. Rotating the Box
Medium

You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:

A stone '#'
A stationary obstacle '*'
Empty '.'
The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.

It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.

Return an n x m matrix representing the box after the rotation described above.

 

Example 1:



Input: box = [["#",".","#"]]
Output: [["."],
         ["#"],
         ["#"]]
Example 2:



Input: box = [["#",".","*","."],
              ["#","#","*","."]]
Output: [["#","."],
         ["#","#"],
         ["*","*"],
         [".","."]]
Example 3:



Input: box = [["#","#","*",".","*","."],
              ["#","#","#","*",".","."],
              ["#","#","#",".","#","."]]
Output: [[".","#","#"],
         [".","#","#"],
         ["#","#","*"],
         ["#","*","."],
         ["#",".","*"],
         ["#",".","."]]
 

Constraints:

m == box.length
n == box[i].length
1 <= m, n <= 500
box[i][j] is either '#', '*', or '.'.*/

/*STATS Runtime: 420 ms, faster than 61.65% of JavaScript online submissions for Rotating the Box.
Memory Usage: 64.6 MB, less than 99.25% of JavaScript online submissions for Rotating the Box.*/

var rotateTheBox = function(box) {
    //shift everything to the right first, then rotate
    
    for (let i = 0; i < box.length; i++) {
        let right = box[i].lastIndexOf('.')
        if (right < 0) {
            continue
        } else {
           for (let j = box[0].length -1 ; j >= 0; j--) {
            //when we encounter a stone
            if (box[i][j] === '#') {
                //move stone to right
                if (j < right) {
                    box[i][j] = '.'
                    box[i][right] = '#'
                }
                
                let index = box[i].slice(0, right+1)
                right = index.lastIndexOf('.')
                if (right < 0) {
                    break
                }
            }

            //when we encounter obstacle
            if (box[i][j] === '*') {
                let index = box[i].slice(0, j+1)
                right = index.lastIndexOf('.')
                if (right < 0) {
                    break
                }
            }    
        } 
      }
        
     } 
    //rotate the box
    let answer = []
    
   
    
    for (let col = 0; col < box[0].length; col++) {
        answer.push([])
        for (let row = box.length-1; row >= 0; row--) {
            answer[answer.length-1].push(box[row][col])
        }
    }

    return answer
};
