/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let diff = 0
    let max_min = new Array(2)
    
    if(nums.length === 1) return diff
    
    // get max
    max_min[0] = Math.max(...nums)
    
    // get min
    max_min[1] = Math.min(...nums)
    
    // minimize max
    max_min[0] -= k
    
    // maximize min
    max_min[1] += k
    
    diff = max_min[0] - max_min[1]
    
    return diff < 0 ? 0 : diff  
};