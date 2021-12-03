/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [], point = 0, target = 0, sum = 0;
    while(nums.length !== result.length) {
        if (point === target) {
            target++;
            continue;
        }
        if (nums[point] > nums[target]) sum += 1;
        if (target >= nums.length - 1) {
            result.push(sum);
            sum = 0;
            point += 1;
            target = 0;
            continue;
        }
        target++;
    }
    return result;
};