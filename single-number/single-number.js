/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    
    for (let x of nums) {
        if (map[x]) {
            map[x] += 1;
        } else {
            map[x] = 1;
        }
    }
    
    for (let x in map) {
        if (map[x] === 1) return parseInt(x);
    }
};