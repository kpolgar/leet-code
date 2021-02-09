 /*1743. Restore the Array From Adjacent Pairs
Medium

There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every pair of adjacent elements in nums.

You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.

It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.

Return the original array nums. If there are multiple solutions, return any of them.

 

Example 1:

Input: adjacentPairs = [[2,1],[3,4],[3,2]]
Output: [1,2,3,4]
Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order.
Example 2:

Input: adjacentPairs = [[4,-2],[1,4],[-3,1]]
Output: [-2,4,1,-3]
Explanation: There can be negative numbers.
Another solution is [-3,1,4,-2], which would also be accepted.
Example 3:

Input: adjacentPairs = [[100000,-100000]]
Output: [100000,-100000]
 

Constraints:

nums.length == n
adjacentPairs.length == n - 1
adjacentPairs[i].length == 2
2 <= n <= 105
-105 <= nums[i], ui, vi <= 105
There exists some nums that has adjacentPairs as its pairs.*/

/*STATS Runtime: 776 ms, faster than 57.48% of JavaScript online submissions for Restore the Array From Adjacent Pairs.
Memory Usage: 101.5 MB, less than 71.65% of JavaScript online submissions for Restore the Array From Adjacent Pairs.*/

var restoreArray = function(adjacentPairs) {
    //find first number
      let map1 = {}
      let mapPairs = {}
      
      for (let i = 0; i < adjacentPairs.length; i++) {
          if (!mapPairs[adjacentPairs[i][0]]) {
              mapPairs[adjacentPairs[i][0]] = [adjacentPairs[i][1]]
          } else {
              mapPairs[adjacentPairs[i][0]].push(adjacentPairs[i][1])
          }
          
          if (!mapPairs[adjacentPairs[i][1]]) {
              mapPairs[adjacentPairs[i][1]] = [adjacentPairs[i][0]]
          } else {
              mapPairs[adjacentPairs[i][1]].push(adjacentPairs[i][0])
          }
          
          
          if (!map1[adjacentPairs[i][1]]) {
              map1[adjacentPairs[i][1]] = 1;   
          }
          else {
              map1[adjacentPairs[i][1]]++
          }
          
          if (!map1[adjacentPairs[i][0]]) {
              map1[adjacentPairs[i][0]] = 1;   
          }
          else {
              map1[adjacentPairs[i][0]]++
          }
      }
      let first;
      let last;
      for (let i = 0; i < adjacentPairs.length; i++) {
          if (map1[adjacentPairs[i][0]] === 1) {
              if (first === undefined) {
                  first = adjacentPairs[i][0]
              }
              else {
                  last = adjacentPairs[i][0];
                  break
              }
          }
          if (map1[adjacentPairs[i][1]] === 1) {
              if (first === undefined) {
                  first = adjacentPairs[i][1]    
              }
              else {
                  last = adjacentPairs[i][1]
                   break
              }
          }
      }
  
      //mark in map1 which ones are done
      
      let ans = []
  
      let curr = first
      while (map1[last] !== 'done') {
          ans.push(curr)
          map1[curr] = 'done'
          let connect1 = mapPairs[curr][0]
          let connect2 = mapPairs[curr][1]
          if (map1[connect1] !== 'done') {
              curr = connect1
          } else {
              curr = connect2
          }
          
      } return ans
  };
