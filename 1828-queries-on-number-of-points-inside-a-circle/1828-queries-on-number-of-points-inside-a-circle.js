/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let result = [];
    
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < points.length; j++) {
            let dist = Math.sqrt(Math.pow(queries[i][0] - points[j][0], 2) + Math.pow(queries[i][1] - points[j][1], 2));
            if (dist <= queries[i][2]) {
                count++;
            }
        }
        result.push(count);
    }
    
    return result;
};