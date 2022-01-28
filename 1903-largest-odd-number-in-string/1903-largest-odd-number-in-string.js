/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let max = -1;
    
    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) % 2 === 1) max = i;
    }
    
    return max === -1 ? '' : num.slice(0, max + 1);
};