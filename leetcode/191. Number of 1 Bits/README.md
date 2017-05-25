[191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/#/description)

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the [Hamming weight](http://en.wikipedia.org/wiki/Hamming_weight)).

For example, the 32-bit integer ’11' has binary representation ```00000000000000000000000000001011```, so the function should return 3.

找出一个32位的无符号整数的二进制里面有多少个'1'，可以直接用JS中的Number.prototype.toString(base)，代码如下:
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g, '').length
}
```

也可以用一些简单的位运算解决:
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let weight = 0
    while (n) {
       weight += n & 1
       n >>>= 1
    }
    return weight
}
```
或者:
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let weight = 0
    while (n) {
       weight++
       n &= (n - 1) // 无符号整数才能这样
    }
    return weight
}
```