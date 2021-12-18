/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let arr = new Array();
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            arr.push([i, j]);
        }
    }

    arr.sort((v1, v2) => Math.abs(v1[0] - rCenter) + Math.abs(v1[1] - cCenter) - (Math.abs(v2[0] - rCenter) + Math.abs(v2[1] - cCenter)));

    return arr;
};