[572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/#/description)

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:
```
     3
    / \
   4   5
  / \
 1   2
```
Given tree t:
```
   4 
  / \
 1   2
```
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:
```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```
Given tree t:
```
   4
  / \
 1   2
```
Return false.

给定两棵二叉树s和t，判断t是否是s的子树，先写出判断两棵二叉树是否相等的函数，然后遍历s的每个节点，判断此节点下的子树是否与t相等即可:
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s) return false
    if (isSameTree(s, t)) return true
    return isSubtree(s.left, t) || isSubtree(s.right, t)
}

const isSameTree = function (s, t) {
    if (!s && !t) return true
    if ((s && !t) || (!s && t)) return false
    if (s.val !== t.val) return false
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
}
```
当然这种解法性能不太好，可以考虑把两棵树序列化，然后用KMP比较字符串。