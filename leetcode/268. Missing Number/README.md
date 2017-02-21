[268. Missing Number](https://leetcode.com/problems/missing-number/?tab=Description)

>Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
>
For example,
Given nums = [0, 1, 3] return 2.
>
**Note:**
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

有一个长度为n数组是从0数到n，但是中间少了一个，找出这个数字，要求线性时间和常数额外空间
运用一些基本的数学计算可以完成要求：
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0)
    const n = nums.length
    return n - sum + n * (n - 1) / 2
}
```

