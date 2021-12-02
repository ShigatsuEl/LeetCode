/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let set = {}, sum = 0;
    for (let x of nums) {
        if (set[x]) {
            set[x] += 1;
        } else {
            set[x] = 1;
        }
    }
    for (let x in set) {
        if (set[x] > 0) sum += (set[x] * (set[x] - 1)) / 2;
    }
    return sum;
};