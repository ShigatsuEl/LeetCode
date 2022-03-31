/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let obj = {}, result = Number.MAX_SAFE_INTEGER;
    
    nums.forEach((num) => obj[num] = (obj[num] || 0) + 1);
    const max = Math.max(...Object.values(obj));
    let degree = Object.entries(obj).filter((v) => v[1] === max);
    
    // let degree = parseInt(Object.entries(obj).sort((a, b) => b[1] - a[1] || parseInt(b[0]) - parseInt(a[0]))[0][0]);
    
    for (let [key, _] of degree) {
        const first = nums.indexOf(parseInt(key));
        const last = nums.lastIndexOf(parseInt(key));
        if (nums.slice(first, last + 1).length < result) result = nums.slice(first, last + 1).length;
    }
    
    return result;
};