/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = Math.max(...nums);
    nums = nums.filter((num) => num !== first);
    let second = nums.length !== 0 && Math.max(...nums);
    nums = nums.filter((num) => num !== second);
    let third = nums.length !== 0 && Math.max(...nums);
    console.log(first, second, third)
    if (typeof third === 'number') {
        return third;
    }
    if (typeof third !== 'number' || typeof second !== 'number') {
        return first;
    }
};