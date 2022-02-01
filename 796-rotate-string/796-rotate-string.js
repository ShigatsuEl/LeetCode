/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        let shiftVal = s.substring(0, 1);
        s = s.substring(1) + shiftVal;
        if (s === goal) return true;
    }
    
    return false;
};