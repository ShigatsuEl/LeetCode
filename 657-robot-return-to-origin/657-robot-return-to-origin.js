/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let obj = {};
    
    for (let x of moves) {
        if (!obj[x]) obj[x] = 1;
        else obj[x] += 1;
    }
    
    return obj['U'] === obj['D'] && obj['L'] === obj['R'] ? true : false;
};