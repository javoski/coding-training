/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var kbRowRE = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i
    return words.filter(word => kbRowRE.test(word))
}