/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let result = 0;
    
    nums.sort((a, b) => b - a);
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let a = nums[i];
                let b = nums[j];
                let c = nums[k];
                let longest = Math.max(a, b, c);
                if (longest === a && a < b + c) return a + b + c;
                if (longest === b && b < a + c) return a + b + c;
                if (longest === c && c < a + b) return a + b + c;
            }
        }
    }
    
    return result;
};