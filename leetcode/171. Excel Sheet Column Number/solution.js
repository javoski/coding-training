/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const zero = 'A'.charCodeAt(0) - 1
    let sum = 0
    let weight = 1
    for (let i = s.length - 1; i >= 0; i--) {
        sum += (s.charCodeAt(i) - zero) * weight
        weight *= 26
    }
    return sum
}