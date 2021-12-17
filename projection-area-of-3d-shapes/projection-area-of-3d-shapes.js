/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let result = 0;
    
    if (grid.length * grid[0].length === 1) {
        return 1 + (grid[0][0] * 2);
    }
    
    for (let i = 0; i < grid.length; i++) {
        let rowMax = 0, columnMax = 0;
        
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) result++;
        }
        
        for (let j = 0; j < grid[0].length - 1; j++) {
            if (grid[i][j] < grid[i][j + 1]) columnMax = grid[i][j + 1] > columnMax ? grid[i][j + 1] : columnMax;
            else columnMax = grid[i][j] > columnMax ? grid[i][j] : columnMax;
            
            if (grid[j][i] < grid[j + 1][i]) rowMax = grid[j + 1][i] > rowMax ? grid[j + 1][i] : rowMax;
            else rowMax = grid[j][i] > rowMax ? grid[j][i] : rowMax;
        }
        
        result += columnMax;
        columnMax = 0;
        result += rowMax;
        columnMax = 0;
    }
    
    return result;
};