[637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/description/)

>Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
>**Example 1:**
>```
>Input:
>    3
>   / \
>  9  20
>    /  \
>   15   7
>**Output:** [3, 14.5, 11]
>**Explanation:**
>The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
>```
>**Note:**
>1. The range of node's value is in the range of 32-bit signed integer.

给定一颗二叉树，计算二叉树每一层的平均值，以数组方式返回。
可以使用 DFS 计算每一层的节点个数及它们的和，代码如下:
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = []
    function walk (node, depth) {
        if (!node) return
        if (!result[depth]) result[depth] = { sum: 0, count: 0 }
        result[depth].sum += node.val
        result[depth].count++
        walk(node.left, depth + 1)
        walk(node.right, depth + 1)
    }
    walk(root, 0)
    return result.map(r => r.sum / r.count)
}
```