/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    grid = grid.flat();
    return grid.filter((val) => val < 0).length;
};