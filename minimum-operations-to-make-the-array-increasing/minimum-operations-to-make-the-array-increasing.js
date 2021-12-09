/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    if (nums.length === 1) return 0;
    
    let sum = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            continue;
        } else {
            let increment = Math.abs(nums[i + 1] - nums[i]) + 1;
            nums[i + 1] += increment;
            sum += increment;
        }
    }
    return sum;
};