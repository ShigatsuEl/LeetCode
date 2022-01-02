/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let result = Number.MAX_SAFE_INTEGER;
    
    if (nums.length === 1) return 0;
    else {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - k + 1; i++) {
            const temp = nums.slice(i, i + k);
            result = Math.min(result, temp[temp.length - 1] - temp[0]);
        }
    }
    
    return result;
};