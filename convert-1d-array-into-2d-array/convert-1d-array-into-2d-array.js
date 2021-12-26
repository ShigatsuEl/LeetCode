/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) return [];
    else {
        let count = 0;
        let result = Array.from(Array(m), () => Array(n));
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[0].length; j++) {
                result[i][j] = original[count++];
            }
        }
        return result;
    }
};