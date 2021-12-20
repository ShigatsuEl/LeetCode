/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let result = [];
    
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            result.push([i, Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)]);
        }
    }
    
    if (result.length === 0) return -1;
    
    return result.sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0];
};