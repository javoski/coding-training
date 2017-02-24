[231. Power of Two](https://leetcode.com/problems/power-of-two/?tab=Solutions)

>Given an integer, write a function to determine if it is a power of two.

```js
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if (n <= 0) return false
   const binary = n.toString(2)
   return binary.indexOf('1') === binary.lastIndexOf('1')
}
```

后来看到一个更好的解法:
```js
const isPowerOfTwo = function(n) {
    return (n & (n - 1) === 0) && n > 0
}
```