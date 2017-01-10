/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {}
    return nums.findIndex(n => {
        hash[n] = hash[n] || 0
        return ++hash[n] > 1
    }) !== -1
}