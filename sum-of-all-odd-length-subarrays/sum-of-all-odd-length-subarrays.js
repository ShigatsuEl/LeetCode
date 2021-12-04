/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0, point = 0, odd = 1;
    while (odd <= arr.length) {
        if (point + odd > arr.length) {
            odd += 2;
            point = 0;
            continue;
        }
        sum += arr.slice(point, point + odd).reduce((acc, cur) => acc += cur);
        point++;
    }
    return sum;
};