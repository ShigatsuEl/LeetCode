/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let result = [];
    
    function distinctArr(middle, left, right) {
        for (let i = 0; i < middle.length; i++) {
            if (left.includes(middle[i]) || right.includes(middle[i])) {
                if (!result.includes(middle[i])) result.push(middle[i]);
            }
        }
    }
    
    distinctArr(nums1, nums2, nums3);
    distinctArr(nums2, nums1, nums3);
    distinctArr(nums3, nums1, nums2);
    
    return result;
};