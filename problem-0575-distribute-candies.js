/*575. Distribute Candies

Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.
Example 1:
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
The sister has three different kinds of candies. 
Example 2:
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
The sister has two different kinds of candies, the brother has only one kind of candies. 
Note:

The length of the given array is in range [2, 10,000], and will be even.
The number in given array is in range [-100,000, 100,000].*/

//First Attempt Using hash table
/*STATS Runtime: 244 ms, faster than 41.37% of JavaScript online submissions for Distribute Candies.
Memory Usage: 50.1 MB, less than 100.00% of JavaScript online submissions for Distribute Candies.*/

var distributeCandies = function(candies) {
    let types = 0;
    let map = {};
    for (let i = 0; i < candies.length; i++) {
        if (!map[candies[i]]) {
            map[candies[i]] = 1;
          types++;
        } 
    } if (types >= (candies.length/2)) {
        return candies.length/2
    } else {
        return types;
    }
};

//Second Attempt: Using Set

/*STATS Runtime: 124 ms, faster than 89.90% of JavaScript online submissions for Distribute Candies.
Memory Usage: 44 MB, less than 100.00% of JavaScript online submissions for Distribute Candies.*/

var distributeCandies = function(candies) {
    var set = new Set(candies);
     if (set.size >= (candies.length/2)) {
        return candies.length/2
    } else {
        return set.size;
    }
};
