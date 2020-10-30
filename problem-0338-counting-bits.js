/*338. Counting Bits
Medium

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.*/

/*STATS Runtime: 136 ms, faster than 21.07% of JavaScript online submissions for Counting Bits.
Memory Usage: 50.4 MB, less than 5.35% of JavaScript online submissions for Counting Bits.*/

var countBits = function(num) {
    let answer = [];
    for (let i = 0; i <= num; i++) {
        let binary = i.toString(2).match(/[1]/g)
        binary ? answer.push(binary.length): answer.push(0)
        
    }
    return answer;
};

//Attempt 2
/*If you multiply a number by 2, you will still have the same number of 1 bits. Odd numbers have one greater bit than the pevious number*/

/*STATS Runtime: 92 ms, faster than 95.65% of JavaScript online submissions for Counting Bits.
Memory Usage: 44.5 MB, less than 5.35% of JavaScript online submissions for Counting Bits.*/

var countBits = function(num) {
    let answer = [0];
    
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            answer[i] = answer[i/2];
        }
        else answer[i] = answer[i-1] + 1;
    }
    return answer;
};
