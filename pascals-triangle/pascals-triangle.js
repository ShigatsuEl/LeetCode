/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let results = [[1], [1,1]];
    let rows = [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return results;
    for (let i = 2; i < numRows; i++) {
        rows = [1];
        for (let j = 0; j < results[i - 1].length - 1; j++) {
            rows.push(results[i - 1][j] + results[i - 1][j + 1]);
        }
        rows.push(1);
        results.push(rows);
    }
    return results;
};