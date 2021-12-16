/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [], count = 1;
    
    for (let x of target) {
        if (x === count) {
            result.push("Push");
            count++;
        }
        else {
            let length = x - count;
            count += length + 1;
            for (let i = 0; i < length; i++) {
                result.push("Push");
                result.push("Pop");
            }
            result.push("Push");
        }
    }
    
    return result;
};