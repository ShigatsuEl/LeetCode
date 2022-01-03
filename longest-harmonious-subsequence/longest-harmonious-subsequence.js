/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    
    let obj = {}, result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    let keys = Object.keys(obj), values = Object.values(obj);
    
    for (let i = 0; i < keys.length - 1; i++) {
        if (Math.abs(Number(keys[i + 1]) - Number(keys[i])) === 1) {
            result = Math.max(result, Number(values[i + 1]) + Number(values[i])); 
        }
    }
    
    return result;
};