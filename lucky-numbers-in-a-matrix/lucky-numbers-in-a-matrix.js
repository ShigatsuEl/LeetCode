/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let result = [], minis = [];
    
    for (let i = 0; i < matrix.length; i++) {
        const min = Math.min(...matrix[i]);
        const idx = matrix[i].findIndex((ele) => ele === min);
        minis.push(idx);
    }
    
    for (let i = 0; i < minis.length; i++) {
        const min = minis.slice(i, i + 1);
        let maxis = [];
        for (let j = 0; j < matrix.length; j++) {
            maxis.push(matrix[j][min]);
        }
        if (Math.max(...maxis) === matrix[i][min]) result.push(matrix[i][min]);
        maxis = [];
    }
    
    return result;
};