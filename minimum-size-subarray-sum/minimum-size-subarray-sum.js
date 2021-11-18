/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // let sum = 0, point = nums.length - 1;
    // nums.sort((a, b) => a - b);
    // console.log(nums)
    // while(point >= -1) {
    //     if (sum >= target) {
    //         return nums.length - 1 - point;
    //     }
    //     sum += nums[point];
    //     console.log(sum, point)
    //     point--;
    // }
    // return 0;
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;
    
    while(right < nums.length) {
        sum += nums[right];
        
        while(sum >= target) {
            let len = right - left +1;
            if(result === 0 || len < result) result = len;
            sum -= nums[left];
            left++
        }
        right++;
    }
    return result;
};