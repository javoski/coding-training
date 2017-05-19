[563. Binary Tree Tilt](https://leetcode.com/problems/binary-tree-tilt/#/description)

Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

**Example:**
```
**Input:**
         1
       /   \
      2     3
**Output:** 1
**Explanation:** 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
```
**Note:**
1. The sum of node values in any subtree won't exceed the range of 32-bit integer.
2. All the tilt values won't exceed the range of 32-bit integer.

求一颗二叉树的倾斜度，倾斜度的定义为左子树所有节点的和与右子树所有节点的和的差的绝对值，即abs(sum(left) - sum(right))。
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
const findTilt = function(root) {
    let tilt = 0
    const sum = root => {
        if (!root) return 0
        const leftSum = sum(root.left), rightSum = sum(root.right)
        tilt += Math.abs(leftSum - rightSum)
        return leftSum + rightSum + root.val
    }
    sum(root)
    return tilt
}
```
