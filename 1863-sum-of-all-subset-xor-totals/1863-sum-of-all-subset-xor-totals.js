/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const sumXor = (nums, i, cur) => {
        if (i === nums.length) return cur;
        return sumXor(nums, i + 1, cur) + sumXor(nums, i + 1, cur ^ nums[i]);
    }
    return sumXor(nums, 0, 0);
};