/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        const curr = nums2.indexOf(nums1[i]);
        
        if (curr === nums2.length - 1) result[i] = -1;
        
        for (let j = curr + 1; j < nums2.length; j++) {
            if (nums2[curr] < nums2[j]) {
                result[i] = nums2[j];
                break;
            } else {
                result[i] = -1;
            }
        }
    }
    
    return result;
};