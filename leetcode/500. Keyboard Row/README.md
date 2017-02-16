[500. Keyboard Row](https://leetcode.com/problems/keyboard-row/)

>Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
>```
Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```
Note:
1. You may use one character in the keyboard more than once.
2. You may assume the input string will only contain letters of alphabet.


检查某一个单词是否可以用键盘上的一行字母打出来，解法很多，这里用了最简单的正则表达式
```js
var findWords = function(words) {
    var kbRowRE = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i
    return words.filter(word => kbRowRE.test(word))
}
```
