[136. Single Number](https://leetcode.com/problems/single-number/)

>Given an array of integers, every element appears twice except for one. Find that single one.
>
>Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


题目大意是找出一个整数数组中除了一个值只出现一次外，其他值都出现两次，对数组遍历一遍做XOR运算即可:
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   return nums.reduce((v, n) => {
       return v ^ n
   }, 0) 
}
```