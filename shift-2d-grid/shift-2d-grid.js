/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let result = grid.map((row) => row.slice());
    let rowLength = grid.length, columnLength = grid[0].length;
    
    while (k !== 0) {
        for (let i = 0; i < rowLength; i++) {
            for (let j = 0;  j < columnLength; j++) {
                if (i === rowLength - 1 && j === columnLength - 1) {
                    result[0][0] = grid[rowLength - 1][columnLength - 1];
                } else if (j === columnLength - 1) {
                    result[i + 1][0] = grid[i][columnLength - 1];
                } else {
                    result[i][j + 1] = grid[i][j];
                }
            }
        }
        grid = result.map((row) => row.slice());
        k--;
    }
    
    return result;
};