/*594. Longest Harmonious Subsequence
Easy

We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:

Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 

Note: The length of the input array will not exceed 20,000.*/
/*Runtime: 120 ms, faster than 57.38% of JavaScript online submissions for Longest Harmonious Subsequence.
Memory Usage: 44.2 MB, less than 66.67% of JavaScript online submissions for Longest Harmonious Subsequence.*/

//My solution Using a Map
var findLHS = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      if (!map[nums[i]]) {
          map[nums[i]] = 1;
      }  else {
          map[nums[i]] = map[nums[i]] + 1
      }
    } 
   let set = new Set(nums);
  let nums2 = Array.from(set)
    let answer = 0;
    for (let i = 0; i < nums2.length; i++) {
        let temp = map[nums2[i]];
     
        let x = 0;
        let y = 0;
        if (map[nums2[i]-1]) {
            x = map[nums2[i]-1] + temp;
    
         
        }
        if (map[nums2[i]+1]) {
            y = map[nums2[i]+1] + temp;
      
        }
        if (Math.max(x, y) > answer) {
            answer = Math.max(x, y);
        }
        if (answer === 7) {
            return 7;
        }
    }
    return answer;
};

//My Solution Using Sorting

/*STATS Runtime: 112 ms, faster than 71.31% of JavaScript online submissions for Longest Harmonious Subsequence.
Memory Usage: 39.7 MB, less than 66.67% of JavaScript online submissions for Longest Harmonious Subsequence.*/
var findLHS = function(nums) {
    nums.sort(function(a,b) {return a-b;})
   
  let previous = nums[0];
  let current;
  let prev_count = 1;
  let count=0;
  let max=0;
    
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === previous) {
      prev_count++;
    }
    else if (nums[i] === previous + 1) {
      count++;
      current = nums[i];
    }
    else if (nums[i] === current + 1) {
      previous = nums[i-1];
      current = nums[i]
      prev_count = count;
      count = 1;
    }
    else {
      previous = nums[i];
      prev_count = 1;
      count = 0;
    }
    if (count > 0) {
        let total = prev_count + count;
        max = Math.max(total, max)
    }  
  }
    return max;
};
