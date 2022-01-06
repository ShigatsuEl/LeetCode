/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let nums2 = nums.map((x, i) => [x, i]);
    
    nums2.sort((x, y) => y[0] - x[0]);
    
    let set = new Set(), res = [], n = nums.length;
    for (let i = 0; i < k; i++) set.add(nums2[i][1]); // save selected index
    for (let i = 0; i < n; i++) {
        if (set.has(i)) res.push(nums[i]);
    }
    
    return res;
};