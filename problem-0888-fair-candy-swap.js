/*888. Fair Candy Swap
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th
bar of candy that Alice has, and B[j] is the size of the j-th bar of candy
that Bob has.

Since they are friends, they would like to exchange one candy bar each so that
after the exchange, they both have the same total amount of candy.  (The total
amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that
Alice must exchange, and ans[1] is the size of the candy bar that Bob must
exchange.

If there are multiple answers, you may return any one of them.  It is
guaranteed an answer exists.*/

/*STATS
Runtime: 708 ms, faster than 28.57% of JavaScript online submissions for Fair Candy Swap.
Memory Usage: 39.2 MB, less than 100.00% of JavaScript online submissions for Fair Candy Swap.
*/
var fairCandySwap = function(A, B) {
    let sumAlice = A.reduce((total, current) => total + current, 0); 
    let sumBob = B.reduce((total, current) => total + current, 0); 
  
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
        if (sumAlice - A[i] + B[j] === sumBob + A[i] - B[j]) {
          return [A[i], B[j]];
        }
      }
    }
};
