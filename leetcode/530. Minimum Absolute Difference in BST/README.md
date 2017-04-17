[530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/#/description)

>Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

>Example:
>
```
Input:
   1
    \
     3
    /
   2
>   
Output:
1
>
Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
```
**Note:** There are at least two nodes in this BST.

对二叉搜索树的结构的考察，对于根结点root，在树的其他结点中与root的值的差绝对值最小的是min(max(root.left), min(root.right))，再用简单的递归实现即可。

一个不太简洁的实现如下：

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
var getMinimumDifference = function(root) {
    let lv = Number.MAX_VALUE, rv = lv, left = root.left, right = root.right
    if (left) {
        while (left.right) {
            left = left.right
        }
        lv = Math.min(root.val - left.val, getMinimumDifference(root.left))
    }
    if (right) {
        while (right.left) {
            right = right.left
        }
        rv = Math.min(right.val - root.val, getMinimumDifference(root.right))
    }
    return Math.min(lv, rv)
}
```