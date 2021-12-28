/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minimize = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            minimize = Math.min(minimize, Math.abs(i - start));
        }
    }
    
    return minimize;
};