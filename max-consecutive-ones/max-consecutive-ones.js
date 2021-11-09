/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let sum = 0;
    let sumArr = [];
    let result = 0;
    nums.forEach((num, idx) => {
        if (num === 1) {
            sum += 1;
        } else {
            sumArr.push(sum);
            sum = 0;
        }
        if (idx === nums.length - 1) {
            sumArr.push(sum);
        }
    });
    result = Math.max(...sumArr);
    return result;
};