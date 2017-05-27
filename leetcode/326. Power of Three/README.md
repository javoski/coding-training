[326. Power of Three](https://leetcode.com/problems/power-of-three/#/description)

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?


检查一个数是否为3的幂，且最好不要用循环或递归。


对于JavaScript，直接调用Number.prototype.toString(3)转为3进制字符串，若得到以1开头，其余全部为0的字符串(或者就是等于'1')，就说明原数是3的幂。
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
   return n > 0 && !!n.toString(3).match(/^10*$/)
}
```