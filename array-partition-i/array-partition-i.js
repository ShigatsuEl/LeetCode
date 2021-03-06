/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i + 1]);
    }
    return sum;
};