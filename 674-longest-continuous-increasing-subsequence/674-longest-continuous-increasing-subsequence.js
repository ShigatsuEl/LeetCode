/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1, result = max;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) max++;
        else {
            result = Math.max(result, max);
            max = 1;
        }
    }
    
     result = Math.max(result, max);
    
    return result;
};