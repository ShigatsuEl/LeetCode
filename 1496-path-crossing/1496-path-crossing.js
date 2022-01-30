/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let obj = {
        '00': 1,
        '01': 0,
        '10': 0,
        '11': 0
    }, point = [0, 0];
    
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') point[1] += 1;
        else if (path[i] === 'S') point[1] -= 1;
        else if (path[i] === 'E') point[0] += 1;
        else point[0] -= 1;
        
        let location = [...point].join('');
        obj[location] = (obj[location] || 0) + 1;
    }
    
    return Object.values(obj).every((v) => v === 1 || v === 0) ? false : true;
};