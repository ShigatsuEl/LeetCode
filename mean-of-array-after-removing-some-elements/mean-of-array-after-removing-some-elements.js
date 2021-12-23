/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    
    let length = (arr.length / 100) * 5;
    
    arr.splice(0, length);
    arr.splice(arr.length - length);
    
    return arr.reduce((acc, cur) => acc += cur) / arr.length;
};