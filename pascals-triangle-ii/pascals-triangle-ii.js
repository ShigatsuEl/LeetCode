/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let results = [[1], [1,1]];
    let rows = [];
    if (rowIndex === 0) return results[0];
    if (rowIndex === 1) return results[1];
    for (let i = 2; i < rowIndex + 1; i++) {
        rows = [1];
        for (let j = 0; j < results[i - 1].length - 1; j++) {
            rows.push(results[i - 1][j] + results[i - 1][j + 1]);
        }
        rows.push(1);
        results.push(rows);
    }
    return results[results.length - 1];
};