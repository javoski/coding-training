[108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/#/description)

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

把一个有序数组转化成一颗高度平衡的二叉搜索树，简单的递归加上Array.prototype.slice即可解决:
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const len = nums.length
    if (len <= 0) return null
    const middle = ~~(len / 2)
    const root = new TreeNode(nums[middle])
    root.left = sortedArrayToBST(nums.slice(0, middle))
    root.right = sortedArrayToBST(nums.slice(middle + 1, nums.length))
    return root
};
```

为了更好的性能可以去掉slice，添加一个帮助函数array2BST(nums, start, end)。