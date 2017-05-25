[104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


计算一棵二叉树的最大深度，使用DFS或者BFS可以实现，下面是用递归实现的DFS:
```js
var maxDepth = function(root) {
    return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0
}
```