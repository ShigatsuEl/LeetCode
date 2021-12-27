/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let x = 0;
    
    while (x <= nums.length) {
        let count = nums.filter((num) => x <= num).length;
        if (x === count) return x;
        x++;
    }
    
    return -1;
};