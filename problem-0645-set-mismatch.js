/*645. Set Mismatch

The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.*/

//First Attempt: Using Sorty
/*STATS Runtime: 100 ms, faster than 32.65% of JavaScript online submissions for Set Mismatch.
Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Set Mismatch.*/

var findErrorNums = function(nums) {
    let answer = [0, 0];
    nums.sort(function(a,b){return a - b}); //Sorting the array
    
    for (let i = 0; i < nums.length; i++) {    
        if (nums[i] === nums[i+1]) { //if two numbers are the same
            answer[0] = nums[i] //we have our repeated number;     
        }
        
        if (nums[i+1] > nums[i] + 1 ) {
            answer[1] = nums[i] + 1
        }
        if (nums[0] !== 1) { //checking if 1 is the missing number
                answer[1] = 1; //setting the missing number as 1
        }
        if (nums[nums.length-1] !== nums.length) {
            answer[1] = nums.length
        }
    } return answer;
};


//Second Attempt: Using Hash

/*STATS Runtime: 60 ms, faster than 98.98% of JavaScript online submissions for Set Mismatch.
Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Set Mismatch.*/

var findErrorNums = function(nums) {
    let map = {};
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        } else {
            answer[0] = nums[i]
        }
    }
    
    for (let j = 1; j <= nums.length; j++) {
        if (!map[j]) {
            answer[1] = j;
            return answer;
        }
    }
    return answer;
};
