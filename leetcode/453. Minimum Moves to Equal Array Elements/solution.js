/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    return nums.reduce((s, n) => s + n, -nums.length * Math.min(...nums))
}