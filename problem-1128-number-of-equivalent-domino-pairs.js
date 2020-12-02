/*1128. Number of Equivalent Domino Pairs

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

 

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
 

Constraints:

1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9*/

//Naive Solution

/*STATS Runtime: 3564 ms, faster than 10.83% of JavaScript online submissions for Number of Equivalent Domino Pairs.
Memory Usage: 43.5 MB, less than 80.89% of JavaScript online submissions for Number of Equivalent Domino Pairs.*/

var numEquivDominoPairs = function(dominoes) {
    let pairs = 0;
    for (let i = 0; i < dominoes.length; i++) {
        for (let j = i+1; j < dominoes.length; j++) {
            if ((dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1])|| (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0])) {
                pairs++
            }
        }
    } return pairs
};

//Optimized Solution

/*STATS Runtime: 92 ms, faster than 93.63% of JavaScript online submissions for Number of Equivalent Domino Pairs.
Memory Usage: 45.4 MB, less than 71.97% of JavaScript online submissions for Number of Equivalent Domino Pairs.*/

var numEquivDominoPairs = function(dominoes) {
    let pairs = 0;
    let map = {}
    for (let i = 0; i < dominoes.length; i++) {
        let num = '' + Math.min(dominoes[i][0], dominoes[i][1]) + '' + Math.max(dominoes[i][0], dominoes[i][1])
        if (!map[num]) {
            map[num] = 1
        } else {
            pairs += map[num]
            map[num]++
        }
    } 

    return pairs
};
