/*461. Hamming Distance
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.*/

/*STATS Runtime: 56 ms, faster than 60.74% of JavaScript online submissions for Hamming Distance.
Memory Usage: 34 MB, less than 37.50% of JavaScript online submissions for Hamming Distance.*/

//First Attempt
var hammingDistance = function(x, y) {
    var bitsX = (x).toString(2);
    var bitsY = (y).toString(2);
    
    if (bitsX.length > bitsY.length) {
        var longer = bitsX;
        var shorter = bitsY;
    } else {
        var longer = bitsY;
        var shorter = bitsX
    }

    let counter = 0;
    let lPointer = longer.length - 1; 
    let sPointer = shorter.length - 1;
    while (lPointer >= 0) {
        if ((longer[lPointer] === '0' && sPointer < 0)) {
            
        }
        else if (longer[lPointer] !== shorter[sPointer]) {
            counter++;
        }
        lPointer--;
        sPointer--;
    } return counter;
};

//2nd Attempt

/*STATS Runtime: 48 ms, faster than 94.63% of JavaScript online submissions for Hamming Distance.
Memory Usage: 33.8 MB, less than 62.50% of JavaScript online submissions for Hamming Distance.*/

var hammingDistance = function(x, y) {
    var bitsX = (x).toString(2);
    var bitsY = (y).toString(2); 
    if (bitsX.length > bitsY.length) {
        var longer = bitsX;
        var shorter = bitsY;
    } else {
        var longer = bitsY;
        var shorter = bitsX
    }
    let diff = longer.length - shorter.length;
    for (let i = 0; i < diff; i++) {
        shorter = '0' + shorter;
    }
    let counter = 0;
    for (let i = 0; i < longer.length; i++) {
        if (shorter[i] !== longer[i]) {
            counter++;
        }
    }
   return counter;
};
