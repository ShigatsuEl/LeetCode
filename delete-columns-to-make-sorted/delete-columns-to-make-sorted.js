/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result= 0, column = 0;
    
    strs = strs.map((str) => str.split(""));
    
    while (column !== strs[0].length) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (strs[i][column] > strs[i + 1][column]) {
                result++;
                break;
            }
        }
        column++;
    }
    
    return result;
};