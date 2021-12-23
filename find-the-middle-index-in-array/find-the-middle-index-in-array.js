/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let left = 0, right = 0;
    
    if (nums.length === 1) return 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            left = 0;
            right = nums.slice(i + 1).reduce((acc, cur) => acc += cur);
            if (left === right) return i;
        } else if(i === nums.length - 1) {
            right = 0;
            left = nums.slice(0, nums.length - 1).reduce((acc, cur) => acc += cur);
            if (left === right) return i;
        } else {
            left = nums.slice(0, i).reduce((acc, cur) => acc += cur);
            right = nums.slice(i + 1).reduce((acc, cur) => acc += cur);
            if (left === right) return i;
        }
        
    }
    
    return -1;
};