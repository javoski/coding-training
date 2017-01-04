/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    return String.fromCharCode(s.concat(t).split('').reduce((code, char) => {
        return code ^ char.charCodeAt(0)
    }, 0))
}