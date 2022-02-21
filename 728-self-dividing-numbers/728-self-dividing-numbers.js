/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    
    for (let i = left; i <= right; i++) {
        let flag = true;
        let nums = i.toString().split('').map((v) => parseInt(v));
        for (let j = 0; j < nums.length; j++) {
            if (i % nums[j] !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) result.push(i);
    }
    
    return result;
};