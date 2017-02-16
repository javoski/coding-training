[485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/?tab=Description)

>Given a binary array, find the maximum number of consecutive 1s in this array.
>
Example 1:
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
>    The maximum number of consecutive 1s is 3.
```
Note:
>
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000


一个数组只包含0和1，找出最长的连续1的个数。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let max = 0, tmp = 0
    for (let i = 0, l = nums.length; i < l; i++) {
        if (nums[i] === 1)  (++tmp > max) && (max = tmp)
        else tmp = 0
    }
    return max
}
```
