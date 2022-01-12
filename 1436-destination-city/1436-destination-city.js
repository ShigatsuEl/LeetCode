/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    if (paths.length === 1) return paths[0][1];
    
    let destination = {};
    
    for (let i = 0; i < paths.length; i++) {
        destination[paths[i][0]] = paths[i][1];
    }
    
    let temp = paths[0][0];
    
    while (temp) {
        if (destination[temp]) {
            temp = destination[temp];
        } else {
            return temp;
        }
    }
};