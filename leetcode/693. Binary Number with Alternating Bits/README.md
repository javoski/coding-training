[693. Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/description/)

>Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
>
>**Example 1:**
>```
>**Input:** 5
>**Output:** True
>**Explanation:**
>The binary representation of 5 is: 101
>```
>**Example 2:**
>```
>**Input:** 7
>**Output:** False
>**Explanation:**
>The binary representation of 7 is: 111.
>```

给定一个正整数，若它的二进制中任意相邻的两个位没有重复的，返回 true ,否则返回 false 。可以用简单的位运算和模二运算实现，代码如下，也可以通过调用 n.toString(2) 转化为字符串实现
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let lastBit = -1
    while (n) {
        const bit = n % 2
        if (lastBit === bit) return false
        lastBit = bit
        n >>= 1
    }
    return true
}
```