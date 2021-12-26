/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    else {
        let arr = mat.flat(), count = 0;
        let result = Array.from(Array(r), () => Array(c));
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[0].length; j++) {
                result[i][j] = arr[count++];
            }
        }
        return result;
    }
};