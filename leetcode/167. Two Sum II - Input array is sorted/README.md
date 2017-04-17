[167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description)

>Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
>
>The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
>
>You may assume that each input would have exactly one solution and you may not use the same element twice.
>
>**Input:** numbers={2, 7, 11, 15}, target=9
>**Output:** index1=1, index2=2


给定一个数组和一个目标数字，找出数组中和等于目标数的两个数的下标：
```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1 = 0, index2 = numbers.length - 1
    while (index1 < index2) {
        const sum = numbers[index1] + numbers[index2]
        if (sum === target) break
        else if (sum < target) index1++
        else index2--
    }
    return [index1 + 1, index2 + 1]
}
```