/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let result = 0, ascending = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            ascending += nums[i];
        } else {
            result = Math.max(result, ascending);
            ascending = nums[i];
        }
    }
    
    result = Math.max(result, ascending);
    
    return result;
};