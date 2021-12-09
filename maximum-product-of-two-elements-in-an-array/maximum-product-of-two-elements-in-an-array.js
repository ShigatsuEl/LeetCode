/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a, b) => a - b);
    
    let indices1 = nums[nums.length - 2], indices2 = nums[nums.length - 1];
    
    return (indices1 - 1) * (indices2 - 1);
};