[70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/#/description)

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given n will be a positive integer.

经典的爬楼梯问题，现在有n阶楼梯，每次爬只能爬1阶或者2阶，问有多少种不同的爬法？
一开始思路没打开，用了递归，代码如下：
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 0
    const climb = n => {
        if (n <= 1) count++
        else {
            climb(n - 1)
            climb(n - 2)
        }
    }
    climb(n)
    return count
}
```
结果是对的，但是在n为38的时候超时了(Time Limit Exceeded)😂。
后来想到，假设n阶的楼梯有f(n)种爬法，最后一步只可能爬了1步或者2步，那么就有f(n)=f(n-1)+f(n-2)，这不就是斐波那契数列吗😄。
最后Accepted的代码如下(没有考虑n为0的情况):
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 0, second = 1
    for (let i = 1; i <= n; i++) {
        [first, second] = [second, first + second]
    }
    return second
};
```