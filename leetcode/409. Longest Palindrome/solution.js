/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {}
    let result = 0
    for (let c of s) {
        map[c] = map[c] ? ++map[c] : 1
    }
    for (let c in map) {
        result += map[c] - map[c] % 2
    }
    if (result < s.length) result++
    return result
}