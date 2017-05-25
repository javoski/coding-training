[169. Majority Element](https://leetcode.com/problems/majority-element/)

>Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
>
>You may assume that the array is non-empty and the majority element always exist in the array.


找出长度为n数组中出现次数大于n/2的的项，可以用hash解决:
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {}
    const half = nums.length / 2
    return nums.find(n => {
        counts[n] = counts[n] || 1
        return counts[n]++ >= half
    })
}
```

这里还有一个空间复杂度为O(1)的解法:
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, m
    nums.forEach(n => {
        if (count === 0) {
            count = 1
            m = n
        } else if (n === m) count++
        else count--
    })
    return m
}
```



