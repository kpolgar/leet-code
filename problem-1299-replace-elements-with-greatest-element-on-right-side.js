/*1299. Replace Elements with Greatest Element on Right Side

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5*/

//First Attempt
/*STATS Runtime: 340 ms, faster than 33.33% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.*/


var replaceElements = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1]
        for (let j = i+2; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                arr[i] = arr[j]
            }
        }
    }
    arr[arr.length-1] = -1;
    return arr;
};

/*STATS Runtime: 68 ms, faster than 99.35% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
Memory Usage: 38 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.*/

var replaceElements = function(arr) {
    let max = -1;
    for (let i = arr.length-1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp)
    }
    return arr;
};
