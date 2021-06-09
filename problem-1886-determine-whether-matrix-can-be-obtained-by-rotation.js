/*1886. Determine Whether Matrix Can Be Obtained By Rotation

Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

 

Example 1:


Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
Example 2:


Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
Output: false
Explanation: It is impossible to make mat equal to target by rotating mat.
Example 3:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
 

Constraints:

n == mat.length == target.length
n == mat[i].length == target[i].length
1 <= n <= 10
mat[i][j] and target[i][j] are either 0 or 1.*/

/*STATS Runtime: 100 ms, faster than 100.00% of JavaScript online submissions for Determine Whether Matrix Can Be Obtained By Rotation.
Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions for Determine Whether Matrix Can Be Obtained By Rotation.*/

var findRotation = function(mat, target) {
    const targetF = target.flat().join('')
    const matF = mat.flat()
    //right side up
    if (matF.join('') === targetF) {
        return true
    }
    //upside down
    if (matF.reverse().join('') === targetF) {
        return true
    }
    
    let matRot = '';
    
    for (let col = 0; col < mat.length; col++) {
        for (let row = mat.length-1; row >= 0; row--) {
            matRot+= mat[row][col]
        }
    }
    
    if (matRot === targetF) {
        return true
    }
    
    let matRotRev = matRot.split('').reverse().join('')
    
    if (matRotRev === targetF) {
        return true;
    }
    return false
};
