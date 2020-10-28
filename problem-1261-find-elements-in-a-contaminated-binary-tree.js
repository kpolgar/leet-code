/*1261. Find Elements in a Contaminated Binary Tree
Medium

Given a binary tree with the following rules:

root.val == 0
If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

You need to first recover the binary tree and then implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
bool find(int target) Return if the target value exists in the recovered binary tree.
 

Example 1:



Input
["FindElements","find","find"]
[[[-1,null,-1]],[1],[2]]
Output
[null,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1]); 
findElements.find(1); // return False 
findElements.find(2); // return True 
Example 2:



Input
["FindElements","find","find","find"]
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
Output
[null,true,true,false]
Explanation
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False
Example 3:



Input
["FindElements","find","find","find","find"]
[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
Output
[null,true,false,false,true]
Explanation
FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
findElements.find(2); // return True
findElements.find(3); // return False
findElements.find(4); // return False
findElements.find(5); // return True
 

Constraints:

TreeNode.val == -1
The height of the binary tree is less than or equal to 20
The total number of nodes is between [1, 10^4]
Total calls of find() is between [1, 10^4]
0 <= target <= 10^6*/

//Solution 1 Recover the tree then use bfs to check target

/*STATS Runtime: 1624 ms, faster than 10.84% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.
Memory Usage: 47.5 MB, less than 18.07% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.*/

class FindElements {
    constructor(root) {
        this.root = root
        this.recovered = this.recover(this.root)
    }
    
    recover(root) {
        root.val = 0
        let arr = [root]
        while(arr.length) {
            let node = arr.shift()
            if (node.left) {
                node.left.val = 2 * node.val + 1
                arr.push (node.left)
            }
            if (node.right) {
                node.right.val = 2 * node.val + 2
                arr.push (node.right)
            }
        }
        return root;
    }
    
    find(target) {
        let condition = false;
        function dfs(node) {
            if (node.val === target) {
                condition = true;
                return
            }
            if (!node) {
                return
            }

            if (node.left) {
                dfs(node.left)
            }
            if (node.right) {
                dfs(node.right)
            } 
        }
        dfs(this.recovered)
        return condition
    }
}

//Solution 2; Save Values in a Set and Check the Set

/*STATS Runtime: 112 ms, faster than 96.39% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.
Memory Usage: 48.4 MB, less than 18.07% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.*/

class FindElements {
    constructor(root) {
        this.root = root
        this.values = new Set();
        this.recovered = this.recover(this.root, this.values)
    }
    
    recover(root, values) {
        root.val = 0
        values.add(0)
        let arr = [root]
        while(arr.length) {
            let node = arr.shift()
            if (node.left) {
                node.left.val = 2 * node.val + 1
                values.add(node.left.val)
                arr.push (node.left)
            }
            if (node.right) {
                node.right.val = 2 * node.val + 2
                values.add(node.right.val)
                arr.push (node.right)
            }
        }
        return root;
    }
    
    find(target) {
        return this.values.has(target);   
    }
}
