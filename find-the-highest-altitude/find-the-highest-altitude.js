/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = [0];
    for (let x of gain) {
        let sum = result[result.length - 1] + x;
        result.push(sum);
    }
    return Math.max(...result);
};