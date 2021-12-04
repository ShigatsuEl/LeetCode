/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let left = 0, right = 1, output = 0;
    while (left !== nums.length - 1) {
        if (Math.abs(nums[left] - nums[right]) === k) {
            output++;
        };
        if (right === nums.length - 1) {
            left += 1;
            right = left + 1;
            continue;
        }
        right++;
    }
    return output;
};