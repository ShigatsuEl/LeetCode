/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = new Map();
    
    for (let n of nums) {
        map.set(n, (map.get(n) + 1) || 1);
    }
    
    // 빈도 수에 따라 정렬 하지만 빈도 수가 같으면 값의 크기에 따라 재정렬 한다
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};