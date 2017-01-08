/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {}
    const half = nums.length / 2
    return nums.find(n => {
        counts[n] = counts[n] || 1
        return counts[n]++ >= half
    })
}