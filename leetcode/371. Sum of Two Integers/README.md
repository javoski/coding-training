[371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)

>Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
>
>Example:
>Given a = 1 and b = 2, return 3.

不使用'+'和'-'运算实现两个整数相加
```js
var getSum = function(a, b) {
  var carry = (a & b) << 1
  return carry ? getSum(a ^ b, carry) : a ^ b
}
```