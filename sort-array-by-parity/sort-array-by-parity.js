/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            temp.push(nums[i]);
            nums.splice(i, 1);
            i--;
        }
    }
    nums = [...nums, ...temp];
    return nums;
};