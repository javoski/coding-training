[202. Happy Number](https://leetcode.com/problems/happy-number/#/description)

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1


如果在循环过程中出现了之前出现过的数值，则不是happy number，可以用一个Set来保存出现过的数值。
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const sumOfDigitsSquare = n => {
        let sum = 0
        while (n > 0) {
            const v = n % 10
            sum += v * v
            n = Math.floor(n / 10)
        }
        return sum
    }
    const set = new Set()
    while (n !==1) {
        if (set.has(n)) return false
        set.add(n)
        n = sumOfDigitsSquare(n)
    }
    return true
}
```
