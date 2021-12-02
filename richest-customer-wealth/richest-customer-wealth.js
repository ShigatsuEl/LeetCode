/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let rows = accounts.length;
    let columns = accounts[0].length;
    let sum = 0, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            sum += accounts[i][j];
        }
        max = Math.max(max, sum);
        sum = 0;
    }
    return max;
};