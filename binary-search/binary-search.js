/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.includes(target)) return -1;
    
    let half = Math.floor(nums.length / 2);
    
    while (nums[half] !== target) {
        if (nums[half] > target) half--;
        else half++;
    }
    
    return half;
};