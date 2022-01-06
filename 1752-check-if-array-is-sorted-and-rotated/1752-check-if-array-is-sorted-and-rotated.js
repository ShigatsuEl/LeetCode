/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let result = [...nums];
    let length = nums.length;
    
    while (length !== 0) {
        nums.unshift(nums.pop());
        let flag = true;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] < nums[i]) flag = false;
        }
        if (flag) return true;
        length--;
    }
    
    return false;
};