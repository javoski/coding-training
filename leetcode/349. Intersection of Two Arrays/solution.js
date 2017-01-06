/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const hash = {}
    nums1.forEach(e => hash[e] = true)
    return nums2.filter(e => {
        if (hash[e]) {
            hash[e] = false
            return true
        }
    })
}