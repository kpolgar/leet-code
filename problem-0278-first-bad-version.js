/*278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. */

/*STATS Runtime: 52 ms, faster than 71.00% of JavaScript online submissions for First Bad Version.
Memory Usage: 33.8 MB, less than 61.54% of JavaScript online submissions for First Bad Version.*/

var solution = function(isBadVersion) {
   /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var min = 1;
        var max = n;
        var bad = -1;
        while (min <= max) {
            var mid = Math.floor((min+max)/2);
            if (isBadVersion(mid)) {
                bad = mid;
                max = mid-1;
            }
            else {
                min = mid+1;
            }
        }
        return bad;
    };
};
