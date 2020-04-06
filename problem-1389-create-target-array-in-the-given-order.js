/*1389. Create Target Array in the Given Order
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

 

Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
Example 2:

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
Example 3:

Input: nums = [1], index = [0]
Output: [1]
 

Constraints:

1 <= nums.length, index.length <= 100
nums.length == index.length
0 <= nums[i] <= 100
0 <= index[i] <= i*/

//First Attempt

/*STATS Runtime: 44 ms, faster than 97.21% of JavaScript online submissions for Create Target Array in the Given Order.
Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Create Target Array in the Given Order.*/

var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        target.splice(index[i], 0, nums[i])
    }
    return target;
};

//Preprocessing index and looping only when necessary

/*STATS Runtime: 44 ms, faster than 97.21% of JavaScript online submissions for Create Target Array in the Given Order.
Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Create Target Array in the Given Order.*/

const createTargetArray = (nums, index) => {
    let target = [];
    let max = -1;
    for(let i = 0; i < index.length; i++){
        if(index[i] <= max){
            for(let j = 0; j < i; j++){
                if(index[i] <= index[j]){
                    index[j]++
                }
                if(index[j] > max){
                    max = index[j]
                }
            }            
        }
        max = Math.max(max, index[i])
    }
    for(const i in nums)target[index[i]] = nums[i]
    return target
};
