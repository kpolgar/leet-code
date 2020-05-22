/*238. Product of Array Except Self
Medium

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)*/

/*STATS Runtime: 264 ms, faster than 17.62% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 44.4 MB, less than 8.00% of JavaScript online submissions for Product of Array Except Self.*/

var productExceptSelf = function(nums) {
    let left = [1];
    let right = [1];
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        left.push(left[left.length-1] * nums[i]);
        right.unshift(right[0] * nums[nums.length-1-i]);
    }  
 
    for (let i = 0; i < nums.length; i++) {
        answer.push(left[i] * right[i+1])
    }
    return answer;
};

//Without Using Left and Right Arrays

/*STATS Runtime: 80 ms, faster than 75.28% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 43.4 MB, less than 8.00% of JavaScript online submissions for Product of Array Except Self.*/

var productExceptSelf = function(nums) {
    let products=[];
    let prod = 1;
   
    for(let i=0; i<nums.length; i++){  
        products[i] = prod 
        prod *=nums[i]; 
    }    
    prod=1;
    for(let i=nums.length-1; i>=0;i--){   
        products[i] *= prod;
        prod *=nums[i]; 
    }
    
    return products;
};
