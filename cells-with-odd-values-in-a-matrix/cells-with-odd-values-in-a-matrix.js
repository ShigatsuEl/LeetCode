/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let matrix = Array.from(Array(m), () => Array(n).fill(0)), result = 0;
    
    for (let i = 0; i < indices.length; i++) {
        const [r, c] = indices[i];
        for (let j = 0; j < n; ++j) ++matrix[r][j];
        for (let j = 0; j < m; ++j) ++matrix[j][c];
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] % 2 === 1) result++;
        }
    }
    
    return result;
};