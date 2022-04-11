/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let removed = [...nums];
        removed.splice(i, 1);
        if (removed.every((v, i) => i === 0 ? true : v > removed[i - 1])) return true;
    }
    
    return false;
};