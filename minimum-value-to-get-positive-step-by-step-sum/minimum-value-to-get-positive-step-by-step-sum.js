/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let result = 0, point = 0, sum = result;
    
    while (point !== nums.length) {
        sum += nums[point];
        if (sum < 1) {
            result++;
            sum = result;
            point = 0;
            continue;
        } else {
            point++;
            continue;
        }
    }
    
    if (result === 0) return 1;
    
    return result;
};