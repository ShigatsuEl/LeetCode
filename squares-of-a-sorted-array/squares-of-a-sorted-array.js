/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answer = nums;
    answer = answer.map((value) => Math.pow(value, 2)).sort((a, b) => a - b);
    return answer;
};