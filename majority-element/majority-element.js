/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = 0, majority = nums.length / 2, map = new Map();
    
    nums.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    })
    
    for (let [key, value] of map) {
        if (value > majority) return parseInt(key);
    }
};