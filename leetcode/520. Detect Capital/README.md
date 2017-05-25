[520. Detect Capital](https://leetcode.com/problems/detect-capital/?tab=Description)

>Given a word, you need to judge whether the usage of capitals in it is right or not.
>
>We define the usage of capitals in a word to be right when one of the following cases holds:
>
>All letters in this word are capitals, like "USA".
>All letters in this word are not capitals, like "leetcode".
>Only the first letter in this word is capital if it has more than one letter, like "Google".
>Otherwise, we define that this word doesn't use capitals in a right way.
>Example 1:
>```
>Input: "USA"
>Output: True
>```
>Example 2:
>```
>Input: "FlaG"
>Output: False
>```
>**Note:** The input will be a non-empty word consisting of uppercase and lowercase latin letters.

判断某个单词是否为以下三种情况：
1. 全部大写
2. 全部小写
3. 第一个字母大写，剩下的小写

用简单的正则可以实现:
```js
/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
    const regExp = /^([A-Z]+|[a-z]+|[A-Z][a-z]+)$/
    return regExp.test(word)
}
```
