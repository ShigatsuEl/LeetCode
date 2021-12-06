/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let rows = points.length, columns = points[0].length;
    let result = 0;
    
    for (let i = 0; i < rows - 1; i++) {
        let a = Math.abs(points[i + 1][0] - points[i][0]);
        let b = Math.abs(points[i + 1][1] - points[i][1]);
        result += Math.max(a, b);
    }
    
    return result;
};