/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    
    for (let i = 0; i < 4; i++) {
        target = target[0].map((val, index) => target.map(row => row[index]).reverse());
        if (JSON.stringify(target) === JSON.stringify(mat)) return true;
    }
    
    return false;
};