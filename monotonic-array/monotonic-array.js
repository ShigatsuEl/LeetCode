/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increase = [...nums].sort((a, b) => a - b), decrease = [...nums].sort((a, b) => b - a);
    let increaseResult = true, decreaseResult = true;
    
    nums.forEach((v, i) => {
        if (nums[i] !== increase[i]) increaseResult = false;
    });
    nums.forEach((v, i) => {
        if (nums[i] !== decrease[i]) decreaseResult = false;
    });
    return increaseResult || decreaseResult;
};