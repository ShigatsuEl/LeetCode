/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    const array = new Array(...heights);
    let sorted = array.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if(sorted[i] !== heights[i]) count++;
    }
    return count;
};