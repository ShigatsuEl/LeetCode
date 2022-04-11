/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = [], negative = [], result = [];
    
    for (let x of nums) {
        x > 0 ? positive.push(x) : negative.push(x);
    }
    
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        result.push(positive[i], negative[i]);
    }
    
    return result;
};