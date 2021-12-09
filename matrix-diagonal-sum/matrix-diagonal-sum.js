/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let rows = mat.length, columns = mat[0].length;
    let result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i === j) result.push(mat[i][j]);
            if (i !== j && i + j === mat.length - 1) result.push(mat[i][j]);
        }
    }
    return result.reduce((acc, cur) => acc += cur)
};