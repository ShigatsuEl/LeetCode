/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0, late = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            absent += 1;
            if (absent >= 2) return false;
        }
        if (s[i] === s[i + 1] && s[i] === 'L') late++;
        else late = 0;
        if (late === 2) return false;
    }
    
    return true;
};