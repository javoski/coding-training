[543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/#/description)

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
```
          1
         / \
        2   3
       / \     
      4   5 
```   
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

**Note:** The length of path between two nodes is represented by the number of edges between them.


一开始的时候没有理解好题意，以为就是求左子树深度+右子树深度(路径需包含根节点)，没有想到同在一个子树的两个节点也有可能是距离最远的。
用DFS解决即可：
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
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
    let max = 0
    const diameter = node => {
        if (!node) return 0
        const l = diameter(node.left), r = diameter(node.right)
        max = Math.max(max, l + r)
        return Math.max(l, r) + 1
    }
    diameter(root)
    return max
}
```