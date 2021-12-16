/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let result = [], odds = [], evens = [];
    
    for (let x of nums) {
        if (x % 2 === 0) evens.push(x);
        else odds.push(x);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) result.push(evens.pop());
        else result.push(odds.pop());
    }
    
    return result;
};