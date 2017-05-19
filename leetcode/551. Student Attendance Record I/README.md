[551. Student Attendance Record I](https://leetcode.com/problems/student-attendance-record-i/#/description)

You are given a string representing an attendance record for a student. The record only contains the following three characters:

1. **'A'** : Absent.
2. **'L'** : Late.
3. **'P'** : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

**Example 1:**
```
**Input:** "PPALLP"
**Output:** True
```
Example 2:
```
**Input:** "PPALLL"
**Output:** False
```


很简单的题目，一次循环计数即可：
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = 0, l = 0
    for (let ch of s) {
        if (ch === 'A') {
            a++
            l = 0
        }
        else if (ch === 'L') l++
        else l = 0
        if (a > 1 || l > 2) return false
    }
    return true
};
```

又想到用正则:
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return !/A.*A|LLL/.test(s)
};
```

其实使用一些String API也很简单，就是性能没有第一个好:
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return s.split('A').length < 3 && s.indexOf('LLL') === -1
};
```