/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    
    nums.sort((a, b) => a - b);
    return gcd(nums[0], nums[nums.length - 1]);
};