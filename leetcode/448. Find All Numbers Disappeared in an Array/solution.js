/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const len = nums.length
  const result = []
  for (let i = 0; i < len; i++) {
    nums[(nums[i] - 1) % len]  += len
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] <= len) {
      result.push(i + 1)
    }
  }
  return result
}