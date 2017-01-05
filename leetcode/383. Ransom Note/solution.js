/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {}
    for (let c of magazine) {
        map[c] ? map[c]++ : map[c] = 1
    }
    for (let c of ransomNote) {
        if (!map[c] || --map[c] < 0) {
            return false
        }
    }
    return true
}