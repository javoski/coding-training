/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  var carry = (a & b) << 1
  return carry ? getSum(a ^ b, carry) : a ^ b
}