/*797. All Paths From Source to Target
Medium

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

Example 1:


Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Example 2:


Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
Example 3:

Input: graph = [[1],[]]
Output: [[0,1]]
Example 4:

Input: graph = [[1,2,3],[2],[3],[]]
Output: [[0,1,2,3],[0,2,3],[0,3]]
Example 5:

Input: graph = [[1,3],[2],[3],[]]
Output: [[0,1,2,3],[0,3]]
 

Constraints:

n == graph.length
2 <= n <= 15
0 <= graph[i][j] < n
graph[i][j] != i (i.e., there will be no self-loops).
The input graph is guaranteed to be a DAG.*/

/*STATS Runtime: 116 ms, faster than 69.00% of JavaScript online submissions for All Paths From Source to Target.
Memory Usage: 45.8 MB, less than 5.94% of JavaScript online submissions for All Paths From Source to Target.*/

var allPathsSourceTarget = function(graph) {
    let allPaths = []
    let path = [0]
    
    function findPaths(node) {
        if (node === graph.length-1) {
            allPaths.push(path.slice(0))
        } else {
            for (let i = 0; i < graph[node].length; i++) {
                path.push(graph[node][i])
                findPaths(graph[node][i])
                path.pop()
            }
        }   
    }
    findPaths(0)
    return allPaths
};
