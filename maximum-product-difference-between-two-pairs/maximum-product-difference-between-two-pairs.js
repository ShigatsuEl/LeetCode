/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);
    let a = nums[nums.length - 1], b = nums[nums.length - 2], c = nums[0], d = nums[1];
    return (a * b) - (c * d);
};