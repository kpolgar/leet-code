/*46. Permutations
Medium

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]*/

/*STATS Runtime: 72 ms, faster than 57.32% of JavaScript online submissions for Permutations.
Memory Usage: 39.2 MB, less than 8.00% of JavaScript online submissions for Permutations.*/

var permute = function(nums) {
    if(!nums) {
      return [];  
    } 
    if(nums.length === 1) {
      return [nums];  
    } 
    let res = []
    
    let check = (temp, rest ) => {
        if(rest.length === 0 ) { 
            res.push(temp); 
            return
        }
        for(let i=0; i <rest.length; i++){
            let newRest = rest.slice(0); 
            newRest.splice(i,1); 
            check(temp.concat(rest[i]), newRest)
        }
    }
    
    check([], nums); 
    
    return res
};
