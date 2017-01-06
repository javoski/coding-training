[349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

>Given two arrays, write a function to compute their intersection.
>
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
>
Note:
- Each element in the result must be unique.
- The result can be in any order.


找出两个数组的交集，利用hash可以线性时间复杂度解决问题：
```js
var intersection = function(nums1, nums2) {
    const hash = {}
    nums1.forEach(e => hash[e] = true)
    return nums2.filter(e => {
        if (hash[e]) {
            hash[e] = false
            return true
        }
    })
}
````
