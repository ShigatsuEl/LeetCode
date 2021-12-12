/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {}, result = 0;
    
    for (let x of nums) {
        if (obj[x]) {
            obj[x] += 1;
        } else {
            obj[x] = 1;
        }
    }
    
    for (let x in obj) {
        if (obj[x] === 1) result += parseInt(x);
    }
    
    return result;
};