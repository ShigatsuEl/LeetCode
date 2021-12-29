/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length === 1) return nums[0] === 1 ? 0 : 1;
    
    let result;
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            result = i;
            break;
        }
    }
    
    if (result === undefined) return nums.length;
    
    return result;
};