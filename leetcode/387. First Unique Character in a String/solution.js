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