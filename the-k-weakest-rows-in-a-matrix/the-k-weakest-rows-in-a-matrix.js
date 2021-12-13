/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let result = [];
    
    mat = mat.map((row) => row.reduce((acc, cur) => acc += cur));
    
    for (let i = 0; i < mat.length; i++) {
        let idx = mat.findIndex((val) => val === Math.min(...mat));
        mat[idx] = Number.MAX_SAFE_INTEGER;
        result.push(idx);
    }
    
    return result.splice(0, k);
};