[242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?


判断一个字符串是否是另一个字符串的变形，首先想到排序，代码如下:
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}
```
题目中说字符串只包含小写字母，使用hash可以达到O(n)的时间复杂度，代码如下:
```js
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const counts = Array(26).fill(0)
    const zero = 'a'.charCodeAt(0)
    for (let i = s.length - 1; i >= 0; i--) {
        counts[s.charCodeAt(i) - zero]++
    }
    for (let i = t.length - 1; i >= 0; i--) {
        if (--counts[t.charCodeAt(i) - zero] < 0) {
            return false
        }
    }
    return true
}
```

