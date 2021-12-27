/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            let count = 0;
            
            // 1로부터 k까지 떨어진 거리의 모든 값을 더해 1보다 크면 최소 거리보다 적게 떨어진 것으로 간주해 false 반환
            for (let j = i - k; j <= i + k; j++) {
                if (!isNaN(nums[j])) count += nums[j];
            }
            
            if (count !== 1) return false;
        }
    }
    
    return true;
};