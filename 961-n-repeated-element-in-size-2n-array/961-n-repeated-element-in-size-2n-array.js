/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let obj = {};
    
    nums.forEach((num) => obj[num] = (obj[num] || 0) + 1);
    
    return parseInt(Object.entries(obj).filter((v) => v[1] === nums.length / 2)[0][0]);
};