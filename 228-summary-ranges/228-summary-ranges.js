/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let range = [nums[0], nums[0]], result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (range[1] + 1 === nums[i + 1]) range[1] = nums[i + 1];
        else {
            if (range[0] === range[1]) {
                result.push("" + range[0]);
            } else {
                result.push("" + range[0] + "->" + range[1]);
            }
            range = [nums[i + 1], nums[i + 1]]
        }
    }
    
    return result;
};