[594. Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/#/description)


We define a harmonious array is an array where the difference between its maximum value and its minimum value is **exactly 1**.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
```
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
```
Note: The length of the input array will not exceed 20,000.


利用HashMap实现O(n)的时间复杂度:
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map()
    nums.forEach(n => {
        map[n] = map[n] ? map[n] + 1 : 1
    })
    return nums.reduce((max, n) => {
        if (map.has(n + 1)) return Math.max(max, map[n] + map[n + 1])
        return max
    }, 0)
}
```