[66. Plus One](https://leetcode.com/problems/plus-one/#/description)

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.


简单的加法运算，保存好进位，一次循环搞定。代码如下:
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0
    digits[digits.length - 1]++
    for (let i = digits.length - 1; i >= 0; i--) {
        const n = (digits[i] + carry)
        digits[i] = n % 10
        carry = n > 9 ? 1 : 0
    }
    if (carry) digits.unshift(carry)
    return digits
}
```