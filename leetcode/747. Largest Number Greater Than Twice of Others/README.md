[747. Largest Number Greater Than Twice of Others](https://leetcode.com/problems/largest-number-greater-than-twice-of-others/description/)

>
>In a given integer array nums, there is always exactly one largest element.
>
>Find whether the largest element in the array is at least twice as much as every other number in the array.
>
>If it is, return the index of the largest element, otherwise return -1.
>
>**Example 1:**
>```
>Input: nums = [3, 6, 1, 0]
>Output: 1
>Explanation: 6 is the largest integer, and for every other number in the array x,
>6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
>```
>**Example 2:**
>```
>Input: nums = [1, 2, 3, 4]
>Output: -1
>Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
>```
>**Note:**
>1. nums will have a length in the range [1, 50].
>2. Every nums[i] will be an integer in the range [0, 99].


在一个数组中，若其中最大数的值是其他所有数值的至少两倍大，则输出这个最大数的下标，否则输出-1。
只需要拿最大数和第二大的数比较就行，可以在一轮循环内解决。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIndex = 0, secondMaxIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[maxIndex] < nums[i]) {
            secondMaxIndex = maxIndex
            maxIndex = i
        } else if (nums[secondMaxIndex] < nums[i] || secondMaxIndex === maxIndex) {
            secondMaxIndex = i
        }
    }
    return (nums[secondMaxIndex] === 0 || nums[maxIndex] / nums[secondMaxIndex] >= 2) ? maxIndex : -1
}
```