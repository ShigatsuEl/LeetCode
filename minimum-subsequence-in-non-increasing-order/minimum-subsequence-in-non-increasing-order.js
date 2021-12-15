/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    if (nums.length === 1) return nums;
    
    let result = [], sum = nums.reduce((acc, cur) => acc += cur);
    
    nums.sort((a, b) => b - a);
    
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i]);
        let subSum = result.reduce((acc, cur) => acc += cur);
        if (subSum <= sum - subSum) {
            continue;
        } else {
            return result;
        }
    }
};