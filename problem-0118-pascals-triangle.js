/*118. Pascal's Triangle
Easy
Given a non-negative integer numRows, generate the first numRows of Pascal's
triangle. In Pascal's triangle, each number is the sum of the two numbers
directly above it.

Example:

Input: 5 Output: [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]*/

//My Answer
/*STATS Runtime: 48 ms, faster than 90.41% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 33.8 MB, less than 46.15% of JavaScript online submissions for Pascal's Triangle..*/

var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  } 
  let containerArray = [[1], [1,1]]; 
  if (numRows === 1) {
    return [[1]];
  }
   let prevArray = [1, 1];
    
    
    for (let i = 0; i < numRows-2; i++) {     
      let newArray = [1];  
      for(let j = 0; j < prevArray.length-1; j++) {
          newArray.push(prevArray[j] + prevArray[j+1])
        }
      newArray.push(1);
      prevArray = newArray;
      containerArray.push(newArray);
        
    } return containerArray;
    
};

console.log(generate(1));
