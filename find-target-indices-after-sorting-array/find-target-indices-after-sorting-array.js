/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let result = [];
    nums.sort((a, b) => a - b).forEach((num, i) => {
        if (num === target) result.push(i);
    });
    return result;
};