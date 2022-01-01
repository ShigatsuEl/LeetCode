/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let left = 0, right = 0, result = [];
    
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    while (nums1[left] !== undefined && nums2[right] !== undefined) {
        // console.log(nums1[left], nums2[right])
        if (nums1[left] === nums2[right]) {
            result.push(nums1[left]);
            left++;
            right++;
        }
        else if (nums1[left] < nums2[right]) left++;
        else right++;
    }
    
    return result;
};