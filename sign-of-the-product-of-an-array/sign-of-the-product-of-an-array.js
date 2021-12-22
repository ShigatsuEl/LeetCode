/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let count = 0;
    
    if (nums.includes(0)) return 0;
    
    for (let x of nums) {
        if (x  > 0) {
            continue;
        } else {
            count++;
        }
    }
    
    return count % 2 === 0 ? 1 : -1;
};