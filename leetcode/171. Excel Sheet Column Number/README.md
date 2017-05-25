[171. Excel Sheet Column Number](https://leetcode.com/problems/excel-sheet-column-number/)

>Related to question Excel Sheet Column Title
>
>Given a column title as appear in an Excel sheet, return its corresponding column number.
>
>For example:
>```
>    A -> 1
>    B -> 2
>    C -> 3
>    ...
>    Z -> 26
>    AA -> 27
>    AB -> 28 
>```


类似于26进制，代码如下:
```js
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const zero = 'A'.charCodeAt(0) - 1
    let sum = 0, weight = 1
    for (let i = s.length - 1; i >= 0; i--) {
        sum += (s.charCodeAt(i) - zero) * weight
        weight *= 26
    }
    return sum
}
```
