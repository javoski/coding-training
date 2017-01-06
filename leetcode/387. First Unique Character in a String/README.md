[387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

>Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
>
Examples:
>```
s = "leetcode"
return 0.
>
s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
```

使用hash可以达到O(n)时间复杂度，不过题目中说可以默认字符串只包含小写字母，所以可以利用长度为26的数组实现。
```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const letterArr = Array(26).fill(0),
          firstCode = 'a'.charCodeAt(0),
          len = s.length
    for (let i = 0; i< len; i++) {
        letterArr[s.charCodeAt(i) - firstCode]++
    }
    for (let i = 0; i < len; i++) {
        if (letterArr[s.charCodeAt(i) - firstCode] === 1) {
            return i
        }
    }
    return -1
}
```