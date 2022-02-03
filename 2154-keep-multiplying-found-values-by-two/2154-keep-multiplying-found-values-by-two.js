/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    while(nums.indexOf(original) !== -1) {
        original *= 2;
    }
    
    return original;
};