/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const hash = {}
    const result = []
    nums1.forEach(n => {
        hash[n] = hash[n] || 0
        hash[n]++
    })
    nums2.forEach(n => {
        if (hash[n]-- > 0) {
            result.push(n)
        }
    })
    return result
};